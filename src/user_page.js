const Map = require("./map");
const Config = require("./config");

module.exports = {

    displayUserPage() {
        this.locationForm();
        this.localAreaDropdown();
        this.categories();
        this.addresses(Config.EndPoints().get("get_all_centers"));
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

        const byTown = document.createElement("p");
        byTown.innerHTML = "By city";
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

    async localAreaDropdown() {
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

        // Populate dropdown with a list of cities we have recycle centers for.
        const endpoint = Config.EndPoints().get("get_list_of_cities");
        const cities = await Config.FetchData(endpoint);
        cities.forEach(city => {
            const option = document.createElement("option");
            option.text = city;
            option.value = city;
            selectList.appendChild(option);
            document.querySelector(".by-town").append(selectList);
        })

        // Update Google Map when different local area is selected.
        selectList.addEventListener('change', (event) => {
            const city = document.querySelector("#selectList").value;
            if (city == "") {
                this.addresses(Config.EndPoints().get("get_all_centers"));
            }
            const endpoint = Config.EndPoints().get("get_centers_by_city") + city;
            this.addresses(endpoint);
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
                    checkbox.name = "category-checkbox";
                    const label = document.createElement("label");
                    label.htmlFor = data[index].name + "-checkbox";
                    label.appendChild(document.createTextNode(data[index].name));
                    categoryContainer.append(checkbox);
                    categoryContainer.append(label);
                    categoryContainer.append(div);

                    checkbox.addEventListener('change', function () {
                        
                        if (checkbox.checked) {
                            console.log("I clicked a checkbox; am inside the if for box.checked");
                            let city = document.querySelector("#selectList").value;
                            const url = "http://localhost:8080/api/centers/filter/" + city + "/" + checkbox.value;
                            const options = { method: "GET", headers: { "Accept": "application/json" } }
                            const addressContainer = document.querySelector(".addresses-container");
                            addressContainer.innerHTML = "";
                            addressContainer.innerHTML = "Recycle Locations:";

                            fetch(url, options)
                                .then(res => res.json())
                                .then(function (centers) {
                                    console.log(centers);
                                    centers.forEach(center => {
                                        console.log("inside fetch for checking box");
                                        console.log(center.name);
                                        console.log(center.placeId);
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
                                    console.log("outside fetch for checking box");
                                });

                        } else if (!checkbox.checked) {
                            console.log("inside else if for unchecking box");
                            console.log("Fine day for some code~");
                            let city = document.querySelector("#selectList").value;
                            const url = "http://localhost:8080/api/centers/city/" + city;
                            const options = { method: "GET", headers: { "Accept": "application/json" } }

                            const addressContainer = document.querySelector(".addresses-container");
                            addressContainer.innerHTML = "";
                            addressContainer.innerHTML = "Recycle Locations:";

                            fetch(url, options)
                                .then(res => res.json())
                                .then(function (centers) {
                                    console.log(centers);
                                    
                                    centers.forEach(center => {
                                        console.log("inside fetch for unchecking box");
                                        console.log(center.name);
                                        console.log(center.placeId);
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
                                    console.log("outside fetch for unchecking box");
                                }); 

                        } 

                    })
                }
            })
    },

    async addresses(endpoint) {

        if (document.body.contains(document.querySelector(".addresses-container"))) {
            const addressContainer = document.querySelector(".addresses-container");
            addressContainer.innerHTML = "";
            addressContainer.classList.add("addresses-container");
            addressContainer.innerHTML = "Recycle Locations:";
        } else {
            const addressContainerNew = document.createElement("section");
            addressContainerNew.classList.add("addresses-container");
            addressContainerNew.innerHTML = "Recycle Locations:";
            document.querySelector(".flex-wrapper-left").append(addressContainerNew);
        }

        const addressContainer = document.querySelector(".addresses-container");
        const centers = await Config.FetchData(endpoint);
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