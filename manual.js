/* Declaring Variables */
var var1="Function scoped, can only be accessed with the same value inside the same function.";
let var2="Block scoped, like function scoped but to that block (such as for loops)";
const var3="A constant variable that should not be changed";
/*
 Variable Names cannot start with a number, can only have letters, numbers, and `-` or `_` in them, and should conventionallyBeCamelCase. Also conventionally should be long and descriptive but most programmers keep them short and abbreviated.
*/

/* Operators */
var var4=1+2;//Addition
var var5=1-2;//Subtraction
var var5=1*2;//Multiplication
var var5=1/2;//Devision
var var5=1%2;//Modulus, gets the remainder

var t="A string with the number "+ 2;//"A string with the number 2" - a string plus a number equals a string

/* Working with Numbers */
var nanExample="9"/3;//NaN - Not a Number

/* Working with Strings */
var stringWithBackslash="\\ A single backslash is shown. \\ is used to escape other characters.";
var templateLiteral=`100/20 = ${100/20}. A variable can also be placed there.`;
var exampleString="Hello World";
var slicedString=exampleString.slice(0,5);//Hello. Array notation - starts counting at 0.
var subString=exampleString.substring(6);//World. Same as slice but if no second parameter is specified it goes to the end of the string
var replacedString=exampleString.replace(/Hello/ig, "Goodbye");//Replaces the first parameter with the second parameter. Most useful with regex - otherwise replaceAll is better suited.
var HELLO_WORLD=exampleString.toUpperCase();
var hello_world=exampleString.toLowerCase();
var concatenatedString=exampleString.concat("! This is a program!");//Joins the two strings together. Very rarely needed as you can just do string+string to concatenate the two
var paddedString=exampleString.padStart(20," ");//Makes sure the outputted string is at least 20 characters and if it isn't it adds the necessary spaces (or other second parameter) to the front. string.padEnd works similarly. I find this most useful when dealing with binary.
var trimmedString=paddedString.trim();//Removes the useless whitespace on the front and back
var e=exampleString.charAt(1);//Array notation. Also rarely useful as you can do exampleString[1];
var arrayString=exampleString.split(" ");//["Hello", "World"]. You can split it based on anything in the string, and leave as "" to put each character into it's own slot (however inputting "" isn't usually useful as strings can already be treated as arrays).

/* Conditional Statements */
var bool1=Math.floor(Math.random())===0?false:true;//Just setting up example inputs
var bool2=Math.floor(Math.random())===0?false:true;
var andComparison=bool1&&bool2;//If both are true
var orComparison=bool1||bool2;//If either are true
var notComparison=!bool1;//If bool1 is false, prints true. If bool1 is true, prints false.
var stringComparison="Hello"==="World";//False
if("Hello World") console.log("It's true");//Strings are treated as true if they are present
if(45) console.log("It's true");//Integers are treated as true unless 0
if(123==="123") //False
if(123=="123") //True, `==` attempts to convert types while `===` does not
if(bool1&&bool2){//If both are true
	//Do this
}
else if(bool1||bool2){//If the original boolean was false, but this boolean is true
	//Do this
}
else{//If none of the other booleands did anything
	//Do this
}
switch(e){//Our lovely e character from earlier
	case 'e':
		//Do something if it's an e
	break;
	case 1:
		//Do something if it's a 1
	break;
	default:
		//Do something if nothing else does
	break;
}
var ternaryOperator=bool1?"If it is true, this is the value":"If it is false, this is the value";

/* Functions */
function funcName(args){//This is the first way to define a function, does not need semicolon
	
}
var funcName2=function(args){//This is the second way, needs semicolon
	
};
funcName("Input");//Calling a function
setTimeout(
	function(){//Anonymous function
		//Doing something
	},1000);
