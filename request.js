// require syntax
const Unsplash = require('unsplash-js').default;
const fetch = require("node-fetch");
require('es6-promise').polyfill();
require('isomorphic-fetch');

// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({
  origin: true,
});

function getPhotos() {
  fetch('https://us-central1-fluffy-broccoli-2b8cf.cloudfunctions.net/getPhotos')
  .then(function(response) {
    console.log(response);
    return response.json();
  }).catch((error) => {
    console.log(error);
  });
}

function setupSearchBar() {
  // Get the input field
  var input = document.getElementById("searchbar");

  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("searchbar-button").click();
    }
  });
}

function setupButtonAction() {
  var button = document.getElementById("searchbar-button");
  button.onclick = function() {
    getPhotos();
  };
}

window.addEventListener('load', function() {
    console.log('All assets are loaded');
    setupButtonAction();
    setupSearchBar();
})

getPhotos();
