

// const elements = require("./elements");
const wrapper = document.querySelector(".wrapper");

const createdHeaderContainer = document.createElement("header");
createdHeaderContainer.classList.add("header__container");
wrapper.append(createdHeaderContainer);

const createdHeaderLeftSide = document.createElement("left-side")


const createdElement = document.createElement("h1");
createdElement.innerHTML = "Recycle Made Easy";
createdElement.classList.add("header__title");
wrapper.append(createdElement);

const createdDropDownMenu = document.createElement("h3");
createdDropDownMenu.innerHTML = "Select A Location";
createdDropDownMenu.classLiss.add("location_wrapper");
wrapper.append(createdDropDownMenu);

