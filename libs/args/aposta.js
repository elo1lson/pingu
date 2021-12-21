var aposta = function(args, balance) {
	let saldo = null

	if (arg <= balance) {

		saldo = true

	} else if (arg > balance) {

		saldo = "maxout"

	} else if (arg <= 0) {

		saldo = "minout"

	} else if (arg == "all") {

		arg = "all"

	} else {
		saldo = false

	}
	return saldo

}
module.exports = aposta

blacklist = db.get(`blacklist.${user}`)