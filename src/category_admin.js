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

        const deletionFormField = document.createElement("field");
        deletionFormField.classList.add("location-form__field");
        fieldSet.append(deletionFormField);

        const labelCategoryForDeletion = document.createElement("label");
        labelCategoryForDeletion.classList.add("deletion-form__label");
        labelCategoryForDeletion.innerHTML = "Category to be deleted: ";
        deletionFormField.append(labelCategoryForDeletion);

        const inputCategoryForDeletion = document.createElement("input");
        labelCategoryForDeletion.classList.add("deletion-form__input");
        labelCategoryForDeletion.innerHTML = "Category to be deleted: ";
        deletionFormField.append(inputCategoryForDeletion);

        const locationFormField = document.createElement("button");
        locationFormField.innerHTML = "Delete Category";
        locationFormField.classList.add("deletion-form__field");
        fieldSet.append(locationFormField);
    },

    showAdditionSection(){

        const wrapper = document.createElement ("wrapper");
        wrapper.classList.add("flex-wrapper-outer");
        document.querySelector(".content-wrapper").append(wrapper);

        const wrapperContainer = document.createElement("wrapper");
        wrapperContainer.classList.add("addition-form__container");
        wrapper.append(wrapperContainer);

        const fieldSet = document.createElement("fieldset");
        fieldSet.classList.add("addition-form__fieldset");
        wrapperContainer.append(fieldSet);

        const additionFormField = document.createElement("field");
        additionFormField.classList.add("location-form__field");
        fieldSet.append(additionFormField);

        const labelCategoryForAddition = document.createElement("label");
        labelCategoryForAddition.classList.add("addition-form__label");
        labelCategoryForAddition.innerHTML = "Category to be deleted: ";
        additionFormField.append(labelCategoryForAddition);

        const inputCategoryForAddition = document.createElement("input");
        labelCategoryForAddition.classList.add("addition-form__input");
        labelCategoryForAddition.innerHTML = "Category to be added: ";
        additionFormField.append(inputCategoryForAddition);

        const locationFormField = document.createElement("button");
        locationFormField.innerHTML = "Delete Category";
        locationFormField.classList.add("addition-form__field");
        fieldSet.append(locationFormField);
    },

    deleteCategory(){
        fetch("http://localhost:8080/api/categories/{name}/delete-category")
        method: "Delete"
        body: formData
        .then(res => res.json());
    },

    // This function is called in components.js
    adminCategories() {

        const categoryContainer = document.createElement("section");
        categoryContainer.classList.add("admin-category-container");
        document.querySelector(".content-wrapper").append(categoryContainer);
    
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

            // Column 2: For deleting categories
            const deletionColumn = document.createElement("section");
            deletionColumn.classList.add("admin-column-deletion");
            adminCategoryWrapper.append(deletionColumn);
            
            this.showDeletionSection();
            // Column 3: For adding categories
            const additionColumn = document.createElement("section");
            additionColumn.classList.add("admin-column-addition");
            adminCategoryWrapper.append(additionColumn);          
            
            this.showAdditionSection();
    }


}