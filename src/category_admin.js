module.exports = {

    showAllCategories() {

    const categoryContainer = document.createElement("section");
    categoryContainer.classList.add("recycling-category-container");
    document.querySelector(".content-wrapper").append(categoryContainer);

        fetch("http://localhost:8080/api/categories/")
        .then(res => res.json())
        .then(function (data) {
            for (let index = 0; index < data.length; index++){
                const categoryName = document.createElement("p")
                categoryName.innerHTML = data[index].name;
                categoryContainer.append(categoryName);
            }
       });
    },

    adminCategories () {

        // I'm not sure if this is necessary
        const categoryContainer = document.createElement("section");
        categoryContainer.classList.add("admin-category-container");
        document.append(categoryContainer);
    
        const adminCategoriesTitle = document.createElement("h2");
        adminCategoriesTitle.innerHTML = "Admin Page For Categories";
        categoryContainer.append(adminCategoriesTitle);

        // This will hold three columns, one for each thing the admin can do: Add, delete, and show all categories.
        const adminCategoryWrapper = document.createElement("wrapper");
        adminCategoryWrapper.classList.add("admin-category-wrapper");
        document.querySelector(".admin-category-container").append(adminCategoryWrapper);

            // Column 1: For showing all categories
            const showAllColumn = document.createElement("section");
            showAllColumn.classList.add("admin-column-show-all");
            adminCategoryWrapper.append(showAllColumn);
            
            const showAllTitle = document.createElement("h3");
            showAllTitle.innerHTML = "All categories:";
            showAllColumn.append(showAllTitle);

            showAllCategories();
    }


}