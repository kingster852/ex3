fetch('./data.json')
  .then(response => response.json())
  .then(jsonData => {
    // Process the JSON data
    console.log(data);
    console.log("check2");
    const Reaction = document.getElementById("Reaction");
    const Memory = document.getElementById("Memory");
    const Verbal = document.getElementById("Verbal");
    const Visual = document.getElementById("Visual");
    
    
    jsonData.forEach(item => {
      console.log(item.category);
    });
  
    
    console.log("data");
    
    
    Reaction.textContent = "yoyoyo";
    Memory.textContent = "yoyoyo";
    Verbal.textContent = "yoyoyo";
    Visual.textContent = "yoyoyo";
    
    
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
  
