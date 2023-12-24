const url = 'fvepvj2kz9d6a7rpfy4yvqeil.canarytokens.com';

// Make the request
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Process the data here if needed

        // Redirect back to the referrer
        window.location.href = document.referrer;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });