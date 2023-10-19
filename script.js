fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data
    console.log(data);
    console.log("check2");
    const Reaction = document.getElementById("Reaction");
    Reaction.textContent = "yoyoyo";
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
  
