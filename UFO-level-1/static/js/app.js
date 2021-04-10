console.log("app.js loaded!")
// from data.js
var tableData = data;
var button = d3.select("#filter-btn");
//var datefield = d3.select("#datetime");
button.on("click", filterClick);

//console.log(datefield);

function filterClick() {
    console.log("filter button was clicked!");

    var dateValue = d3.select("#datetime").node().value;

    //get data from the date field
    console.log(dateValue);
  
    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
  }

count=0;
tableData.forEach((thing) => {
  //  console.log(thing);
    // count+=1;
    // if (count === 3) { 
    //     break; 
    // }
})
// function filterData(event){
//     var inputDate = d3.event.target.value;
//     console.log("in filterData")
// };

//datefield.on("change", filterClick)