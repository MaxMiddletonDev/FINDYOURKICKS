let shoeData = [];

document.addEventListener("DOMContentLoaded", () => {
    loadShoeData();
}); 

function loadShoeData() {
    let shoeDataSet = "../Data/shoe_dataset.csv"

    Papa.parse(shoeDataSet, {
        download: true,
        header: true,
        complete: function(results) {
            shoeData = results.data;
            console.log("CSV Successful:", shoeData);
        },
        error: function(err) {
            console.error("CSV Error", err);
        }
    })
}

function getShoeData() {
    return shoeData;
}