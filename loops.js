// While loop

var arr = []
var i=0
while (i<5){
    arr.push(i);
    i++;
}
console.log(arr)


// for loop
var a = []
for(var i=0;i<5;i++){
    a.push(i);
} 

// do while - atleast once the loop will run

do{
    a.push(i);
    i++;
} while(i<5)

// Exercise
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].firstName == name){
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such property";
  }
  
  lookUpProfile("Akira", "likes");