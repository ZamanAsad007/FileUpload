const File = require('../models/file');

exports.localFileUpload = async function (req, res) {
    try{
        const file = req.files.file;
        console.log(file);

        let path = __dirname+ "/files/"+ Date.now()+`.${file.name.split('.')[1]}`;
        console.log("PATH-->", path);

        file.mv(path, function(err){
            console.log(err);
        })

        res.json({
            success: true,
            message: 'Local File Uploaded Successfully'
        })
    }catch(err){
        console.log(error);
    }
    
}