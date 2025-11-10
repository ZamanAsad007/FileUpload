const File = require('../models/file');

exports.localFileUpload = async function (req, res) {
    try{
        const file = req.files.file;
        console.log(file);
    }catch(err){
        
    }
    
}