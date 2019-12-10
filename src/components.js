const Map = require("./map");
const Config = require("./config");
const UserPage = require("./user_page");

module.exports = {

    header() {
        const wrapper = document.querySelector(".wrapper");

        const createdHeaderContainer = document.createElement("header");
        createdHeaderContainer.classList.add("header__container");
        wrapper.append(createdHeaderContainer);

        const headerLeftSide = document.createElement("div");
        headerLeftSide.classList.add("header__left-side");
        createdHeaderContainer.append(headerLeftSide);

        const headerRightSide = document.createElement("div");
        headerRightSide.classList.add("header__right-side");
        createdHeaderContainer.append(headerRightSide);

        const headerTitle = document.createElement("h1");
        headerTitle.innerHTML = "Recycle Made Easy";
        headerTitle.classList.add("header__title");        
        headerLeftSide.append(headerTitle);

        const contentBody = document.createElement("div");
        contentBody.classList.add("content-wrapper");
        wrapper.append(contentBody);
        
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
    }
}
