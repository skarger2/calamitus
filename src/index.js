const express = require("express")
const app = express();
const path = require("path");
const cors = require("cors")

//settings
app.set('port',3000);
app.set('views',path.join(__dirname,'views'))
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');


//middleware
app.use(cors())

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')))

//listening the server
app.listen(app.get('port'), ()=>{
	console.log("SERVER is listening on port", app.get('port'))
})
