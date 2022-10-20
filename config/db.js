/*module.exports = {
    "URI": "mongodb://username:password@hostname:port/database"
}*/

let atlasDB = "mongodb+srv://dbuser:X1YOgD2dBQeX5LqC@cluster005.3d8u2wx.mongodb.net/?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('<== Connected to MongoDB ==>');
    })

    return mongodb;
}