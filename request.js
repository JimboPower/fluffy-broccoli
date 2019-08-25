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
