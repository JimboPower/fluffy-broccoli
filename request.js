// require syntax
const Unsplash = require('unsplash-js').default;
const fetch = require("node-fetch");

const unsplash = new Unsplash({
  applicationId: "{APP_ACCESS_KEY}",
  secret: "{APP_SECRET}"
});

function refreshBackgroundColor() {
  fetch('https://api.noopschallenge.com/hexbot')
    .then(function(response) {
      return response.json();
    })
    .then(function(colorsObj) {
      var hexString = colorsObj["colors"][0]["value"]
      document.body.style.background = hexString;
    });
}

function getPhotos() {
  console.log('getting photos');
}

getPhotos();
refreshBackgroundColor();

// testing env variables
const port = process.env.PORT;
console.log(`Your port is ${port}`);