fetch("https://kestrogle.com").then(d=>{//Arrow function, for multiple returns `(arg1,arg2)` instead of `d`
	console.log(d);//Accessing arguments
});
var globalScopedVariable="Global";//Accessible anywhere
function foo(){
	var localScopedVariable="Local";//Only accessible in this function
}
function foo2(){
	return "This is how you return information, typically with a manipulation of data";
}
function foo3(defOf1=1){//Just learned about this actually, if unspecified it defaults to 1
	console.log(defOf1);
}

/**
The call stack is the order in which code is executed.
function foo(){
	console.log("Hi");
}
Only defines the function, so
foo();
Would be first, and 
console.log("Hi");
Would be second
*/

/* 
Writing Clean Code
if(this){
	doThis();
}
Always keep it tabbed properly.
*/
/* Arrays */
var newArray=[0,1,2,3,4,5];//Start counting at 0 for accessing all values
console.log(newArray[0]);//First array element
console.log(newArray[newArray.length-1]);//Last array element
newArray[1]=1.5;//Changes the second index (index 1) to 1.5
console.log(newArray.length);//Prints 5, the last element is accessed at 4 because you start counting at 0 when accessing
for(var i in newArray){
	console.log(newArray[i]);
}
for(var i=0;i<newArray.length;i++){
	console.log(newArray[i]);//Be careful if splicing in a loop like this, use i--; if you do
}
for(var i=newArray.length-1;i>-1;i--){
	console.log(newArray[i]);//Loops backwards
}
var newObject={
	"key":"value"
};//newObject.key
var anotherArray=["value"];//anotherArray[0]
newArray.push(6);//Adds 6 to the array
newArray.pop();//Removes the last element from the array
newArray.shift();//Removes the first element
newArray.unshift(-1);//Puts a new value (-1) at the front of the array (index 0)
var concatenatedArray=newArray.concat(anotherArray);
var testArray=[0,1,[2,3],[[[4,5,6]]]];
console.log(testArray.flat(2));//0,1,2,3,[4,5,6], brings all elements out of an array state up to a specified depth. I just found out about this method, and can I say it seems pretty useless?
newArray.splice(0,2);//Removes 2 elements from the array, starting at index 0
console.log(newArray.slice(0,2));//Returns all elements between indexes 0 and 2

/* Loops */
var anArray=["Bob","John","Smith"];
var newArray=anArray.map(i=>i.name);//Make an object out of the array, each element becomes a key value pair
var filtered=anArray.filter(i=>i.includes("o"));//Return a new array only where the condition matches the element (in this case only if the name has an `o`)
for(var i=0;i<100;i++){//Go through all values up to 99. Call the number i, start at 0, only do it while i is less than 100, increment by 1
	console.log(i);
}
for(i of newArray){
	console.log(newArray[i]);//Hit every element
}
for(var i=0;i<100;i++){
	if(i===50){
		break;//End the loop immediately
	}
	else{
		continue;//Don't do anything else this iteration, move on in the loop
		console.log(i);//This never gets called
	}
}
var i=0;//The variable is an outside condition
while(i<50){//While this condition is true
	//Do this. The condition should be hit while in the loop.
	i++;//BE VERY CAREFUL WITH THESE LOOPS. If you don't meet the exit condition you WILL CRASH YOUR DEVICE.
}
var j=0;
do{
	console.log(j);
}
while(j<50)//Basically just check if it's true after running the code at least once. Very rarely used.
/*
Test Driven Development is where you test everything at every turn, which is just how programming SHOULD be done IMO.
*/

/* Document Object Module (DOM) */
document.querySelector("#id");//Get the first element with the ID #id
var p=document.createElement("p");//Create a <p> tag
document.body.appendChild(p);//Add it to the body
document.body.removeChild(p);//Remove it from the body
p.innerHTML="New HTML to be between the <p></p> tags";
p.style.backgroundColor="rgb(255,0,0)";//Changing the style
p.hidden=true;//Change the attribute to make it hidden
var arrayOfElementsWithClassNameOfFoo=document.body.getElementsByClassName("foo");
p.textContent+="Added text content";
p.innerHTML+="<br>More HTML";
/*
This script will not run until the page is fully loaded, because of the defer tag
<script src="foo.js" defer></script>
*/
var arrayOfAllh1Elements=document.body.getElementsByTagName("h1");
var arrayOfElementsWithClassNameOfFoo=document.body.getElementsByClassName("foo");
var elementWithFooID=document.getElementById("foo");

