fetch('http://localhost:5000/api/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the data in your front-end application
    })
    .catch(error => {
        console.error('Error:', error);
    });