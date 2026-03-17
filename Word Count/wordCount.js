let str = "HELLO WORLD HELLO JAVASCRIPT";

let words = str.split(" ");
let count = {};

for (let i = 0; i < words.length; i++) {
  if (count[words[i]]) {
    count[words[i]]++;
  } else {
    count[words[i]] = 1;
  }
}

console.log("Total words:", words.length);
console.log(count);