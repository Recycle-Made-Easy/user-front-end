module.exports = {

    GOOGLE_API_KEY() {
        return "AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4";
    },

    SERVER() {
        // return "localhost:8080";
        return "https://473073b1.ngrok.io";
    },

    EndPoints() {
        const SERVER = this.SERVER();
        let endpoints = new Map();
        endpoints.set("get_all_centers", SERVER + "/api/centers/");
        endpoints.set("get_centers_by_placeId", SERVER + "/api/geo/placeId/"); // + placeId
        endpoints.set("get_list_of_cities", SERVER + "/api/centers/cities");
        endpoints.set("get_centers_by_city", SERVER + "/api/centers/city/"); // + city name
        endpoints.set("get_filtered_centers", SERVER + "/api/centers/filter/"); // + city name and array of category ids, 
        // or just + array of category ids, or city name & zip code & category id
        endpoints.set("get_zipcodes", SERVER + "/api/centers/zips");
        endpoints.set("get_centers_by_zip", SERVER + "/api/centers/zip/"); // + zip code, or city name & zip code
        endpoints.set("get_centers_by_zip_and_category", SERVER + "/api/centers/zipcat/"); // + zip code & category id
        return endpoints;
    },

    async LocalAreas() {
        let localAreas = [];
        await fetch(this.SERVER() + "/api/geo/")
            .then(res => res.json())
            .then(function (data) {
                localAreas = data;
            });
        return localAreas;
    },

    ZipCodes() {
        let zipCodeMap = new Map();
        zipCodeMap.set("43201", "ChIJ9Rz24rWOOIgR3EEuL2Ge4oo");
        zipCodeMap.set("43206", "ChIJw6wuB5iIOIgRus0jBTvKLHo");
        zipCodeMap.set("43212", "ChIJOW2nsVCOOIgR0IzLWzB30l4");
        zipCodeMap.set("43215", "ChIJmRPPvRCGOIgRARpJZtkXzq0");
        zipCodeMap.set("43224", "ChIJj3ATYruLOIgRMmVSsRFsuQ0");
        zipCodeMap.set("43204", "ChIJXx_BZR2QOIgRR04X197PhwE");
        return zipCodeMap;
    },

    Cities() {
        let cities = new Map();
        cities.set("Westerville", "ChIJVyNMY2X1OIgRQT9dsFQwoUY");
        cities.set("Dublin", "ChIJH6FQ1MTsOIgRKJBoFWgXwgA");
        cities.set("Clintonville", "ChIJn3LhCWiMOIgR3Rx6W6VV1PA");
        cities.set("Hilliard", "ChIJMxtWksaWOIgRnlXah9jo_aE");
        cities.set("Columbus", "ChIJcd6QucGJOIgRM7Wxz_hmMuQ");
        cities.set("Worthington", "ChIJNbdtieWKOIgRcQESDx-_8Jk");
        cities.set("Upper Arlington", "ChIJk2r4U_iNOIgRjxV526_YGDY");
        cities.set("Grove City", "ChIJz-2d9KSEOIgROGmXIhqsRsA");
        return cities;
    },

    async FetchData(endpoint) {
        let fetchedData = [];
        await fetch(endpoint)
            .then(res => res.json())
            .then(function (data) {
                fetchedData = data;
            });
        return fetchedData;
    }

}