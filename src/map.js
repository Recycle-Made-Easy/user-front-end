const Config = require("./config");

module.exports = {

  displayMap() {
    const googleMap = document.querySelector(".google-map");
    googleMap.innerHTML = "<iframe width='600' height='450' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/view?zoom=10&center=39.9612%2C-82.9988&key=" + Config.GOOGLE_API_KEY() + "' allowfullscreen></iframe>";
  },

  displayMapByPlaceId(placeId) {
    const googleMap = document.querySelector(".google-map");
    googleMap.innerHTML = "<iframe width='600' height='450' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/place?q=place_id:" + placeId + "&key=" + Config.GOOGLE_API_KEY() + "' allowfullscreen></iframe>";
  },

  searchByZipCode() {
    event.preventDefault();
    const zipCode = document.querySelector(".location-form__input").value;
    const placeId = Config.ZipCodes().get(zipCode);
    this.displayMapByPlaceId(placeId);
  }

}