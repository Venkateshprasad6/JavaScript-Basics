const postRequest = async function () {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) 
        console.log("Network response was not ok");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
  
  postRequest(); // call the function
  