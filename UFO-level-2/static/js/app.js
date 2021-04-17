console.log("app.js loaded!")
// from data.js
var tableData = data;
//get reference to the page's empty table body
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");
var cbutton = d3.select("#clear-btn");



//init the table w/everything
//next interation, take dataset as input value and populate the table w/that data.  then don't need to repeat thie code in the filter block
function init() {
    data.forEach(function (ufoEvent) {
        var row = tbody.append("tr");
        //loop through each key/value pair in the results Date, city, state, country, shape, durationMinutes, comments
        //and put the value on the table
        Object.entries(ufoEvent).forEach(function ([key, value]) {
            //   console.log(key, value);
            var fixedText;
            if (key ==='comments'){
                fixedText = fixComments(value);
            } else {
                fixedText = value;
            }
            var cell = row.append("td").text(fixedText);

        });

    })
};

//this is a silly way to do this, the real way would be to fix the dataset one time
//but doing this for practice
function fixComments(text){

    text = text.replace(/&#44/g,',');
    text = text.replace(/&#39/g,'\'');
    text = text.replace(/&quot;/g,'\'');
    text = text.replace(/&#33/g,'!');
    return text;
}


function clearClick() {
    console.log("clear button was clicked!");
    //clear any prev. values in the table
    tbody.html("");
    init();
};

function filterClick() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    console.log("filter button was clicked!");

    //clear any prev. values in the table
    tbody.html("");

    var dateValue = d3.select("#datetime").node().value;
    var cityValue = d3.select("#city").node().value;
    var stateValue = d3.select("#state").node().value;
    var countryValue = d3.select("#country").node().value;
    var shapeValue = d3.select("#shape").node().value;


    //text values in data are stored in all lowercase, hence toLowerCase() in filtering
    var filteredUFO = data.filter(ufoData => (((ufoData.datetime === dateValue) && (dateValue)) || !(dateValue))
        && (((ufoData.city === cityValue.toLowerCase()) && (cityValue)) || !(cityValue))
        && (((ufoData.state === stateValue.toLowerCase()) && (stateValue)) || !(stateValue))
        && (((ufoData.country === countryValue.toLowerCase()) && (countryValue)) || !(countryValue))
        && (((ufoData.shape === shapeValue.toLowerCase()) && (shapeValue)) || !(shapeValue))
    );


    //loop through each of the filtered results and add to the table
    filteredUFO.forEach(function (ufoEvent) {
        var row = tbody.append("tr");
        //loop through each key/value pair in the results Date, city, state, country, shape, durationMinutes, comments
        //and put the value on the table
        Object.entries(ufoEvent).forEach(function ([key, value]) {
            var fixedText;
            if (key ==='comments'){
                fixedText = fixComments(value);
            } else {
                fixedText = value;
            }
            var cell = row.append("td").text(fixedText);
            

        });

    });


};

button.on("click", filterClick);
cbutton.on("click", clearClick);
init();
