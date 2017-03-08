
const multer = require('multer');
const upload = multer({ dest: './uploads/'});

module.exports = function(app){

	app.get('/', function(req, res){
		res.render("home");
	});
	
	app.post('/up',  upload.single('image'), function (req, res, next) {
		  // req.file is the `avatar` file 
		  // req.body will hold the text fields, if there were any 	
		  res.send({
		  	filename: req.file.originalname,
		  	type: req.file.mimetype,
		  	size: req.file.size
		  })
		  
	});
}