var aposta = function(arg, balance, ) {
	let saldo = null

	if (arg <= balance) {

		saldo = true

	} else if (arg > balance) {

		saldo = "maxout"

	} else if (arg < 0) {

		saldo = "minout"

	} else if (arg == "all") {

		saldo = "all"

	} else {
		saldo = "letter"

	}
	return saldo

}
module.exports = aposta