module.exports = {

    GOOGLE_API_KEY() {
        return "AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4";
    },

    async LocalAreas() {
        let localAreasMap = [];
        // localAreasMap.set("Clintonvil+le", "ChIJn3LhCWiMOIgR3Rx6W6VV1PA");
        // localAreasMap.set("Columbus", "ChIJcd6QucGJOIgRM7Wxz_hmMuQ");
        // localAreasMap.set("Dublin", "ChIJH6FQ1MTsOIgRKJBoFWgXwgA");
        // localAreasMap.set("Hilliard", "ChIJMxtWksaWOIgRnlXah9jo_aE");
        // localAreasMap.set("Westerville", "ChIJVyNMY2X1OIgRQT9dsFQwoUY");
        // return localAreasMap;

        await fetch("http://localhost:8080/api/geo/")
            .then(res => res.json())
            .then(function (data) {
                localAreasMap = data;
                });
        return localAreasMap;
    },

    ZipCodes() {
        let zipCodeMap = new Map();
        zipCodeMap.set("43201", "ChIJ9Rz24rWOOIgR3EEuL2Ge4oo");
        zipCodeMap.set("43206", "ChIJw6wuB5iIOIgRus0jBTvKLHo");
        zipCodeMap.set("43212", "ChIJOW2nsVCOOIgR0IzLWzB30l4");
        zipCodeMap.set("43215", "ChIJmRPPvRCGOIgRARpJZtkXzq0");
        zipCodeMap.set("43224", "ChIJj3ATYruLOIgRMmVSsRFsuQ0");
        return zipCodeMap;
    },

    RecycleCenters() {
        let RecycleCentersMap = new Map();
        RecycleCentersMap.set("Mark Gray Enterprises", "ChIJX6FjmMaPOIgRB40RjiCNx6E");
        RecycleCentersMap.set("Hugo Neu Recycling", "ChIJEx0OZW6ROIgRp8fDhjF6k9k");
        return RecycleCentersMap;

    }

}