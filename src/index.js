module.exports = function toReadable (number) {
    let first = ["zero " ,"one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine "];
    let secondFrom1 = ["ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "];
    let secondOthers = ["twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
    let words = "";
    let num = String(number);
    let number2 = num.replace(/(\d)/g, '$1 ');
    let result = number2.split(' ');
    for (let i = 0; i <= result.length; ++i){
    	if (result[i] != 0){
    		if (result.length == 4 && result.length - i == 4 && i == 0){
            	words += first[result[i]] + "hundred ";
        	}
    	    if (result[i] != 1 && result.length - i == 3){
        	    words += secondOthers[result[i]-2];
            }
            if (result.length - i == 3 && result[i] == 1){
        	    words += secondFrom1[result[i+1]];
                break;
            }
    	    if (result.length - i == 2){
        	    words += first[result[i]];
                break;
            }
        }
        else if (words == "") {
        	words = "zero ";
        }
    }
    let res = words.slice(0, -1);
    return res;
}
