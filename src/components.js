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
        headerTitle.href = "javascript:void(0);";
        headerLeftSide.append(headerTitle);

        const contentBody = document.createElement("div");
        contentBody.classList.add("content-wrapper");
        wrapper.append(contentBody);

        headerTitle.onclick = () => {
            const contentWrapper = document.querySelector(".content-wrapper");
            if (contentWrapper.innerHTML == "") {
                UserPage.displayUserPage();
            }          
        }
    },

    navigation() {

        const hrs = document.querySelector(".header__right-side");
        const navContainer = document.createElement("div");
        navContainer.classList.add("nav__container");
        hrs.append(navContainer);

        const links = document.createElement("div");
        links.classList.add("nav__list");
        navContainer.append(links);

        const aLink1 = document.createElement("a");
        aLink1.classList.add("nav__list-item");
        aLink1.textContent = "Local Areas";
        aLink1.href = "javascript:void(0);";
        aLink1.onclick = () => {
            document.querySelector(".content-wrapper").innerHTML = "";
        }
        links.append(aLink1);

        const aLink2 = document.createElement("a");
        aLink2.classList.add("nav__list-item");
        aLink2.textContent = "Recycle Centers";
        aLink2.href = "javascript:void(0);";
        aLink2.onclick = () => {
            document.querySelector(".content-wrapper").innerHTML = "";
        }
        links.append(aLink2);

        const aLink3 = document.createElement("a");
        aLink3.classList.add("nav__list-item");
        aLink3.textContent = "Recycle Categories";
        aLink3.href = "javascript:void(0);";
        aLink3.onclick = () => {
            document.querySelector(".content-wrapper").innerHTML = "";
        }
        links.append(aLink3);

        const navButton = document.createElement("button");
        navButton.classList.add("nav__button");
        navButton.textContent = "Menu";
        navContainer.append(navButton);

        // start with nav hidden
        links.style.display = "none"

        navButton.onclick = () => {
            const nav = document.querySelector(".nav__list")
            if (nav.style.display === "block") {
                nav.style.display = "none";
            } else {
                nav.style.display = "block";
            }
        }


    }


}