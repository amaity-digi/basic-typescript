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
// 3. Boolean type
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
// 4. BigInt type:
// It is a build in type that allows us to work numbers that are larger than the renge supported by the
// regular number type.
// In JS we can't read the whole numbers beyond 2 raise to power 53.
//let maxNumber = Number.MAX_SAFE_INTEGER;
// let maxNumber: bigint = 9007199254740992n; //BigInt literals are not available when targeting lower than ES2020. So we need to change target inside this tsconfig file,  "target": "ES2020",   
// console.log(maxNumber,'Maximum Number');
// let bigIntNum = BigInt(9007199254740992n);
// console.log(bigIntNum)
//5. Any type
//The any type is the most flexible type in TypeScript.It essentially
// turns off all type checking for the variables or expressions it is applied to.
// simple meaning hum javascript main he likh ra hhu. means type can be anything, turns off all type.
var fevNum = 10;
fevNum = "sai";
console.log(fevNum); // sai
//6. unknown Type
// The unknown type is the safer alternative to any. because its still enforces type checking and type safety.
var num2;
num2 = 199;
// num2 = "Hello";
// num2 = true;
if (typeof num2 === "number") {
    console.log(num2 + 10);
}
//sum of two number
var score1 = 89;
var score2 = 30.5;
var totalScore = score1 + score2;
console.log("totalScore", totalScore);
//using function to used typescript
function greet(name, id) {
    console.log("Welcome ".concat(name, " to our company, This is your ").concat(id, " "));
}
greet("Raj", 101);
//How do you specify the return type of a function in Typescript
var arrow = function (name, id) {
    return "Welcome ".concat(name, " to Digisprint,This is ").concat(id);
};
arrow("Anil", 20);
//Palindrome
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("12321"));
