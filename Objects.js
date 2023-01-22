/**
 * Objects are similar to arrays except that instead of using indexes to access data, 
 * you use properties
 */

var ourDog = {
    // property (key): value
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    "does drink": "Yes"
};

// Accessing object with Dot Notation
var tail = ourDog.tails
console.log(tail) // 1

// Accessing object with Bracket Notation - it is mostly used when in the key name there is a space (does drink)
var drink = ourDog["does drink"]
console.log(drink) // Yes

// Accessing object Properties with Variables
/* Bracket notation can also be used to look up object properties using variables */ 
var leg = "legs";
console.log(ourDog[leg]) // 4

// Updating Object Properties
ourDog.name = "Coder" 
/**
 {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": [
    "everything"
  ],
  "does drink": "Yes"
 }
*/

// Add new properties 
ourDog['bark'] = "wooff"
/**
{
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": [
    "everything"
  ],
  "does drink": "Yes",
  "bark": "wooff"
}
 */

// Delete 
delete ourDog.bark;
/**
 {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": [
    "everything"
  ],
  "does drink": "Yes"
 }
*/ 

// Testing Objects with properties
/* 
    Hasown property method - is to check if an object has a property
*/
function checkObj(checkprop){
    if(ourDog.hasOwnProperty(checkprop)){
        return ourDog[checkprop]
    }
    else{
        return "Not found"
    }
}
console.log(checkObj("bark")) // Not found
console.log(checkObj("tails")) // 4


// Manipulating complex object 
var ourDog = [
    {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends": ["bruno","Simon"],
        "does drink": true
    },
    {
        "name": "Simon",
        "legs": 4,
        "tails": 1,
        "friends": ["tommy"],
        "does drink": false
    }
];

// Accessing Sub properties of object
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveboxcontent = myStorage.car.inside["glove box"];
console.log(gloveboxcontent)
