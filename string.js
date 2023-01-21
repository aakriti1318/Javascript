var greet = "hello"
greet += "world" // helloworld

// Escaping literal quotes

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
// "I am a 'double quoted' string inside 'double quotes'"

myStr = "Hello World" // Hello World
myStr = '"Hello World"' // "'Hello World'"
myStr = 'Hello World' // "Hello World"
myStr = `'"Hello World"'` // "'Hello World'"


/*
    \' Single quote
    \" Double quote
    \\ backslash
    \n new line
    \r carriage return 
    \t tab
    \b backspace
    \f form feed
 */

var multiline = "FirstLine\n\t\\SecondLine\nThirdLine"
/* 
    "FirstLine
    \SecondLine
    ThirdLine"
*/

// find length 
var a = "Hello"
a+="World"

var len = a.length // 10

// Get Char at index
var b = a[2] // l
b = a[a.length-1] // o

// String Immutability - any char in a string cannot be changed
a = "Jello"
a[0] = "H"
// it will throw error because of immutability
a = "Hello" // this is how you can change 


// Word Blanks
function wordBlanks(myNoun, myAdj, myVerb, myAdverb){
    var result = "";
    result += "The "+ myAdj + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"))
// "The big dog ran to the store quickly"
