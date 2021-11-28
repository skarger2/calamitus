const express = require('express')
const router = express.Router();
const mysql = require('mysql');
const util = require('util');

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

router.post('/contact',(req,res)=>{
	console.log(req.body)
	res.render('contact.html',{title:'Contact Page with NodeJS'});
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

router.get('/prod1',(req,res)=>{
	res.render('prod1.html', {title:'Product Page with NodeJS'});
})


router.get('/productosJSON', async (req,res)=>{
	let resultado = await pool.query("SELECT * FROM productos");
	res.json(resultado);
})
router.get('/prod_cartasJSON', async (req,res)=>{
	let resultado = await pool.query("SELECT * FROM productos WHERE categoria_id=1;");
	res.json(resultado);
})
router.get('/prod_fichasJSON', async (req,res)=>{
	let resultado = await pool.query("SELECT * FROM productos WHERE categoria_id=2;");
	res.json(resultado);
})
router.get('/prod_impresiones3DJSON', async (req,res)=>{
	let resultado = await pool.query("SELECT * FROM productos WHERE categoria_id=3;");
	if (resultado.length==0) {
        res.send('NO HAY PRODUCTOS DE ESTA CATEGORIA')
	}else{
		res.json(resultado);
	}
	
})

module.exports = router;