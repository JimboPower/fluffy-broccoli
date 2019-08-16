function getHexColor() {
  fetch('https://api.noopschallenge.com/hexbot')
    .then(function(response) {
      return response.json();
    })
    .then(function(colorsObj) {
      var hexCode = colorsObj["colors"][0]["value"]
      changeBackgroundColor(hexCode);
    });
}

function changeBackgroundColor(hexString) {
  document.body.style.background = hexString;
}

getHexColor();
