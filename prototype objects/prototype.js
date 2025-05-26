const prototypeObject = {
    greet() {
      console.log('Hello, world!');
    },
  };
  
  const newObject = Object.create(prototypeObject);
  newObject.greet(); 
  