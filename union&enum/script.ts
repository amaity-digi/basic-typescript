//object

type FullName = {
    name: string
}

type Person = {
    name: string,
    age: number,
    isAdmin: boolean,
    gender: string,
    fullName: FullName
}

const userDetails: Person = {
    name: "Vijoy",
    age: 31,
    isAdmin: false,
    gender: "male",
    fullName: {
        name: "Vijoy Kumar"
    }
}

console.log("userDetails", userDetails);

//Array

const array: [number,number,number,string,number] = [1,3,7,'Ram',8];
console.log("array", array);

const strArray: string[] = ['rahul','sai','vivek','amit'];
console.log("strArray", strArray);

const numAndStr: (number | string)[] = [3,'goom',76];
console.log("numAndStr", numAndStr);

const array1: (number | string)[] = numAndStr.slice(); // creates a new array that contains all the elements from the numAndStr array.
array1.push("89"); 

console.log("push", array1);

// union
let randomStr: number | string | boolean;
randomStr = 100;
randomStr = "sakib";
randomStr = false;
console.log("randomStr", randomStr); //false , it is taking last one.

enum Color{
    blue,
    red,
    orange,
    black
}

const myColor: Color = Color.orange;
console.log("myColor", myColor);
