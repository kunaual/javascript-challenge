console.log("app.js loaded!")
// from data.js
var tableData = data;
//get reference to the page's empty table body
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var dateFilter = d3.select("#datetime")


//init the table w/everything
data.forEach(function (ufoEvent) {
    console.log(ufoEvent)
    var row = tbody.append("tr");
    //loop through each key/value pair in the results Date, city, state, country, shape, durationMinutes, comments
    //and put the value on the table
    Object.entries(ufoEvent).forEach(function ([key, value]) {
        //   console.log(key, value);
        var cell = row.append("td").text(value);

    });

});

function filterClick() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    console.log("filter button was clicked!");

    //clear any prev. values in the table
    tbody.html("");


    var dateValue = d3.select("#datetime").node().value;
    if (!dateValue){
        d3.select("#datetime").node().value = "Enter date here to filter data. Try 1/2/2010";
    }

    //get data from the date field
    console.log(dateValue);

    //filter data for records that match the inputted date value
    var filteredUFO = data.filter(ufoData => (ufoData.datetime === dateValue && (dateValue)) || !(dateValue));
    console.log(filteredUFO);

    //loop through each of the filtered rsults and add to the table
    filteredUFO.forEach(function (ufoEvent) {
        console.log(ufoEvent)
        var row = tbody.append("tr");
        //loop through each key/value pair in the results Date, city, state, country, shape, durationMinutes, comments
        //and put the value on the table
        Object.entries(ufoEvent).forEach(function ([key, value]) {
            //   console.log(key, value);
            var cell = row.append("td").text(value);

        });

    });


}

button.on("click", filterClick);
//when user updates filter date and leaves the field, run the filter function
dateFilter.on("change", filterClick);

