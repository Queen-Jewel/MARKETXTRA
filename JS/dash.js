document.addEventListener('DOMContentLoaded',()=> {
const ctx = document.getElementById('lineChart').getContext('2d');

// Define gradient fill (vertical from top to bottom)
var gradient = ctx.createLinearGradient(0, 0, 10, 400);
gradient.addColorStop(0, 'rgba(0, 128, 0, 1)');
gradient.addColorStop(1, 'rgba(0, 184, 0, 1)');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['12am', '3am','6am', '9am', '12pm', '3pm', '6pm', '9pm', '11:59am'],
        datasets:[{
            label:'',
            data:[0, 0, 0, 50, 120, 70, 50 , 150, 100, 200, 250],
            backgroundColor: gradient,
            borderColor: 'rgba(0, 128, 0, 1)',
            fill: false,
            tension:0.4
        }]
    },
    options: {
        scales: {
          x: {
            grid: {
              display: false
            },
            
          },
        }
      }
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

// Bar Chart

const bar = document.getElementById('barchart').getContext('2d');
// Define gradient fill (vertical from top to bottom)
const gradient = bar.createLinearGradient(0, 0, 10, 400);
gradient.addColorStop(0, 'rgba(0, 128, 0, 1)');
gradient.addColorStop(1, 'rgba(0, 184, 0, 1)');

new Chart(bar, {
    type:'bar',
    data: {
        labels: ['12am-3am', '3;01am-6am', '6:01am-9am', '9:01am-12pm', '12:01pm-3pm', '3:01pm-6pm', '6:01pm-9pm', '9:01pm-11:59pm'],
        datasets: [{
            data:[2, 40, 80, 90, 20, 45, 100, 110, 120],
            backgroundColor: gradient,
            barThickness: 80, // increase the thickness of the bars
            categorySpacing: 60, 
            label:'',
        }]
    },
    options: {
        scales: {
          x: {
            grid: {
              display: false
            }
          },
        },
        dataset: {
            label: false, // remove dataset label
          }
      }
})