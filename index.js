//TypeScript is nothing but JavaScript only with some extra power. TypeScript is the superset of JavaScript.
console.log("TypeScript");
// TypeScript is all about static typing. this error we got ==> Type 'string' is not assignable to type 'number'
//@ts-ignore 
var n = 1000;
n = 12;
console.log(n);
//Write a code to add two number using ts
//@ts-ignore
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 30));
