// const oldPromise = Promise.resolve(6);
// const newPromise =  new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         reject("Promise Rejected");
//     },3000);

// })

// const promises = [oldPromise,newPromise];
// const promisesResult = Promise.allSettled(promises);
// promisesResult.then((result)=>{
//     console.log(result);
// }
// ).catch((error)=> {
//     console.log("API ERROR:", error);
// }) 


//using async await
const getPromisesResult = async () => {
  try {
    const oldPromise = Promise.resolve(6);

    const newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Promise Rejected");
      }, 3000);
    });

    const promises = [oldPromise, newPromise];

    const promisesResult = await Promise.allSettled(promises);

    console.log("Result:", promisesResult);

  } catch (error) {
    console.error("Error:", error);
  }
};
getPromisesResult();
