//DOM Elements
//Variables are named after the ID selectors in HTML + El for element
//document signifies where to find the id to create association / link

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


//This is an object - know more please...
const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//Generate event -- User clicks mouse on "Generate password"
// () => is simply shorthand for function()
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value; // + user input value in 'Password Length'
    const hasLower = lowercaseEl.checked; //lowercase checkbox checked? Boolean function true / false
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    //innerText (A string ) will be generated in the result element
    //variables are identified above
    //see next function for generatePassword
    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    )

});

// Generate password function

function generatePassword(lower, upper, number, symbol, length) {
    //1. Initialise pw variable 
    //2. Filter out unchecked types 
    //3. Loop over length call generator function for each type 
    //4. Add final pw to the pw var and return to resultEl.innerText above

    let generatePassword = '';

    //1. Initialise pw variable 
    const typesCount = lower + upper + number + symbol;

    console.log('typesCount: ', typesCount);

    //2. Filter out unchecked types 
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
        (
            item => Object.values(item)[0]
        );

    console.log('typesArr: ', typesArr);

    //3. Loop over length call generator function for each type 
    if (typesCount === 0) {
        return ' ';
    }

    //this needs to be broken down please.......
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatePassword += randomFunction[funcName]();
        });
    }
}


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


function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    //return a string (letter) from the unicode number
    //Math.floor - round downto an interger (no decimals)
    //Math.random - select a random between 0 and 1 
    //26 for the number of letters in the alphabet
    //65 is where the upper case alphabet begins in unicode
}


function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    //return a string (number but in string form) from the unicode number
    //Math.floor - round downto an interger (no decimals)
    //Math.random - select a random between 0 and 1 
    //10 for the numbers 0 - 9 (only single digits apply)
    //48 is where numbers begin
}


function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]+<>?/;:';
    return symbols[Math.floor(Math.random() * symbols.length)];
    //symbols allocated in variable (they are too scattered over unicode
    //return the value from the symbols variable 
    //Math.floor - round downto an interger (no decimals)
    //Math.random - select a random between 0 and 1 
    //The symbols.length calculates how many letters in the string and will return one of them
}


