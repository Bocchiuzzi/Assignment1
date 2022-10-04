const express = require("express");
var favicon = require('serve-favicon')
const serverRouter = require("./routes/server.js");

const app = express();

app.use(favicon(path.join(__dirname,'public', 'favicon.ico')))


app.set("views", "views");
app.set("view engine", "ejs"); //using ejs as view engine
app.use(express.json());
app.use(express.urlencoded({extended:true})); //handling incoming url
app.use(express.static("public")) //images, stylesheets etc from public, gets it before routes

app.use("/", serverRouter);

app.listen(3000, () => {
    console.log('Express is running port 3000')
});

