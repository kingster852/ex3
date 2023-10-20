fetch('./data.json')
  .then(response => response.json())
  .then(jsonData => {
    // Process the JSON data
    console.log(jsonData);
    console.log("check2");
    const Reaction = document.getElementById("Reaction");
    const Memory = document.getElementById("Memory");
    const Verbal = document.getElementById("Verbal");
    const Visual = document.getElementById("Visual");
    
    
    jsonData.forEach(item => {
      //console.log(item.category);
      //console.log(item.score);
      //console.log(item.icon);
      
      if (item.category = "Memory") {
        Memory.textContent = "${item.score}";
        console.log(item.category);
      } else if (item.category = "Reaction") {
        Reaction.textContent = "${item.score}";
        console.log(item.category);
      } else if (item.category = "Verbal") {
        Verbal.textContent = "${item.score}";
        console.log(item.category);
      } else {
        Visual.textContent = "${item.score}";
        console.log(item.category);
      }
      
      
    });
  
    
    console.log("done");
    
    
    //Reaction.textContent = "yo";
    //Memory.textContent = "yoyoyo";
    //Verbal.textContent = "yoyoyo";
    //Visual.textContent = "yoyoyo";
    
    
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
  
