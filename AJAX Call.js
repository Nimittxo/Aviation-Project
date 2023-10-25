function fetchData(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}

function postData(url, data, callback) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => callback(result))
    .catch(error => console.error('Error:', error));
}
document.getElementById('fetch-button').addEventListener('click', function () {
    fetchData('/api/data', function (data) {
        // Handle the retrieved data
    });
});

document.getElementById('submit-button').addEventListener('click', function () {
    const formData = {
        // Collect user input data from form fields
        // Example: username: document.getElementById('username').value,
    };

    postData('/api/submit', formData, function (result) {
        // Handle the result, e.g., show a success message or update the UI
    });
});