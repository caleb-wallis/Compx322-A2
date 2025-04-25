/**
 * Name: Caleb Wallis
 * Student ID: 1637640
 * 
 */

let commodities = [];

function requestCommodities() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'getCommodities.php', true); // Set up the GET request to the PHP script
    xhr.setRequestHeader('Content-Type', 'application/json'); // Set headers if needed
    
    xhr.onload = function() {
      try {
        const response = JSON.parse(xhr.responseText);
        commodities = response;
        listCommodities();
      } catch (e) {
        console.error("Failed to parse JSON", xhr.responseText);
      }
    };
    
    xhr.onerror = function() {
        console.error('Request failed');
    };

    xhr.send(); // Send the request
}


function listCommodities() {

    // Sort commodoties alphabetically
    commodities.sort(commoditySort);

    // Put into drop down list
    
    commodities.forEach(commodity => {
        //console.log(commodity);

        let o = document.createElement("option");
        o.textContent = commodity.name;
        
        let select = document.getElementById("commodityDropdown");
        select.appendChild(o);
    });
}

commoditySort = function(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return 1; // nameA comes after nameB
    }
    if (nameA < nameB) {
      return -1; // nameA comes before nameB
    }
    return 0;  // names are equal
  };



// Add listener for the dropdown list
document.getElementById('commodityDropdown').addEventListener('change', function() {
  const selectedValue = this.value;
  console.log("You selected:", selectedValue);

  const existingWidget = widgets.find(widget => widget.getName() === selectedValue);
  if(existingWidget == null){
    const commodity = commodities.find(commodity => commodity.name === selectedValue);
    place = document.createElement("div");
    place.classList.add("commodity-widget");
    placeholder = document.getElementById("dashboard");
    placeholder.appendChild(place);
  
    let newWidget = new CommodityWidget(place, commodity);
    widgets.push(newWidget);
  }
});


// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', requestCommodities);