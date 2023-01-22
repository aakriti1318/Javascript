/*
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
- If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
- If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
- If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
- If value is an empty string, delete the given prop property from the album.
*/


const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // JSON.parse(JSON.stringify(recordCollection)) - makes a copy of an object 
  var collectioncopy = JSON.parse(JSON.stringify(recordCollection))

  function updateRecords(id, prop, value) {
    if(value === "") {// to check if we need to delete the property
        delete recordCollection[id][prop]
    } else if(prop === "tracks"){
        recordCollection[id][prop] = recordCollection[id][prop] || [];
        recordCollection[id][prop].push(value)
    } else{
        recordCollection[id][prop] = value;
    }
    return recordCollection;
  }
  
  console.log(updateRecords(5439, 'artist', 'ABBA'));