const Map = require("./map");
const Config = require("./config");

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
inputType.classList.add("location-form__input");
zipCodeForm.append(inputType);

const submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";
submitButton.classList.add("submit");
submitButton.classList.add("location-form__button");
zipCodeForm.append(submitButton);
submitButton.onclick = (event) => {
    Map.searchByZipCode();
}


const myParent = document.body;
const selectList = document.createElement("select");
selectList.id = "selectList";
myParent.appendChild(selectList);

// Displays first option in the dropdown as empty.
const option = document.createElement("option");
option.value = "";
option.text = "";
selectList.appendChild(option);
byTown.append(selectList);

// Populate dropdown with local area names.
Config.LocalAreas().forEach((placeId, name) => {
    const option = document.createElement("option");
    option.value = name;
    option.text = name;
    selectList.appendChild(option);
    byTown.append(selectList);
})

// Update Google Map when different local area is selected.
selectList.addEventListener('change', (event) => {
    Map.searchByTown();
});

// Adds Google Map to the page.
const googleMap = document.createElement("div");
googleMap.classList.add("google-map");
document.querySelector(".flex-wrapper-outer").append(googleMap);
Map.displayMap();

