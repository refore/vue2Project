const mysql = require('mysql')

const db = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'123',
	database:'node_js_01'
})

module.exports = db