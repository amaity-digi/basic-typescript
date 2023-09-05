var myFavNum = 10;
var myFullName = "Ashish Maity";
console.log(typeof myFavNum.toString(), 'toString'); // string
console.log(typeof myFavNum, 'name'); // number
var sum1 = myFavNum + 10;
console.log(sum1);
//1. Number type:
// the number type represents numaric values, including integers and floating-point numbers.
var pi = 3.14;
var myAge = 25;
var negNumber = -10;
// let invalidResult: number = myAge + "years." // getting error ==> Type 'string' is not assignable to type number
// console.log(invalidResult);
// let invalidNum: number = "123"; // getting error ==> Type 'string' is not assignable to type number
var computedValue = Math.sqrt(25);
console.log(computedValue, 'squre');
var nanValue = NaN;
console.log(nanValue); //NaN
console.log(typeof nanValue, 'typeof NaN'); //number\
//2. string type
// Any value under single or double quotes are treated as string, Also any exp. result string as output.
var firstName = "Ashis";
var lastName = 'Maity';
var fullName = firstName + " " + lastName;
console.log(fullName, 'fullName');
//checking length of this string.
var sentance = "Please every day do coding in JavaScript";
var sentanceLength = sentance.length;
console.log(sentanceLength, 'sentanceLength');
//uppercase() & lowerCase()
var text = "I'm  a developer";
var uppercaseText = text.toUpperCase();
var lowerCaseText = text.toLocaleLowerCase();
console.log(uppercaseText, "upper", lowerCaseText);
//substring:
var longText = "long Sentance";
var shortText = longText.substring(0, 10);
console.log(shortText, 'substring');
//string comparison:
var str1 = "Dev";
var str2 = "Dev";
var areEqual = str1 == str2; // true
console.log(areEqual, "type is boolean for comparison of two string");
//Boolean type
// In Typescript Boolean type represents a value that can be either true or false. It is one of the premitive types in the language.
var isMyNameAjeet = false;
console.log(isMyNameAjeet, 'boolean');
// Check even number
function isEven(num) {
    if (num % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
isEven(8); // Here it will return the console
function isEven1(num) {
    return num % 2 == 0;
}
console.log(isEven1(5)); // Here we are getting boolean value
function isDivisibleBy4And8(num) {
    return num % 4 == 0 && num % 8 == 0;
}
console.log(isDivisibleBy4And8(40));
//BigInt type:
// It is a build in type that allows us to work numbers that are larger than the renge supported by the
// regular number type.
// In JS we can't read the whole numbers beyond 2 raise to power 53.
//let maxNumber = Number.MAX_SAFE_INTEGER;
var maxNumber = 9007199254740992n; //BigInt literals are not available when targeting lower than ES2020. So we need to change target inside this tsconfig file,  "target": "ES2020",   
console.log(maxNumber, 'Maximum Number');
