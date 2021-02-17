function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  //Given above function, refactor it to use the rest operator and an arrow function:

function filterOutOdds(...arguments) {
    return arguments.filter = num => num % 2 === 0
    };


//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//Make sure to do this using the rest and spread operator.

const findMin(...arguments) => Math.min(...args)

//Write a function called mergeObjects that accepts two objects 
//and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects(firstObj, secondObj) => ({...firstObj, ...secondObj});

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should 
//return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs(arr, ...args) => [...arr, ...args.map(value => value * 2)];

/** remove a random element in the items array
and return a new array without that item. */

//first go through array, pick a random item, remove it, return a new array without that item
//

const removeRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);
    items.splice(items[randomIndex],1);
    return [...items];
}   

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObject = { ...obj };
    newObject[key] = val;
    return newObject;
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, .obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}