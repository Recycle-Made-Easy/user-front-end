const Map = require("./map");
const Config = require("./config");

module.exports = {

    displayUserPage() {
        this.locationForm();
        this.localAreaDropdown();
        this.categories();
        // this.addresses();
        this.googleMap();
    },

    locationForm() {

        const flexWrapperOuter = document.createElement("wrapper");
        flexWrapperOuter.classList.add("flex-wrapper-outer");
        document.querySelector(".content-wrapper").append(flexWrapperOuter);

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

        const byTown = document.createElement("div");
        byTown.innerHTML = "By town";
        byTown.classList.add("by-town");
        dropDownDiv.append(byTown);

        const selectContainer = document.createElement("div");
        selectContainer.classList.add("dropdown-select");
        dropDownDiv.append(selectContainer);

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

    async localAreaDropdown() {
        // Create dropdown.
        const myParent = document.querySelector(".dropdown-select");
        const selectList = document.createElement("select");
        selectList.id = "selectList";
        selectList.classList.add("selectList");
        myParent.appendChild(selectList);

        // Displays first option in the dropdown as empty.
        const option = document.createElement("option");
        option.value = "";
        option.text = "";
        selectList.appendChild(option);

        // Populate dropdown with local area names.
        const newLocal = await Config.LocalAreas();
        newLocal.forEach(localArea => {
            const option = document.createElement("option");
            option.value = localArea.placeId;
            option.text = localArea.name;
            selectList.appendChild(option);
        })
    
        // Update Google Map when different local area is selected.
        selectList.addEventListener('change', (event) => {
            Map.searchByTown();
            fetch("http://localhost:8080/api/geo/6")
            .then(res => res.json())
            .then(function (data) {
                console.log(data);
                // addresses();
            })
        }
    )
},

    categories() {

        const categoryContainer = document.createElement("section");
        categoryContainer.classList.add("recycling-category-container");
        document.querySelector(".flex-wrapper-left").append(categoryContainer);

        fetch("http://localhost:8080/api/categories/")
            .then(res => res.json())
            .then(function (data) {
                for (let index = 0; index < data.length; index++) {
                    const div = document.createElement("div")
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

    async addresses() {
        const addressContainer = document.createElement("section");
        addressContainer.classList.add("addresses-container");
        addressContainer.innerHTML = "Recycle Locations:";
        document.querySelector(".flex-wrapper-left").append(addressContainer);

        const centers = await Config.RecycleCenters();
        centers.forEach(center => {
            const div = document.createElement("div")
            div.classList.add("address-location");
            const link = document.createElement('div')
            link.classList.add("address-link")
            link.value = center.name;
            link.innerHTML = center.name;
            link.onclick = (event) => {
                const placeId = center.placeId;
                Map.displayMapByPlaceId(placeId);
            }
            div.append(link);
            addressContainer.append(div);
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