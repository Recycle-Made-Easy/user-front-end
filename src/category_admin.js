module.exports = {

    showAllCategories() {

    const categoryContainer = document.createElement("section");
    // categoryContainer.classList.add("recycling-category-container");
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

    showDeletionSection(){

        const wrapper = document.createElement ("wrapper");
        wrapper.classList.add("flex-wrapper-outer");
        document.querySelector(".content-wrapper").append(wrapper);

        const wrapperContainer = document.createElement("wrapper");
        wrapperContainer.classList.add("deletion-form__container");
        wrapper.append(wrapperContainer);

        const fieldSet = document.createElement("fieldset");
        fieldSet.classList.add("deletion-form__fieldset");
        
        wrapperContainer.append(fieldSet);

        const locationFormField = document.createElement("button");
        locationFormField.classList.add("deletion-form__field");
        fieldSet.append(locationFormField);
    },

    deleteCategory(){
        fetch("http://localhost:8080/api/categories/{name}/delete-category")
        method: "Delete"
        body: formData
        .then(res => res.json());
    },

    adminCategories() {

        // I'm not sure if this is necessary
        const categoryContainer = document.createElement("section");
        categoryContainer.classList.add("admin-category-container");
        document.append(categoryContainer);
    
        const adminCategoriesTitle = document.createElement("h2");
        adminCategoriesTitle.innerHTML = "Admin Page For Categories";
        categoryContainer.append(adminCategoriesTitle);

        // This might hold three columns, one for each thing the admin can do: Add, delete, and show all categories.
        const adminCategoryWrapper = document.createElement("wrapper");
        adminCategoryWrapper.classList.add("admin-category-wrapper");
        document.querySelector(".admin-category-container").append(adminCategoryWrapper);

            // Column 1: For showing all categories
            const showAllColumn = document.createElement("section");
            showAllColumn.classList.add("admin-column-show-all");
            adminCategoryWrapper.append(showAllColumn);
            
            const showAllTitle = document.createElement("h3");
            showAllTitle.innerHTML = "All categories:";
            adminCategoryWrapper.append(showAllTitle);

            this.showAllCategories();

            // Column 2: For adding categories
            const deletionColumn = document.createElement("section");
            deletionColumn.classList.add("admin-column-deletion");
            adminCategoryWrapper.append(deletionColumn);

            this.showDeletionSection();
    }


}