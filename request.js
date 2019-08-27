// require syntax
const Unsplash = require('unsplash-js').default;
const fetch = require("node-fetch");
require('es6-promise').polyfill();
require('isomorphic-fetch');
const { unsplashSecretKey, unsplashAppAccessKey, port } = require('./config');

function getPhotos() {
  const unsplash = new Unsplash({
    applicationId: unsplashAppAccessKey,
    secret: unsplashSecretKey
  });

  console.log('getting photos');
  console.log(process.env.NODE_ENV);
  console.log(`Your unsplashAppAccessKey is ${process.env.UNSPLASH_APP_ACCESS_KEY}`);
  unsplash.photos.listPhotos(2, 15, "latest")
  .then(unsplash.toJson)
  .then(json => {
    console.log(process.env);
    console.log(json);
  });
}
getPhotos();
