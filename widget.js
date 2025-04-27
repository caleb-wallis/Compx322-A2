/**
 * Name: Caleb Wallis
 * Student ID: 1637640
 * 
 * Defines the CommodityWidget class for displaying a commodity’s information and buttons for showing or adding to a chart, or removing itself.
 */

// All widget instances
let widgets = [];

// CommodityWidget constructor
function CommodityWidget(page_element, initial_data) {
    var _this_widget_instance = this;
    var _container = page_element;

    var _name = initial_data.name;
    var _code = initial_data.code;
    var _info = initial_data.information;

    // Display name
    const nameEl = document.createElement("h3");
    nameEl.textContent = _name;
    _container.appendChild(nameEl);

    // Display information
    const infoEl = document.createElement("p");
    infoEl.textContent = _info;
    _container.appendChild(infoEl);

    // Getter for name
    function getName() {
        return _name;
    }

    // Button to remove widget
    function RemoveButton() {
        var _dom_element = document.createElement("input");
        _dom_element.type = "button";
        _dom_element.value = "Remove";
        _dom_element.onclick = function () {
            _container.remove();
            widgets = widgets.filter(widget => widget !== _this_widget_instance);
        };
        _container.appendChild(_dom_element);
    }

    // Button to add commodity to a multi-line graph
    function AddGraphButton() {
        const _dom_element = document.createElement("input");
        _dom_element.type = "button";
        _dom_element.value = "Add to Graph";
        _dom_element.onclick = function() {
            fetchData(_code, showMultiChart);
        };
        _container.appendChild(_dom_element);
    }

    // Button to show single commodity graph
    function ShowGraphButton() {
        const _dom_element = document.createElement("input");
        _dom_element.type = "button";
        _dom_element.value = "Show Graph";
        _dom_element.onclick = function() {
            fetchData(_code, showChart);
        };
        _container.appendChild(_dom_element);
    }

    // Instantiate all buttons
    var show_button = new ShowGraphButton();
    var add_button = new AddGraphButton();
    var del_button = new RemoveButton();

    // Public method
    this.getName = getName;
}
