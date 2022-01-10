const assertEqual = function(actual, expected) {

  if (actual !== expected) {

    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);

  } else if (actual === expected) {

    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}.`);
  }

};

const tail = function(array) {

  let array1 = array.slice(1);

  return array1;

};

const result = tail(["Hello", "Lighthouse", "Labs"]);

let input = ["Lighthouse", "Labs"];

for (let i = 0; i < result.length; i ++) {

  assertEqual(result[i], input[i]);

}


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!