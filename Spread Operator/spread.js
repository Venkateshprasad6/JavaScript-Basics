let fruits = ['apple', 'Mango']
let moreFruits = [...fruits]
console.log(fruits);

let drySeeds = ['wallnet', 'nut']
let combineAll = [...fruits,...drySeeds]
console.log(combineAll);


let person =  {name: "venkat"}
let age = {age: "24"}
let user = {...person,...age}
console.log(user);

function sum(a, b,c) {
    return a+b+c;

}
let numbers = [1,2,3]
console.log(sum(...numbers));
