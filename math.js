
var capture = function(arg){
	const argZero = new Object()
	if (arg > 0) {
		
		argZero.type = "number"
		
	}else if(arg < 0){
		
		argZero.type = "negative"
		
	}else if(arg == 0){
		
		argZero.type = "zero"
		
	}else{
		
		argZero.type = "letter"
		
	}
	
	return argZero
}
module.exports = capture