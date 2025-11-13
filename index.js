const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT||3000;

app.use(express.json())

const fileUpload = require('express-fileupload');
app.use(fileUpload());

const db = require("./config/db");
db.connect();

const cloudinary = require("./config/cloudinary")
cloudinary.cloudConnect();

const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

app.listen(PORT, function(){
    console.log(`App is running at ${PORT}`);
})