const p1 = new Promise((resolve, reject) => {
  resolve("Good evening");
});

const p2 = new Promise((resolve, reject) => {
  resolve("go for the coffee");
});

const p3 = new Promise((resolve, reject) => {
  resolve("sure!");
});

const p4 =  Promise.reject( 'reject') 
 

const allPromises = Promise.all([p1, p2, p3,p4])
  .then((messages) => {
    console.log("messages:", messages);
  })
  .catch((error) => {
    console.log("error:", error);
  });
