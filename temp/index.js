const dataUrl = 'https://api.unsplash.com/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30';

// Function to fetch images and display them
function getimg() {
    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            add_new_img(data);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
}

// Function to add images to the gallery
function add_new_img(dataset){
    var gal = document.getElementById("gallery");
    gal.innerHTML = ''; // Clear existing images

    dataset.forEach(function(item) {
        var img = document.createElement("img");
        img.setAttribute("src", item.urls.small);
        gal.appendChild(img);
    });
}

// Function to send a GET request to the Google Apps Script web app endpoint
function sendRequestToGoogleAppsScript(name, age) {
    const url = `https://script.google.com/macros/s/AKfycbw5PnzwybI_VoZaHz65TpA5DYuLkxIF-HUGjJ6jRTOje0E6bVo/exec?name=${name}&age=${age}`;
    
    fetch(url, { method: 'GET' })
        .then(response => response.text())
        .then(result => {
            document.getElementById('h1').innerText = result;
        })
        .catch(error => {
            console.error('Error sending request to Google Apps Script:', error);
        });
}

// Call the functions to fetch images and send request to Google Apps Script
getimg();
sendRequestToGoogleAppsScript('John Doe', 30);
