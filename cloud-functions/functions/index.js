const functions = require('firebase-functions');
require('es6-promise').polyfill();
require('isomorphic-fetch');

// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({
  origin: true,
});

exports.getPhotos = functions.https.onRequest((request, response) => {
  var query = request.query.query;
  var accessKey = functions.config().unsplash.accesskey;

  if (query === null) {
    response.status(500).send('Error: Missing query parameter.');
  }

  if (accessKey === null) {
    response.status(500).send('Error: Missing Unsplash Access Key');
  }

  var requestUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

  fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
    response.send(data);
    return
  })
  .catch(error => console.error(error));
});
