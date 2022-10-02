const express = require("express");
const serverRouter = require("./routes/home.js");

const app = express();
app.set("views", "views");
app.set("view engine", "ejs"); //using ejs as view engine
app.use(express.json());
app.use(express.urlencoded({extended:true})); //handling incoming url
app.use(express.static("public")) //images, stylesheets etc from public, gets it before routes

app.use("/", serverRouter);

app.listen(3000, () => {
    console.log('Express is running port 3000')
});

