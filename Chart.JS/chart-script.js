//Import the combined_data.json file, and call it data.
document.addEventListener('DOMContentLoaded', function () {
    fetch('../json_files/combined_data.json')
        .then(response => response.json())
        .then(data => {
            createChart(data);
        });
});

//Create a chart from 'data', and map each variable to a key in the json file.
function createChart(data) {
    var counties = data.map(entry => entry.County);
    var incomes = data.map(entry => parseInt(entry.Income.replace(',', ''))); 
    var populations = data.map(entry => parseInt(entry.Population.replace(',', '')));

    //reference the Project 3 id from the canvas section in html. I think this is needed for Chart.js.
    var ctx = document.getElementById('Project 3').getContext('2d');

    //Create a scatterplot
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Texas Counties Population vs Income', //Title
                data: data.map(entry => ({ 
                    x: parseInt(entry.Income.replace(',', '')), //Make x = to income
                    y: parseInt(entry.Population.replace(',', '')), //Make y = to population
                    label: entry.County  //Make the labels equal to the County Name 
                })),
                backgroundColor: 'rgba(75, 100, 192, 0.7)',
                pointRadius: 8,
                pointHoverRadius: 10,
            }]
        },
        options: { //Open options
            plugins: { //Open plUGins
                tooltip: { //Open tooltips
                    callbacks: { //Open callbacks
                        label: function (context) {
                            var label = context.dataset.data[context.dataIndex].label || ''; //Create the functionality for the couny name lables
                            if (label) {
                                label += ': ';
                            }
                            label += `Population: ${context.parsed.y}, Income: ${context.parsed.x}`; //Create the functionality for the income and population labels
                            return label;
                        }
                    }
                }
            }
        }
    });
}