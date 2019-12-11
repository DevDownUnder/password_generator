// Generator functions --- http://www.net-comber.com/charset.html

function getRandomLower(){
return String.fromCharCode(Math.floor(Math.random() * 26) +97)
//return a string (letter) from the unicode number
//Math.floor - round downto an interger (no decimals)
//Math.random - select a random between 0 and 1 
// 26 for the number of letters in the alphabet
// 97 is where the lower case alphabet begins in unicode
}

console.log(getRandomLower());

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +65)
    //return a string (letter) from the unicode number
    //Math.floor - round downto an interger (no decimals)
    //Math.random - select a random between 0 and 1 
    // 26 for the number of letters in the alphabet
    // 65 is where the lower case alphabet begins in unicode
    }
    
    console.log(getRandomUpper());