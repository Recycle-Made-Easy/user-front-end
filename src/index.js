// const Map = require("./map");

const wrapper = document.querySelector(".wrapper");

const createdHeaderContainer = document.createElement("header");
createdHeaderContainer.classList.add("header__container");
wrapper.append(createdHeaderContainer);

const createdHeaderLeftSide = document.createElement("left-side")


const createdElement = document.createElement("h1");
createdElement.innerHTML = "Recycle Made Easy";
createdElement.classList.add("header__title");
wrapper.append(createdElement);


const flexWrapperOuter = document.createElement("wrapper");
flexWrapperOuter.classList.add("flex-wrapper-outer");
wrapper.append(flexWrapperOuter);

const flexWrapperLeft = document.createElement("wrapper");
flexWrapperLeft.classList.add("flex-wrapper-left");
flexWrapperOuter.append(flexWrapperLeft);

const locationSelectionContainer = document.createElement("section");
locationSelectionContainer.classList.add("location-selection-container");
flexWrapperLeft.append(locationSelectionContainer);

const dropDownMenuTitle = document.createElement("h3");
dropDownMenuTitle.innerHTML = "Select A Location";
dropDownMenuTitle.classList.add("location-selection-header");
locationSelectionContainer.append(dropDownMenuTitle);

const locationWrapper = document.createElement("wrapper");
locationWrapper.classList.add("location-wrapper");
locationSelectionContainer.append(locationWrapper);

const dropDownDiv = document.createElement("div");
dropDownDiv.classList.add("dropdown");
locationWrapper.append(dropDownDiv);

const byTown = document.createElement("p");
byTown.innerHTML = "By town";
byTown.classList.add("by-town");
dropDownDiv.append(byTown);

const zipCodeForm = document.createElement("form");
zipCodeForm.classList.add("form");
locationWrapper.append(zipCodeForm);

const zipCodeName = document.createElement("label");
zipCodeName.textContent = "By Zip code";
zipCodeName.classList.add("name");
zipCodeForm.append(zipCodeName);

const inputType = document.createElement("input");
inputType.classList.add("input");
zipCodeForm.append(inputType);

const submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";
submitButton.classList.add("submit");
zipCodeForm.append(submitButton);

var myParent = document.body;

var array = ["Dublin","Westerville","Clintonville","Hilliard"];

var selectList = document.createElement("select");
selectList.id = "mySelect";
myParent.appendChild(selectList);

for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
    byTown.append(selectList);
}




const googleMap = document.createElement("div");
googleMap.classList.add("google-map");
document.querySelector(".flex-wrapper-outer").append(googleMap);

const iframe = document.createElement("iframe");
iframe.classList.add("google-map__iframe");
iframe.src = "https://www.google.com/maps/embed/v1/view?zoom=10&center=39.9612%2C-82.9988&key=AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4"
// googleMap.innerHTML = <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?zoom=10&center=39.9612%2C-82.9988&key=AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4" allowfullscreen></iframe>
iframe.allowfullscreen = true;
googleMap.append(iframe);
// Map.displayMap();




