fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data
    console.log(data);
    console.log("check");
    const lightRed = document.getElementById("lightRed");
    lightRed.innerHtml = "yoyoyo";
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
  
