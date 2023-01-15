const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin:<password>@task-manager.u7qr6rf.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        await client.db("employees").command({ ping: 1 });
        console.log("Connected successfully to server");
    } finally {
        await client.close();
    }
}

module.exports = { run }