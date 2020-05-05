let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();


let apiRoutes = require("../routes/api-routes");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:pa%24%24w0rd@cluster-project-2020-001-sbhdy.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

if(!db)
    console.log("Error connecting db");
else
    console.log("DB Connected successfully!");

const port = process.env.PORT || 8082;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

app.use("/api", apiRoutes);