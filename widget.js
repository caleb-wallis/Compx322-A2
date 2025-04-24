function CommodityWidget(page_element, initial_data) {
    var _this_widget_instance = this;
    var _container = page_element;

    var _name = initial_data.name;
    var _code = initial_data.code;
    var _info = initial_data.information;

    // Display the name and information
    const nameEl = document.createElement("h3");
    nameEl.textContent = _name;
    _container.appendChild(nameEl);

    const infoEl = document.createElement("p");
    infoEl.textContent = _info;
    _container.appendChild(infoEl);

    // Constructor for the delete button
    function RemoveButton() {
        var _dom_element = document.createElement("input");
        _dom_element.type = "button";
        _dom_element.value = "Remove";
        _dom_element.onclick = function () {
            _container.remove();
        };
        // Append the button to the container or return it
        _container.appendChild(_dom_element);
    }


    // Constructor for the delete button
    function AddGraphButton() {
        const _dom_element = document.createElement("input");
        _dom_element.type = "button";
        _dom_element.value = "Add to Graph";
        _dom_element.onclick = async function () {
          try {
            const details = await requestDetails();
            showMultiChart(details);
          } catch (error) {
            console.error("Error fetching graph data:", error);
          }
        };
        _container.appendChild(_dom_element);
      }


    function ShowGraphButton() {
        const _dom_element = document.createElement("input");
        _dom_element.type = "button";
        _dom_element.value = "Show Graph";
        _dom_element.onclick = async function () {
          try {
            const details = await requestDetails();
            showChart(details);
          } catch (error) {
            console.error("Error fetching graph data:", error);
          }
        };
        _container.appendChild(_dom_element);
      }
      
      // requestDetails using fetch
      async function requestDetails() {
        const response = await fetch("getCommodityPrice.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            code: _code // Make sure _code is defined in scope
          })
        });
      
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      
        const data = await response.json();
        return data;
      }

    
    // Instantiate the buttons
    var show_button = new ShowGraphButton();
    var add_button = new AddGraphButton();
    var del_button = new RemoveButton();



}

