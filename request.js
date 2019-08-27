// require syntax
const Unsplash = require('unsplash-js').default;
const fetch = require("node-fetch");
require('es6-promise').polyfill();
require('isomorphic-fetch');
const { unsplashSecretKey, unsplashAppAccessKey, port } = require('./config');

function helloWorld() {
  fetch('https://us-central1-fluffy-broccoli-2b8cf.cloudfunctions.net/helloWorld')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log('json output:');
    console.log(json);
  });
}

helloWorld();
