const person = {
    name: "Victor",
    age: 30,
    city: "New York",
    greet() {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`);
    }
}

//object destructuring
const { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);

//object constructors
const person2 = new Object();
person2.name = "Alice";
person2.age = 25;
console.log("person2");

//constructor function
const person = (data) => {
    data.name = "Victor";
    data.age = 30;
    data.city = "Sydney";
    console.log(data.city);
    

}

//object ES6 Method 
const studentDetails = {
    name: "sakthivel",
    age: 21,
    city: "California",
    
}
const greet = () => {
    console.log(`My name is ${studentDetails.name}, I am ${studentDetails.age} years old and I live in ${studentDetails.city}.`);
}

console.log("Student details:", studentDetails.name);

//Object.create() method
const menu = () => {
    showMenu = () => {
        console.log("Today's lunch menu:");
        
    }

}
const lunchMenu = Object.create(menu);
lunchMenu.item1 = "chicken biryani";
lunchMenu.item2 = "chicken fried rice";
lunchMenu.item3 = "chicken noodles";
console.log("Lunch menu:", lunchMenu.item1, lunchMenu.item2, lunchMenu.item3);

