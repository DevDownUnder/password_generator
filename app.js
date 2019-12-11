//DOM Elements
//Variables are named after the ID selectors in HTML + El for element
//document signifies where to find the element id

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');



const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//Add event listener -- User clicks mouse on "Generate password"

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;

    console.log(length);
});



// Generator functions
//unicode character set -- http://www.net-comber.com/charset.html

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    //return a string (letter) from the unicode number
    //Math.floor - round downto an interger (no decimals)
    //Math.random - select a random between 0 and 1 
    //26 for the number of letters in the alphabet
    //97 is where the lower case alphabet begins in unicode
}

console.log(getRandomLower());

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    //return a string (letter) from the unicode number
    //Math.floor - round downto an interger (no decimals)
    //Math.random - select a random between 0 and 1 
    //26 for the number of letters in the alphabet
    //65 is where the upper case alphabet begins in unicode
}

console.log(getRandomUpper());

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    //return a string (number but in string form) from the unicode number
    //Math.floor - round downto an interger (no decimals)
    //Math.random - select a random between 0 and 1 
    //10 for the numbers 0 - 9 (only single digits apply)
    //48 is where numbers begin
}

console.log(getRandomNumber());

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]+<>?/;:';
    return symbols[Math.floor(Math.random() * symbols.length)];
    //symbols allocated in variable (they are too scattered over unicode
    //return the value from the symbols variable 
    //Math.floor - round downto an interger (no decimals)
    //Math.random - select a random between 0 and 1 
    //The symbols.length calculates how many letters in the string and will return one of them
}

console.log(getRandomSymbol());

