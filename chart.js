var myChart;

const commodity1 = {
    name: "",
    interval: "",
    values : [],
    dates : []
}

const commodity2 = {
    name: "",
    interval: "",
    values : [],
    dates : []
}


function resetCommodities(){
     commodity1 = {
        name: "",
        interval: "",
        values : [],
        dates : []
    }
    
     commodity2 = {
        name: "",
        interval: "",
        values : [],
        dates : []
    }
}

//Creates a chart for a single line of data
function showChart(details){
    if(myChart){
        myChart.destroy();
    }

    getData(details, commodity1);
    
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
    
    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}


function getData(details, commodity){
    commodity.name = details.name;
    commodity.interval = details.interval;
    commodity.values = [];
    commodity.dates = [];
    details.data.forEach(item => {
        commodity.values.push(item.value);
        commodity.dates.push(item.date);
    });
}


//creates a chart for two lines of data
function showMultiChart(details){

    if(!commodity1.values.length || commodity2.values.length || details.name === commodity1.name){
        return;
    }

    if(myChart){
       myChart.destroy();
    }
    
   getData(details, commodity2);


    const chartData = {
        labels: commodity1.dates,
        datasets: [{
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

  myChart = new Chart(
  document.getElementById('myChart'),
  config
  );
}

function clearGraph(){
    if(myChart){
        myChart.destroy();      
        resetCommodities();
    }
}

// Make commoditity an object to use

// Store line data in 2 different parts 
// If second one is empty then fill it up otherwise don't allow adding data
// Clear 