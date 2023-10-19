fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data
    console.log(data);
    console.log("check2");
    const Reaction = document.getElementById("Reaction");
    const Memory = document.getElementById("Memory");
    const Verbal = document.getElementById("Verbal");
    const Visual = document.getElementById("Visual");
    
    
    Reaction.textContent = "yoyoyo";
    Memory.textContent = "yoyoyo";
    Verbal.textContent = "yoyoyo";
    Visual.textContent = "yoyoyo";
    
    
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
  
