# javascript-challenge

Repository contains 2 mini projects 

    1.  UFO 1 project requirements:
        Using data.js and starter index.html write javascript to display data in a striped table.  Create event handling to allow data to be filtered by date.

    2.  UFO 2 project requirements:
        Using UFO 1 as starter code, expand filtering to filter data by any combo of the following: date, city, state, country, shape.


Files:

UFO-level-1:
* static/css/style.css - starter code style sheet
* static/images/ - contains starter code nasa.jpg and ufo.svg
* static/js/data.js - starter code dataset 
* static/js/app.js - used forEach to initialize the table with all results.  Created event handling for clicking the filter button to filter dataset by value in datetime field.
* index.html - started code page

UFO-level-2:
* static/css/style.css - style sheet updated for header text color and background image attributes.
* static/images/redorangeUFO.png - ufo icon for header bar
* static/js/data.js - starter code dataset 
* static/js/app.js - created init function to initialize the table with all results.  Added event handling for clicking the clear filter button to clear the values in the filter block fields and re-initilize the table. Updated the filterClick funtion to handle filtering the new fields. Added fixComments function to update &#44 type text back to their characters.
* index.html - added city, state, country, and shape fields to filter block. Added Clear filter button including onClick actions. Changed UFO icon image in navbar.