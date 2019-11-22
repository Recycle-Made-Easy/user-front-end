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
    }
  }