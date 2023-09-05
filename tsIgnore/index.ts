//TypeScript is nothing but JavaScript only with some extra power. TypeScript is the superset of JavaScript.

console.log("TypeScript");

 // TypeScript is all about static typing. this error we got ==> Type 'string' is not assignable to type 'number'

 
//@ts-ignore 
let n:number = 1000;
n= "21";
console.log(n);

//Write a code to add two number using ts
//@ts-ignore
function sum(a:number,b:number):number{
    return a+b;
}

console.log(sum(12,30));

//Type Annotation
const name1: string = "Ajeet";
const num11: number = 89;
console.log(name1);
console.log(num11)