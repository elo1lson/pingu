const db = require('quick.db')
function pay(id, value){
  
	db.add(`stats.global.${id}.doado`,`${value}`)
	stats = db.get(`stats.global.${id}.doado`)
	console.log(stats) 
  }

module.exports = pay