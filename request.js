// require syntax
const Unsplash = require('unsplash-js').default;
const fetch = require("node-fetch");
const { unsplashSecretKey, unsplashAppAccessKey, port } = require('./config');

const unsplash = new Unsplash({
  applicationId: unsplashAppAccessKey,
  secret: unsplashSecretKey
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
  unsplash.photos.listPhotos(2, 15, "latest")
  .then(unsplash.toJson)
  .then(json => {
    console.log('aloha!');
  });
}

getPhotos();
refreshBackgroundColor();
