//PROMISE
const MESSAGE = "coffee is ready";
const AMOUNT = 20
const orderCoffee = new Promise((resolve, reject) => {
  const machineWorks = true;
  const orderDetails = { amount: 20 };
  if (machineWorks) {
    resolve({ message: MESSAGE,  orderDetails: AMOUNT });
  } else {
    reject("coffee machine is not working");
  }
}, 1000);
console.log("ordering coffee...");
orderCoffee
  .then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      resolve("Here is the bill RS.20");
    });
  })
  .then((billInfo) => {
    console.log(billInfo);
  })
  .catch((message) => {
    console.log(message);
  })
  .finally(() => {
    console.log("Thank You for Visiting");
  });
