const getUserId = (id) => {
  return new Promise((resolve) => {
    console.log("got the userId", id);

    setTimeout(() => {
      resolve({ id: id, name: "venkatesh" });
    }, 1000);
  });
};

const getSubscription = (user) => {
  return new Promise((resolve) => {
    console.log("I got subscription for", user.name);

    setTimeout(() => {
      resolve([
        { id: 1, title: "hotstar" },
        { id: 2, title: "prime" },
        { id: 3, title: "netflix" },
      ]);
    }, 2000);
  });
};

const payment = (subscriptions) => {
  return new Promise((resolve) => {
    console.log("payment successful for", subscriptions.length, "subscriptions");

    setTimeout(() => {
      resolve(subscriptions.length * 100);
    }, 3000);
  });
};

const ottPlatform = async function () {
  const userInfo = await getUserId(1);
  const subscription = await getSubscription(userInfo);
  const totalCost = await payment(subscription);

  console.log(userInfo, subscription, totalCost);
  console.log("Everything is fetched!");
};

ottPlatform();
