const express = require('express')
const router = express.Router();
const mysql = require('mysql');
const util = require('util');
// const bcrypt = require('bcrypt');
const comments = [];

router.use(express.urlencoded({extended:true}))//permite que funcione los formularios

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
	res.render('index.html');
})

router.get('/contact',(req,res)=>{
	res.render('contact.html');
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

router.get('/cartas',(req,res)=>{
	res.render('cartas.html');
})
router.get('/fichas',(req,res)=>{
	res.render('fichas.html');
})
router.get('/impresiones3D',(req,res)=>{
	res.render('impresiones3D.html');
})
router.use('/store',require('./productsRoutes'))

// /**PETICION A LA BASE DE DATOS**/
router.get('/productosJSON', async (req,res)=>{
	let resultado = await pool.query("SELECT * FROM productos");
	res.json(resultado);
})


module.exports = router;