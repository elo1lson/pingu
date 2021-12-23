const aposta = require("./aposta.js")
const capture = function(arg, balance) {
	const args = new Object()
	if (arg > 0) {

		args.type = "number"
		args.exist = true
		args.content = arg
		args.aposta = aposta(arg, balance)

	} else if (arg < 0) {

		args.type = "negative"
		args.exist = true
		args.content = arg
		args.aposta = aposta(arg, balance)

	} else if (arg == 0) {

		args.type = "zero"
		args.exist = true
		args.content = arg
		args.aposta = aposta(arg, balance)

	} else if (arg == undefined) {

		args.type = null
		args.size = null
		args.exist = false
		args.content = undefined
		args.aposta = aposta(arg, balance)

	} else {

		args.type = "letter"
		args.exist = true
		args.content = arg
		type = args.type
		args.aposta = aposta(arg, balance)

	}

	return args
}
module.exports = capture