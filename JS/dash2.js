document.addEventListener('DOMContentLoaded',()=> {
    const ctx = document.getElementById('lineChart').getContext('2d');
    
    // Define gradient fill (vertical from top to bottom)
    var gradient = ctx.createLinearGradient(0, 0, 10, 400);
    gradient.addColorStop(0, 'rgba(0, 128, 0, 1)');
    gradient.addColorStop(1, 'rgba(0, 184, 0, 1)');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets:[{
                label:'',
                data:[400, 610, 550, 700, 800, 600, 710 , 400, 370, 780, 700, 900, 1000],
                backgroundColor: gradient,
                borderColor: 'rgba(0, 128, 0, 1)',
                tension:0.4,
                pointRadius: 0,
            }]
        },
        options: {
            scales: {
              x: {
                grid: {
                  display: false
                },
                
              }},
              plugins:{
                legend:{
                  labels:{
                    boxWidth:0
                  }
                }
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
                },
            },
            cutout: 70,
            }
        })
    });
    
    // Bar Chart
    
    const bar = document.getElementById('barchart').getContext('2d');
    // Define gradient fill (vertical from top to bottom)
    const gradient = bar.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(0, 128, 0, 1)');
    gradient.addColorStop(1, 'rgba(0, 184, 0, 1)');
    
    new Chart(bar, {
        type:'bar',
        data: {
            labels: ['Jan', 'Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                data:[150, 90, 200, 140, 30, 210, 90, 120, 50, 200, 75, 250, 300],
                backgroundColor: gradient,
                barThickness: 40, // increase the thickness of the bars
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
            plugins:{
              legend:{
                labels:{
                  boxWidth:0
                }
              }
            }
          }
    });
    
    // Dropdown toggle
    const downC = document.querySelector('#dropdown');
    const toggleDropdown = () => {
      downC.classList.toggle('hidden');
    }
    
    // Image change
    const image = document.getElementById('image');
    
    image.addEventListener('click', ()=> {
      if(image.src.match("icons8-chevron-down-30")) {
        image.src = '/images/icons8-chevron-up-30.png';
      } else {
        image.src = '/images/icons8-chevron-down-30.png';
      }
    })
    
    // categories change color on click
    const cats = document.querySelectorAll('.click');
    const cate = document.getElementById('cate');
    const cat1 = document.getElementById('cat1');
    const cat2 = document.getElementById('cat2');
    const cat3 = document.getElementById('cat3');
    cats.forEach(cat => {
        cat.addEventListener('click', ()=> {
          cat.classList.add('gradient-border');
        });
      });
      
      cat1.addEventListener('click', () => {
        cate.textContent = 'Daily';
        cat1.classList.add('gradient-border');
        cat2.classList.remove('gradient-border');
        cat3.classList.remove('gradient-border');
        window.location.href = '/dash.html';
    });
    
    cat2.addEventListener('click', () => {
        cate.textContent = 'Weekly';
        cat1.classList.remove('gradient-border');
        cat2.classList.add('gradient-border');
        cat3.classList.remove('gradient-border');
        window.location.href = '/dash3.html';
    });
    
    cat3.addEventListener('click', () => {
        cate.textContent = 'Monthly';
        cat1.classList.remove('gradient-border');
        cat2.classList.remove('gradient-border');
        cat3.classList.add('gradient-border');
    });