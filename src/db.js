const mysql = require('mysql')
const util = require('util')

let pool = mysql.createConnection({
	// connectionLimit: 10,
	host:     'localhost',
	user:     'root',
	password: 'n9Q&M{QK1rDD',
	database: 'calamitus',
    port:3306
});

pool.query = util.promisify(pool.query)

module.export = pool;