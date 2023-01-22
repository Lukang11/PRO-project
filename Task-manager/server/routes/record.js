const express = require("express");
const app = express();
const recordRoutes = express.Router();
const ObjectId = require("mongodb").ObjectId;
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const secret = "secretkey";
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcrypt");
const saltRounds = 10;

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:admin@task-manager.u7qr6rf.mongodb.net/?retryWrites=true&w=majority";
let db;

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;
  db = client.db("users");
});

app.use(bodyParser.json());

recordRoutes.route("/api/login").post(function (req, res) {
  const { login, password } = req.body;
  db.collection("records").findOne({ login }, (err, user) => {
    if (err) {
      res.status(500).send({ message: "Wystąpił błąd podczas logowania" });
    } else if (!user) {
      res
        .status(404)
        .send({ message: "Nieprawidłowa nazwa użytkownika lub hasło" });
    } else {
      bcrypt.compare(password, user.password, function (err, isMatch) {
        if (err) {
          res.status(500).send({ message: "Wystąpił błąd podczas logowania" });
        } else if (!isMatch) {
          res
            .status(404)
            .send({ message: "Nieprawidłowa nazwa użytkownika lub hasło" });
        } else {
          // Creating JWT token
          const token = jwt.sign({ user }, secret, { expiresIn: "1h" });
          res.send({ token });
        }
      });
    }
  });
});

recordRoutes.route("/api/register").post(function (req, res) {
  const { login, email, name, surname, password } = req.body;
  
  db.collection("records").findOne({ login }, (err, user) => {
    if (err) {
      res.status(500).send({ message: "Wystąpił błąd podczas rejestracji" });
    } else if (user) {
      res.status(409).send({ message: "Ta nazwa użytkownika jest już zarejestrowana" });
    } else {
      db.collection("records").findOne({ email }, (err, user) => {
        if (err) {
          res.status(500).send({ message: "Wystąpił błąd podczas rejestracji" });
        } else if (user) {
          res.status(409).send({ message: "Ten adres email jest już zarejestrowany" });
        } else {
          bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
            if (err) {
              res.status(500).send({ message: "Wystąpił błąd podczas rejestracji" });
            } else {
              db.collection("records").insertOne(
                { login, email, name, surname, password: hashedPassword },
                (err, result) => {
                  if (err) {
                    res
                      .status(500)
                      .send({ message: "Wystąpił błąd podczas rejestracji" });
                  } else {
                    res
                      .status(201)
                      .send({ message: "Rejestracja zakończona pomyślnie" });
                  }
                }
              );
            }
          });
        }
      });
    }
  });
});

recordRoutes.route("/api/verify").post(function (req, res) {
  const { token } = req.body;

  jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      res.status(401).send({ message: "Nieprawidłowy token" });
    } else {
      const login = decoded.user.login;
      res.status(200).send({ isValid: true, login: login });
    }
  });
});

recordRoutes.route("/record/:id").get(function (req, res) {
  const id = req.params.id;
  db.collection("records").findOne(
    { _id: ObjectId(id) },
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
});

recordRoutes.route("/record/:name").get(function (req, res) {
  const name = req.params.name;
  db.collection("records").findOne({ name: name }, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

recordRoutes.route("/record/add").post(function (req, res) {
  const record = req.body;
  db.collection("records").insertOne(record, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

recordRoutes.route("/record/:id").delete(function (req, res) {
  const id = req.params.id;
  db.collection("records").deleteOne(
    { _id: ObjectId(id) },
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
});

recordRoutes.route("/record/:id").put(function (req, res) {
  const id = req.params.id;
  const record = req.body;
  db.collection("records").updateOne(
    { _id: ObjectId(id) },
    { $set: record },
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
});

recordRoutes.route("/api/workinfo").get(function (req, res) {
  const data = db
    .collection("workinfo")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
});
recordRoutes.route("/api/workinfo/add").get(function (req, res) {
  const data = db
    .collection("workinfo")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  res.send(data);
});

module.exports = recordRoutes;
