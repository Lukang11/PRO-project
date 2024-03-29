const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

const { run } = require("./db/conn");

app.listen(port, () => {
    run().catch(console.dir);
    console.log(`Server is running on port: ${port}`);
});
