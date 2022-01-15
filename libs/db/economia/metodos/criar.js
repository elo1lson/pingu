const db = require('quick.db')
/**
* @param {number} id
* @returns {return}
**/
const create = function (id) {

	database = db.get(`bank.${id}`)
	if(database){
		return console.log('Database ja registrada!')
	}
	db.set(
		`bank.${arg}`,
		{
			money : 1000,
			lotto: 0,
			pay: 0,
			received: 0,
			win: 0,
			lost: 0
			
		}
		)
	
}
module.exports = create