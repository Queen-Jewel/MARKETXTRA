document.addEventListener('DOMContentLoaded',()=> {
const line = document.getElementById('lineChart').getContext('2d');

// Define gradient fill (vertical from top to bottom)
var gradient = line.createLinearGradient(0, 0, 10, 400);
gradient.addColorStop(0, 'rgba(0, 128, 0, 1)');
gradient.addColorStop(1, 'rgba(0, 184, 0, 1)');

let chart = new Chart(line, {
    type: 'line',
    data: {
        labels: ['12am', '3am', '9am', '12pm', '3pm', '9pm', '11:59am'],
        datasets:[{
            label:'',
            data:['0k','50k', '100k', '150k', '200k', '250+'],
            backgroundColor: gradient,
            borderColor: 'rgba(0, 128, 0, 1)',
            fill: false,
            tension:0.5
        }]
    },
});

// Doughnut Chart
    const doughnut = document.getElementById('doughnut').getContext('2d');
    
    let chart2 = new Chart(doughnut, {
        type: 'doughnut',
        data: {
            labels:['Plain T', 'Branded T', 'Customized T'],
            datasets:[{
                data:[25,40,35],
                backgroundColor:[gradient,  '#D45800', '#31D0AA'],
                

            }]
        },
        options:{
            plugins:{
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 10,
                    boxHeight: 10
                }
            }
        },
        cutout: 70,
        }
    })
});