/* Events */
function func(el){
	//Our example onclick handler

	//In the first example the button element is passed to this function as "el" so we can use it.
}
/*
	<input type='button' onclick=func(this) id="btn">
*/
document.getElementById("btn").onclick=func;
document.getElementById("btn").addEventListener("click",func);
for(var i=0;i<arrayOfElementsWithClassNameOfFoo.length;i++){
	arrayOfElementsWithClassNameOfFoo[i].addEventListener("click",func);
}
/*
	<input type="file" id="fileInput">
*/
document.getElementById("fileInput").addEventListener("change",()=>{
	//Do something whenever a file is inputted to the input
});

/* Objects */
var emptyObject={};
var obj={
	thingOne:1,
	thingTwo:2
};
console.log(obj.thingOne);//Access the object
obj.thingThree=3;//Add new values to it, also works the same for editing old ones
obj["thingFour"]=4;
delete obj.thingFour;//Remove a key from the object
//Square bracket notation obj["foo"] allows for you to use variables that return a string to access a part of an object instead of which key or the name of the key being hardcoded
console.log(thingThree in obj);//There is a key named thingThree in obj, so returns true
for(var objOn in obj){//Iterate through every key in the object, with the value being held in objOn
	console.log(objOn);
}
obj.thingFour=function(){
	console.log(this.thingOne);//this returns the object the function is in. Outside of an object, returns the window or current function.
}
class foo{
	constructor(){
		this.thingOne=1;
	}
}
var foo2=new foo();
console.log(foo2.thingOne);//Is already set

/* Array Methods */
var arr=["Never","Gonna","Give","You","Up"];
arrayOfElementsWithClassNameOfFoo.forEach(el=>{//Loops through the whole array and stores the values in el
	console.log(el.innerHTML);
});
console.log(arr.indexOf("Gonna"));//1, returns the first index the provided value is at in the array
console.log(arr.lastIndexOf("Give"));//2, returns the last index instead
var findAMatchingElement=arr.find(val=>{
	return val==="Up";
});//Returns the index of Up or any other element you trigger returning true on
arr.sort();//Sorts the array alphabetically
/*
arr.sort((a,b)=>{
	return a-b;//If you had an array of numbers, you can do this to sort them in ascending or descending order depending on if you do a or b first. Returning a negative number means a goes first, positive means b goes first, and 0 means just leave it how it was
});
*/
arr.reverse();//Returns the array backwards
var splitArray=arr.split("Give");//Split the array around "Give". Everything before is in index 0, and everything after is in index 1.
var newArr=arr.join(" ");//Returns the full array in string form, with a ` ` in between each value
var fullArr=arr.reduce((valBefore,thisVal,index)=>{
	return thisVal+" "+index;
});//Loops through array and returns the value returned in the last index as valBefore, the current value in thisVal, and the index the loop is at in index
console.log(newArr.isArray());//True, because newArr is, in fact, an array

/* JSON */
/*
	Just an Object but all keys need double quotes and no commas after the last element
*/
var jsonData=JSON.stringify(obj);//Just returns a string of JSON text
var newObj=JSON.parse(obj);//Turns it back into an object
newObj.thingFive={};
newObj.thingFive.thingOne=1;//Accessing values even nested
//One way to validate if it is JSON
function isJsonString(str) {
    try {
        JSON.parse(str);
    }
	catch (e) {
        return false;
    }
	finally{
    	return true;
	}
}
