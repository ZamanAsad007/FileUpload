const mongoose = require('mongoose');

require("dotenv").config();

exports.connect = function(){
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParse:true,
        useUnifiedTopology: true
    })
    .then(console.log("DB connected"))
    .catch(function(error){
        console.log("DB error");
        console.error(error);
        process.exit(1);

    });
}