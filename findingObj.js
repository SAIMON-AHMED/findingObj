/**
 * Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
 Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name 
and its value, that was passed on as the second argument.
 */

function whatIsInAName(collection, source) {

  let keys = Object.keys(source);  // returns an array of keys
  let array = [];
  let flag = true;
  
    for (let i = 0; i < collection.length; i++) {
     for (const key of keys) {
      if (source[key] === collection[i][key]) {  // this the main condition, have to use bracket notation
        flag = true;
      } else {
        flag = false;
        break;  // break the loop if it fails to meet the condition
      }
    }
    if (flag) {
      array.push(collection[i]);  // pushing the appropriate object into the array
    }
  }
  return array;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//prints [{ first: "Tybalt", last: "Capulet" }]
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
//prints [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
