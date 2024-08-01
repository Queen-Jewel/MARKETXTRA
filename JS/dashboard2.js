document.addEventListener('DOMContentLoaded', () => {
    let bar = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(bar, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'User growth',
                    backgroundColor: '#D45800',
                    data: [4000, 5500, 5700, 9000, 2500, 6500, 4500, 7500, 6250, 3000, 8000, 2500],
                },
                {
                    label: 'Transaction growth',
                    backgroundColor: '#333333',
                    data: [5000, 8500, 5000, 10000, 1500, 7500, 3500, 8200, 6000, 4000, 8500, 2000],
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        boxHeight: 10
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    stacked: false
                },
                y: {
                    beginAtZero: false,
                    stacked: false,
                    max: 10000,
                    ticks: {
                        stepSize: 2500,  // Set the step size to 2500
                        callback: function(value) {
                            // Display only the desired labels
                            if (value % 2500 === 0) {
                                return value;
                            }
                            return null;
                        }
                    }
                }
            }
        }
    });
});
