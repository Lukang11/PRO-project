const express = require("express");
const app = express();
const recordRoutes = express.Router();
const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secret = 'secretkey';
const cors = require('cors');
app.use(cors());


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@task-manager.u7qr6rf.mongodb.net/?retryWrites=true&w=majority";
let db;

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;
    db = client.db("users");
});

app.use(bodyParser.json());

recordRoutes.route('/api/login').post(function (req, res) {
    const { login, password } = req.body; 
    db.collection('records').findOne({ login, password }, (err, user) => {
        if (err) {
          res.status(500).send({ message: 'Wystąpił błąd podczas logowania' });
        } else if (!user) {
          res.status(404).send({ message: 'Nieprawidłowa nazwa użytkownika lub hasło' });
        } else {
          // Creating JWT token
          const token = jwt.sign({ user }, secret, { expiresIn: '1h' });
          res.send({ token });
        }
      });
});

recordRoutes.route("/record/:id").get(function (req, res) {
    const id = req.params.id;
    db.collection("records").findOne({ _id: ObjectId(id) }, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

recordRoutes.route("/record/:name").get(function (req, res) {
    const name = req.params.name;
    db.collection("records").findOne({ name: name }, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

recordRoutes.route("/record/add").post(function (req, res) {
    const record = req.body;
    db.collection("records").insertOne(record, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

recordRoutes.route("/record/:id").delete(function (req, res) {
    const id = req.params.id;
    db.collection("records").deleteOne({ _id: ObjectId(id) }, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

recordRoutes.route("/record/:id").put(function (req, res) {
    const id = req.params.id;
    const record = req.body;
    db.collection("records").updateOne({ _id: ObjectId(id) }, { $set: record }, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = recordRoutes;