const aposta = require("./aposta.js")
const capture = function(arg, args, balance){
	const arg = new Object()
	if (arg > 0) {
		
		argZero.type = "number"
		arg.size = `${arg.lenght}`
		arg.exist = true
		arg.content = arg
		arg.aposta = aposta(args, balance)
		
	}else if(arg < 0){
		
		arg.type = "negative"
		arg.size = `${arg.lenght}`
		arg.exist = true
		arg.content = arg
		
	}else if(arg == 0){
		
		arg.type = "zero"
		arg.size = `${arg.lenght}`
		arg.exist = true 
		arg.content = arg
		
	}else if(arg == undefined){
		
		arg.type = null
		arg.size = null 
		arg.exist = false 
		arg.content = undefined 
		
	}else{
		
		arg.type = "letter"
		arg.size = `${arg.lenght}`
		arg.exist = true
		arg.content = arg 
		
	}
	
	return argZero
}
module.exports = capture