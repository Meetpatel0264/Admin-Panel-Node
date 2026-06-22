const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 9094;

app.use(express.static("public"));
app.use(bodyParser.urlencoded());

app.set("view engine", "ejs");

app.use("/", require("./routes/index"));

app.listen(PORT, () => {
    console.log(`Server Running http://localhost:${PORT}`);
});