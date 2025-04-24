function CommodityWidget(page_element, initial_data) {
    var _this_widget_instance = this;
    var _container = page_element;


    // Display the name and information
    const nameEl = document.createElement("h3");
    nameEl.textContent = initial_data.name;
    _container.appendChild(nameEl);

    const infoEl = document.createElement("p");
    infoEl.textContent = initial_data.information;
    _container.appendChild(infoEl);

    // Constructor for the delete button
    function DeleteButton() {
        var _dom_element = document.createElement("input");
        _dom_element.type = "button";
        _dom_element.value = "Delete";
        _dom_element.onclick = function () {
            _container.remove();
        };
        // Append the button to the container or return it
        _container.appendChild(_dom_element);
    }

    // Instantiate the DeleteButton
    var del_button = new DeleteButton();
}