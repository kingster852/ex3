fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });