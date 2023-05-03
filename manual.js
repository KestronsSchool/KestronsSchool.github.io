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

var "A string with the number "+ 2;//"A string with the number 2" - a string plus a number equals a string

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

/* Problem Solving */
/*
Walk through it, thinking through everything you know. Keep in mind what each variable holds. If nothing else works, Google is your friend. If that doesn't work, sometimes you can ask friends - I have a nice group of coding friends I can ask.
*/

/* Understand Errors */
/*
When in doubt, Google (or Kestrogle :P) it. I'm not sure there's any error I see frequent enough to point out directly.
Python devs see "expected a semicolon" a lot when first learning JS. Honestly most of the errors are very specific and other than that I can't really think of any off the top of my head - each is unique to your code.
As I said, when in doubt, Google it.
*/
