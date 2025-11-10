const express = require('express');
const Router = express.Router();

const{imageUpload, videoUpload, imageReductionUpload, localFileUpload} = require("../controller/fileUpload");

Router.post('/localFileUpload', localFileUpload);

module.exports = Router;

