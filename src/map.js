const Config = require("./config");

module.exports = {

  // Google Maps place ids come from here: https://developers.google.com/places/place-id

  displayMap() {
    const googleMap = document.querySelector(".google-map");
    googleMap.innerHTML = "<iframe width='600' height='450' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/view?zoom=10&center=39.9612%2C-82.9988&key=" + Config.GOOGLE_API_KEY() + "' allowfullscreen></iframe>";
  },

  displayMapByPlaceId(placeId) {
    const googleMap = document.querySelector(".google-map");
    googleMap.innerHTML = "<iframe width='600' height='450' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/place?q=place_id:" + placeId + "&key=" + Config.GOOGLE_API_KEY() + "' allowfullscreen></iframe>";
  },

  searchByTown() {
    event.preventDefault();

    let townCodeMap = new Map();
    townCodeMap.set("Westerville", "ChIJVyNMY2X1OIgRQT9dsFQwoUY");
    townCodeMap.set("Dublin", "ChIJH6FQ1MTsOIgRKJBoFWgXwgA");
    townCodeMap.set("Clintonville", "ChIJn3LhCWiMOIgR3Rx6W6VV1PA");
    townCodeMap.set("Hilliard", "ChIJMxtWksaWOIgRnlXah9jo_aE");
    townCodeMap.set("Columbus", "ChIJcd6QucGJOIgRM7Wxz_hmMuQ");

    const townCodeInput = document.querySelector("#mySelect");
    const townCode = townCodeInput.value;
    const placeId = townCodeMap.get(townCode);

    this.displayMapByPlaceId(placeId);

  },



  searchByZipCode() {
    event.preventDefault();

    let zipCodeMap = new Map();
    zipCodeMap.set("43201", "ChIJ9Rz24rWOOIgR3EEuL2Ge4oo");
    zipCodeMap.set("43206", "ChIJw6wuB5iIOIgRus0jBTvKLHo");
    zipCodeMap.set("43212", "ChIJOW2nsVCOOIgR0IzLWzB30l4");
    zipCodeMap.set("43215", "ChIJmRPPvRCGOIgRARpJZtkXzq0");
    zipCodeMap.set("43224", "ChIJj3ATYruLOIgRMmVSsRFsuQ0");

    const zipCodeInput = document.querySelector(".location-form__input");
    const zipCode = zipCodeInput.value;
    const placeId = zipCodeMap.get(zipCode);
    console.log("Zip code entered, " + zipCode + ", has a place id of " + placeId + ".");

    this.displayMapByPlaceId(placeId);

  }

}