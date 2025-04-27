/**
 * Name: Caleb Wallis
 * Student ID: 1637640
 * 
 * Handles creating and displaying line charts for one or two commodity data series using Chart.js.
 * Includes functionality to clear and reset charts.
 */


// Global chart variable
var myChart;

// Url for commodity price data
const dataURL = "getCommodityPrice.php";

// Commodity data holders
var commodity1 = { name: "", interval: "", values: [], dates: [], code: ""  };
var commodity2 = { name: "", interval: "", values: [], dates: [], code: "" };

// Resets commodity data
function resetCommodities() {
    commodity1 = { name: "", interval: "", values: [], dates: [] };
    commodity2 = { name: "", interval: "", values: [], dates: [] };
}

// Extracts data into a commodity object
function setData(details, commodity) {
    if (myChart) myChart.destroy();

    commodity.name = details.name;
    commodity.interval = details.interval;
    commodity.values = [];
    commodity.dates = [];
    details.data.forEach(item => {
        commodity.values.push(item.value);
        commodity.dates.push(item.date);
    });

    commodity.values.reverse();
    commodity.dates.reverse();
}

// Fetch commodity price data from URL and then do callback function (showChart or showMultiChart)
function fetchData(_code, callback) {
    fetch(dataURL, {
        method: "POST",
        body: JSON.stringify({ code: _code }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(callback);
}


// Displays a single line chart
function showChart(details) {
    setData(details, commodity1);

    const chartData = {
        labels: commodity1.dates,
        datasets: [{
            label: details.name + " - " + details.interval,
            data: commodity1.values,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            fill: false
        }]
    };

    const config = {
        type: "line",
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    };

    myChart = new Chart(document.getElementById('myChart'), config);
}

// Displays a two-line chart if valid
function showMultiChart(details) {

    //if (!commodity1.values.length || commodity2.values.length || details.name === commodity1.name) {
    if (!commodity1.values.length || details.name === commodity1.name) {
        return;
    }

    setData(details, commodity2);

    const chartData = {
        labels: commodity1.dates,
        datasets: [
            {
                label: commodity1.name + " - " + commodity1.interval,
                data: commodity1.values,
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 2,
                fill: false
            },
            {
                label: commodity2.name + " - " + commodity2.interval,
                data: commodity2.values,
                borderColor: "rgb(0, 99, 132)",
                borderWidth: 2,
                fill: false
            }
        ]
    };

    const config = {
        type: "line",
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    };

    myChart = new Chart(document.getElementById('myChart'), config);
}

// Clears the graph and resets data
function clearGraph() {
    if (myChart) {
        myChart.destroy();
        resetCommodities();
    }
}