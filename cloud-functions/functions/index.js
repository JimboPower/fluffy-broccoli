const functions = require('firebase-functions');

// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({
  origin: true,
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log('hello world function');
  // Enable CORS using the `cors` express middleware.
  return cors(request, response, () => {
    response.status(200).send('hello cors!');
  });
});

exports.getPhotos = functions.https.onRequest((request, response) => {
  // const unsplash = new Unsplash({
  //   applicationId: unsplashAppAccessKey,
  //   secret: unsplashSecretKey
  // });
  //
  // console.log('getting photos');
  // console.log(process.env.NODE_ENV);
  // console.log(`Your unsplashAppAccessKey is ${process.env.UNSPLASH_APP_ACCESS_KEY}`);
  // unsplash.photos.listPhotos(2, 15, "latest")
  // .then(unsplash.toJson)
  // .then(json => {
  //   console.log(process.env);
  //   console.log(json);
  // });

 response.send("Get photos!");
});
