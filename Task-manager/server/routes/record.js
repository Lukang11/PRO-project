const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

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

module.exports = recordRoutes;