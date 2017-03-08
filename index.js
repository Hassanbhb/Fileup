const express = require('express');
const app = express();
const uploadController = require('./controllers/uploadController.js')

//middleware
app.use(express.static('./public'));
//template engine
app.set('view engine', 'ejs');

//controller
uploadController(app);



const port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server running at "+port);
});