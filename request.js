// require syntax
const Unsplash = require('unsplash-js').default;
const fetch = require("node-fetch");
require('es6-promise').polyfill();
require('isomorphic-fetch');

function getPhotos() {
  fetch('https://us-central1-fluffy-broccoli-2b8cf.cloudfunctions.net/getPhotos')
  .then(function(response) {
    console.log(response);
    return response.json();
  }).catch((error) => {
    console.log(error);
  });
}

getPhotos();
