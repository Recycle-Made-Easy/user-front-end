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

        const contentBody = document.createElement("div");
        contentBody.classList.add("content-wrapper");
        wrapper.append(contentBody);
    }

    
}