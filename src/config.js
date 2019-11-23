module.exports = {

    GOOGLE_API_KEY() {
        return "AIzaSyAZpUBB7ZJkWZnjMIK7bscJVc_6km5D6O4";
    },

    LocalAreas() {
        let localAreasMap = new Map();
        localAreasMap.set("Clintonville", "ChIJn3LhCWiMOIgR3Rx6W6VV1PA");
        localAreasMap.set("Columbus", "ChIJcd6QucGJOIgRM7Wxz_hmMuQ");
        localAreasMap.set("Dublin", "ChIJH6FQ1MTsOIgRKJBoFWgXwgA");
        localAreasMap.set("Hilliard", "ChIJMxtWksaWOIgRnlXah9jo_aE");
        localAreasMap.set("Westerville", "ChIJVyNMY2X1OIgRQT9dsFQwoUY");    
        return localAreasMap;
    }

}