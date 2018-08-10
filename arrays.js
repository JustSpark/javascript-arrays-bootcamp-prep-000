<<<<<<< HEAD
var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat','skittles'];
var candyString = 'foo'

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
 
function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
  return chocolateBars;
}
 
function accessElementInArray(array, index){
  return array[index];
}
 
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
 
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}
 
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}
 
function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
=======
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  function addElementToBeginningOfArray() {
    var cheese = ["foo"];
  }
  function destructivelyAddElementToBeginningOfArray() {
    var fish = ["cod", "salmon", "trout"];
    fish.push("swordfish");
  }
>>>>>>> d06096c00c51c3679ff4d547219e9682568573db
