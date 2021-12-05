
/**PRODUCTOS**/
const express = require('express')
const router = express.Router();

router.get('/', (req,res)=>{
	res.render('store.html');
})

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

module.exports = router;