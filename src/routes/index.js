const express = require('express')
const router = express.Router();
const mysql = require('mysql');
const util = require('util');
const bcrypt = require('bcrypt');
const comments = [];

router.use(express.urlencoded({extended:true}))

let pool = mysql.createPool({
	connectionLimit: 10,
	host:     'localhost',
	user:     'root',
	password: 'n9Q&M{QK1rDD',
	database: 'calamitus',
    port:3306
});

pool.query=util.promisify(pool.query);

router.get('/', (req,res)=>{
	res.render('index.html', {title:'Landing Page with NodeJS'});
})

router.get('/contact',(req,res)=>{
	res.render('contact.html', {title:'Contact Page with NodeJS'});
})

router.post('/contact', (req,res)=>{

	try{
      // const passwordEncrypt = bcrypt.hash(req.body.password)
      comments.push({
        fecha: Date(),
        nombre: req.body.name,
        email: req.body.email,
        comentario: req.body.comment
      })
      res.redirect('/contact')
      pool.query(`insert into comentarios (fecha,nombre,email,comentario) values ('${comments[comments.length - 1].fecha}','${comments[comments.length - 1].nombre}','${comments[comments.length - 1].email}','${comments[comments.length - 1].comentario}' )`);
	} catch{
      res.redirect('/')
	}
	console.log(comments)
})

router.get('/store',(req,res)=>{
	res.render('store.html', {title:'Eshop Page with NodeJS'});
})
router.get('/cartas',(req,res)=>{
	res.render('cartas.html', {title:'Cartas category Page with NodeJS'});
})
router.get('/fichas',(req,res)=>{
	res.render('fichas.html', {title:'Fichas category Page with NodeJS'});
})
router.get('/impresiones3D',(req,res)=>{
	res.render('impresiones3D.html', {title:'impresiones3D category Page with NodeJS'});
})



/**PRODUCTOS**/
router.get('/catan',(req,res)=>{
	res.render('productsPage/catan.html', {title:'Product Page with NodeJS'});
})
router.get('/dixit',(req,res)=>{
	res.render('productsPage/dixit.html', {title:'Product Page with NodeJS'});
})
router.get('/ugha%20bugha',(req,res)=>{
	res.render('productsPage/ugha bugha.html', {title:'Product Page with NodeJS'});
})
router.get('/star%20realms',(req,res)=>{
	res.render('productsPage/star realms.html', {title:'Product Page with NodeJS'});
})
router.get('/hive',(req,res)=>{
	res.render('productsPage/hive.html', {title:'Product Page with NodeJS'});
})
router.get('/carcassonne',(req,res)=>{
	res.render('productsPage/carcassonne.html', {title:'Product Page with NodeJS'});
})
router.get('/virus',(req,res)=>{
	res.render('productsPage/virus.html', {title:'Product Page with NodeJS'});
})
router.get('/nonaga',(req,res)=>{
	res.render('productsPage/nonaga.html', {title:'Product Page with NodeJS'});
})
router.get('/splendor',(req,res)=>{
	res.render('productsPage/splendor.html', {title:'Product Page with NodeJS'});
})


/**PETICION A LA BASE DE DATOS**/
router.get('/productosJSON', async (req,res)=>{
	let resultado = await pool.query("SELECT * FROM productos");
	res.json(resultado);
})


module.exports = router;