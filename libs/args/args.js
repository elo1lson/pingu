const capture = function(arg){
	const argZero = new Object()
	if (arg > 0) {
		
		argZero.type = "number"
		
	}else if(arg < 0){
		
		argZero.type = "negative"
		argZero.size = `${arg.lenght}`
		
	}else if(arg == 0){
		
		argZero.type = "zero"
		argZero.size = `${arg.lenght}`
		
	}else{
		
		argZero.type = "letter"
		argZero.size = `${arg.lenght}`
		
	}
	
	return argZero
}
module.exports = capture