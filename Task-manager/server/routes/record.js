const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
const ObjectId = require('mongodb').ObjectId;


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@task-manager.u7qr6rf.mongodb.net/?retryWrites=true&w=majority";
let db;

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;
    db = client.db("employees");
});


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
    db.collection("records").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
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