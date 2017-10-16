const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  }
};

const anakinSkywalker = "Anakin Skywalker";
const lukeSkywalker = "Luke Skywalker";
const obj = {
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker
};

const result = atom.addValue(3);
console.log(result);
if (result > 3) {
  console.log(obj);
}

const someStack = [];

// bad
// someStack[someStack.length] = "abracadabra";

// good
someStack.push("abracadabra");
console.log(someStack);

let i;
let len = 10;
const items = [1, 2, 3];
/* for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
} */

// good
const itemsCopy = [...items];
console.log(itemsCopy);
