const express = require('express')
const router = express.Router();
const mysql = require('mysql');
let pool = require("../db.js");

router.get('/', async (req,res)=>{

	// pool.query("SELECT * FROM productos", function (error,results,fields){
 //    	if(error) throw error;
 //    	console.log(results[0].solution);
	// });
	let pool = mysql.createConnection({
	// connectionLimit: 10,
	host:     'localhost',
	user:     'root',
	password: 'n9Q&M{QK1rDD',
	database: 'calamitus',
    port:3306
});
	connection.connect();

	let resultado = await pool.query("SELECT * FROM productos");
	console.log(resultado);

	// res.render('index.html', {title:'Landing Page with NodeJS'});

	connection.end();
})

router.get('/contact',(req,res)=>{
	res.render('contact.html',);
})

// router.post('/contact',(req,res)=>{
// 	console.log(req.body)
// 	res.render('contact.html', req.body/*, {title:'Contact Page with NodeJS'}*/);
// })

router.get('/store',(req,res)=>{
	res.render('store.html', {title:'Eshop Page with NodeJS'});
})

router.get('/prod1',(req,res)=>{
	res.render('prod1.html', {title:'Product Page with NodeJS'});
})

module.exports = router;