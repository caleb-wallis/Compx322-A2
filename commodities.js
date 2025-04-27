/**
 * Name: Caleb Wallis
 * Student ID: 1637640
 * 
 * Fetches a list of commodities from the server, populates a dropdown menu, and handles adding selected commodities to the dashboard.
 */

// List of available commodities
let commodities = [];

// Requests commodities from server
function requestCommodities() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'getCommodities.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

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

    xhr.send();
}

// Lists commodities into a dropdown
function listCommodities() {
    commodities.sort(commoditySort);

    commodities.forEach(commodity => {
        let o = document.createElement("option");
        o.textContent = commodity.name;
        let select = document.getElementById("commodityDropdown");
        select.appendChild(o);
    });
}

// Helper function to sort commodities alphabetically
commoditySort = function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
};

// Handles dropdown selection
document.getElementById('commodityDropdown').addEventListener('change', function() {
    const selectedValue = this.value;
    
    const existingWidget = widgets.find(widget => widget.getName() === selectedValue);
    if (existingWidget == null) {
        const commodity = commodities.find(commodity => commodity.name === selectedValue);
        place = document.createElement("div");
        place.classList.add("commodity-widget");
        placeholder = document.getElementById("dashboard");
        placeholder.appendChild(place);

        let newWidget = new CommodityWidget(place, commodity);
        widgets.push(newWidget);
    }
});

// Start loading commodities when page loads
document.addEventListener('DOMContentLoaded', requestCommodities);
