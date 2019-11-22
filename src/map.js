// <!-- <img src="./square.jpg"> -->

// <!-- <iframe width="600" height="450" frameborder="0" style="border:0"
//     src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw6wuB5iIOIgRus0jBTvKLHo&key=AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4"
//     allowfullscreen></iframe> -->

module.exports = {

  displayMap() {
    const googleMap = document.querySelector(".google-map");
    const frame = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps/embed/v1/view?zoom=10&center=39.9612%2C-82.9988&key=AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4"
    // googleMap.innerHTML = <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?zoom=10&center=39.9612%2C-82.9988&key=AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4" allowfullscreen></iframe>
    googleMap.append(frame);
  },

  searchByTown() {
    event.preventDefault();

    let townCodeMap = new Map();
    townCodeMap.set("Westerville", "ChIJVyNMY2X1OIgRQT9dsFQwoUY");
    townCodeMap.set("Dublin", "ChIJH6FQ1MTsOIgRKJBoFWgXwgA");
    townCodeMap.set("Clintonville", "ChIJn3LhCWiMOIgR3Rx6W6VV1PA");
    townCodeMap.set("Hilliard", "ChIJMxtWksaWOIgRnlXah9jo_aE");

    const townCodeInput = document.querySelector("#mySelect");
    const townCode = townCodeInput.value;   
    const placeId = townCodeMap.get(townCode);
    console.log("Town code entered, " + townCode + ", has a place id of " + placeId + ".");

    const GOOGLE_API_KEY = "AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4"

    const googleMap = document.querySelector(".google-map");
    googleMap.innerHTML = "<iframe width='600' height='450' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/place?q=place_id:" + placeId + "&key=" + GOOGLE_API_KEY + "' allowfullscreen></iframe>";
  },



  searchByZipCode() {
    event.preventDefault();

    // place ids come from here: https://developers.google.com/places/place-id

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
   
    const GOOGLE_API_KEY = "AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4"  


    // let testmap = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=' + GOOGLE_API_KEY;
    // console.log(testmap);

    
    // const placeIdAPI = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"

    const googleMap = document.querySelector(".google-map");
    googleMap.innerHTML = "<iframe width='600' height='450' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/place?q=place_id:" + placeId + "&key=" + GOOGLE_API_KEY + "' allowfullscreen></iframe>";


    
  }

}