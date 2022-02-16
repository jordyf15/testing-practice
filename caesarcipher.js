function caesarCipher(string){
    let result = "";
    for(let i = 0;i<string.length;i++){
        if(string[i].charCodeAt(0)>=65 && string[i].charCodeAt(0)<=90){
            result+= shiftUpperCase(string[i]);
        }else if(string[i].charCodeAt(0)>=97 && string[i].charCodeAt(0)<=122){
            result+= shiftLowerCase(string[i]);
        }else{
            result+=string[i];
        }
    }
    return result;
}

function shiftUpperCase(char){
    let asciiShift = char.charCodeAt(0)+3;
    if(asciiShift >90){
        asciiShift -=26;
    }
    return String.fromCharCode(asciiShift);
}

function shiftLowerCase(char){
    let asciiShift = char.charCodeAt(0)+3;
    if(asciiShift >122){
        asciiShift -=26;
    }
    return String.fromCharCode(asciiShift);
}

module.exports = caesarCipher;
