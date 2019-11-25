const Map = require("./map");
const Config = require("./config");

module.exports = {

    header() {
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
    },

    locationForm() {
        const locationSelectionContainer = document.createElement("section");
        locationSelectionContainer.classList.add("location-selection-container");
        document.querySelector(".flex-wrapper-left").append(locationSelectionContainer);

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
    },

    localAreaDropdown() {
        // Create dropdown.
        const myParent = document.body;
        const selectList = document.createElement("select");
        selectList.id = "selectList";
        myParent.appendChild(selectList);

        // Displays first option in the dropdown as empty.
        const option = document.createElement("option");
        option.value = "";
        option.text = "";
        selectList.appendChild(option);
        document.querySelector(".by-town").append(selectList);

        // Populate dropdown with local area names.
        Config.LocalAreas().forEach((placeId, name) => {
            const option = document.createElement("option");
            option.value = name;
            option.text = name;
            selectList.appendChild(option);
            document.querySelector(".by-town").append(selectList);
        })

        // Update Google Map when different local area is selected.
        selectList.addEventListener('change', (event) => {
            Map.searchByTown();
        });
    },

    categories() {

        const categoryContainer = document.createElement("section");
        categoryContainer.classList.add("recycling-category-container");
        document.querySelector(".flex-wrapper-left").append(categoryContainer);

        fetch("http://localhost:8080/api/categories/")
            .then(res => res.json())
            .then(function (data) {
                console.log(data);
                for (let index = 0; index < data.length; index++) {
                    const div = document.createElement("div")
                    // div.textContent = data[index].name;
                    div.classList.add(".category-checkbox");                    

                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.value = data[index].id;
                    checkbox.id = data[index].name + "-checkbox";
                    checkbox.name = data[index].name;
                    const label = document.createElement("label");
                    label.htmlFor = data[index].name + "-checkbox";
                    label.appendChild(document.createTextNode(data[index].name));
                    categoryContainer.append(checkbox);
                    categoryContainer.append(label);
                    categoryContainer.append(div);
                }
            })

    },

    addresses () {
        const addressContainer = document.createElement("section");
        addressContainer.classList.add("addresses-container");
        document.querySelector(".flex-wrapper-left").append(addressContainer);

        fetch("http://localhost:8080/api/recycle-locations")
            .then(res => res.json())
            .then(function (data) {
                console.log(data);
                for (let index = 0; index < data.length; index++) {
                    const div = document.createElement("div")
                    // div.textContent = data[index].name;
                    div.classList.add(".address-location");
                    div.innerHTML = data[index].name;
                    addressContainer.append(div);
                }
                })
    },

    googleMap() {
        // Adds Google Map to the page.
        const googleMap = document.createElement("div");
        googleMap.classList.add("google-map");
        document.querySelector(".flex-wrapper-outer").append(googleMap);
        Map.displayMap();
    }
}