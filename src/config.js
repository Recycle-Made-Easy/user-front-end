module.exports = {

    GOOGLE_API_KEY() {
        return "AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4";
    },

    async LocalAreas() {
        let localAreas = [];
        await fetch("http://localhost:8080/api/geo/")
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
        return zipCodeMap;
    },

    async RecycleCenters() {
        let RecycleCenters = [];
        await fetch("http://localhost:8080/api/centers/")
            .then(res => res.json())
            .then(function (data) {
                RecycleCenters = data;
                });
        return RecycleCenters;
    }

}