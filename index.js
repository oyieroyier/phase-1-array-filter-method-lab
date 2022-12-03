// Code your solution here
const users = ["Bobby", "salim", "Mikey", "Peter", "Bobby", "Salim"];

function findMatching(array, string) {
  let newArray = array.filter((input) =>
    input[0].toUpperCase().match(string[0].toUpperCase())
  );
  return newArray;
}

console.log(findMatching(users, "salim"));

function fuzzyMatch(array, string) {
  let newArray = array.filter((input) => input.startsWith(string[0]));
  return newArray;
}

function matchName(array, string) {
  let newArray = array.filter(input => input.name === string)
  return newArray
}