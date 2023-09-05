//object
var userDetails = {
    name: "Vijoy",
    age: 31,
    isAdmin: false,
    gender: "male",
    fullName: {
        name: "Vijoy Kumar"
    }
};
console.log("userDetails", userDetails);
//Array
var array = [1, 3, 7, 'Ram', 8];
console.log("array", array);
var strArray = ['rahul', 'sai', 'vivek', 'amit'];
console.log("strArray", strArray);
var numAndStr = [3, 'goom', 76];
console.log("numAndStr", numAndStr);
var array1 = numAndStr.slice(); // creates a new array that contains all the elements from the numAndStr array.
array1.push("89");
console.log("push", array1);
// union
var randomStr;
randomStr = 100;
randomStr = "sakib";
randomStr = false;
console.log("randomStr", randomStr); //false , it is taking last one.
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
    Color[Color["black"] = 3] = "black";
})(Color || (Color = {}));
var myColor = Color.orange;
console.log("myColor", myColor);
