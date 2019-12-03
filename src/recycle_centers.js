
module.exports = {

    displayRecycleCentersPage() {
       
        const wrapper = document.createElement ("wrapper");
        wrapper.classList.add("flex-wrapper-outer");
        
        document.querySelector(".content-wrapper").append(wrapper);

        const wrapperContainer = document.createElement("wrapper");
        wrapperContainer.classList.add("location-form__container");
        wrapper.append(wrapperContainer);

        const fieldSet = document.createElement("fieldset");
        fieldSet.classList.add("location-form__fieldset");
        wrapperContainer.append(fieldSet);

        const locationFormField = document.createElement("field");
        locationFormField.classList.add("location-form__field");
        fieldSet.append(locationFormField);

        const labelLocationName = document.createElement("label");
        labelLocationName.classList.add("location-form__label");
        labelLocationName.innerHTML = "Name";
        locationFormField.append(labelLocationName);

        const inputLocationName = document.createElement("input");
        inputLocationName.classList.add("location-form__input");
        inputLocationName.innerHTML = "Name";
        locationFormField.append(inputLocationName);

        const labelLocationStreetAddress = document.createElement("label");
        labelLocationStreetAddress.classList.add("location-form__label");
        labelLocationStreetAddress.innerHTML = "Street Address";
        locationFormField.append(labelLocationStreetAddress);

        const inputLocationStreetAddress = document.createElement("input");
        inputLocationStreetAddress.classList.add("location-form__input");
        inputLocationStreetAddress.innerHTML = "Street Address";
        locationFormField.append(inputLocationStreetAddress);

        const labelLocationCity = document.createElement("label");
        labelLocationCity.classList.add("location-form__label");
        labelLocationCity.innerHTML = "City";
        locationFormField.append(labelLocationCity);

        const inputLocationCity = document.createElement("input");
        inputLocationCity.classList.add("location-form__input");
        inputLocationCity.innerHTML = "City";
        locationFormField.append(inputLocationCity);

        const labelLocationState = document.createElement("label");
        labelLocationState.classList.add("location-form__label");
        labelLocationState.innerHTML = "State";
        locationFormField.append(labelLocationState);

        const inputLocationState = document.createElement("input");
        inputLocationState.classList.add("location-form__input");
        inputLocationState.innerHTML = "Name";
        locationFormField.append(inputLocationState);

        const labelLocationZipCode = document.createElement("label");
        labelLocationZipCode.classList.add("location-form__label");
        labelLocationZipCode.innerHTML = "Zip Code";
        locationFormField.append(labelLocationZipCode);

        const inputLocationZipCode = document.createElement("input");
        inputLocationZipCode.classList.add("location-form__input");
        inputLocationZipCode.innerHTML = "Name";
        locationFormField.append(inputLocationZipCode);
    }

    }

    
