// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var objString = '';
  if(obj === null) {
    objString += 'null';
  } else if(typeof(obj) === 'string') {
    objString += '"';
    objString += obj;
    objString += '"';
  } else if(typeof(obj) === 'boolean' || typeof(obj) === 'number') {
    objString += obj.toString();
  } else if(typeof(obj) === 'object') {
    if(Array.isArray(obj)) {
      objString += printArray(obj);
    } else {
        objString += '{';
        var keyCount = 1;
        for(key in obj) {
         
         if(obj[key] !== undefined && typeof(obj[key]) !== 'function') {
           if(keyCount > 1) {
           objString += ',';
           }
           objString += '"' + key + '"' + ':';
           //if the value is an array, use printArray
            if(Array.isArray(obj[key])) {
              objString += printArray(obj[key]);
            } else if(obj[key] === null) {
              objString += 'null';
            } else if(typeof(obj[key]) === 'object') {
              objString += stringifyJSON(obj[key]);
            } else if(typeof(obj[key]) === 'string') {
              objString += '"';
              objString += obj[key];
              objString += '"';
            } else {
              objString += obj[key].toString();
            }
          keyCount++
          }
        }
        objString += '}';
    }
    

  }
  return objString;
  
  

};

var printArray = function(array) {
  //converts an array to string, including nested arrays
  var arrayString = "[";
  for(var i = 0; i < array.length; i++) {
    if(i > 0) {
          arrayString += ",";
    }
    if(Array.isArray(array[i])) {
      arrayString += printArray(array[i]);
    } else {
      if(typeof(array[i]) === 'string') {
        arrayString += '"';
        arrayString += array[i].toString();
        arrayString += '"';
      } else if(typeof(array[i]) === 'boolean' || typeof(array[i]) === 'number') {
        arrayString += array[i].toString();
      } else if(array[i] === undefined) {

      } else if(array[i] === null) {
        arrayString += 'null'
      } else if(typeof(array[i]) === 'object') {
        arrayString += stringifyJSON(array[i]);
      }
    }
    if(i === (array.length - 1)) {
      arrayString += "]"
    }
  }
  if(array.length === 0) {
    arrayString += "]";
  } 
  return arrayString;  
}


var regularArray = [];
var superArray = [[['hi']], 9.458, [[true]]];
console.log(superArray.toString());
var testObj = {a: {b: [2, 3]}};

//console.log(testObj.toString());
//testObj['b'] = undefined;
//console.log(testObj.toString());
var arrayWithObj = [1, 2, {a: 'ho'}];
console.log(arrayWithObj.toString());
console.log(JSON.stringify(testObj));

var regularPrinted = printArray(regularArray);
var superPrinted = printArray(superArray);
console.log(regularPrinted);
console.log(superPrinted);
console.log(JSON.stringify(superArray));
console.log(JSON.stringify(regularArray));
var printedObj = stringifyJSON(testObj);
console.log(printedObj);
