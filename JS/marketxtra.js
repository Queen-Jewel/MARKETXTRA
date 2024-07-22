document.addEventListener('DOMContentLoaded', () => {
    // click here to add image function
    if(document.getElementById('imageContainer')){
        const imageContainer = document.getElementById('imageContainer');
        const imageInput = document.getElementById('imageInput');
        const ImageLabel = document.getElementById('hide-image-label');

        imageContainer.addEventListener('click', function(e) {
            imageInput.click();
        });
        imageInput.addEventListener('change', function(e) {
            ImageLabel.style.display = "none";
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    imageContainer.style.backgroundImage = `url(${event.target.result})`;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // sizes checkboxes control in addp1.html
    if(document.querySelectorAll('.checkbox-size')){
        const checkboxes = document.querySelectorAll('.checkbox-size');

        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    console.log('Selected size:', this.value);
                } else {
                }
            });
        });
    }

    // dashboard switch control (IMPLEMENTING DRY method on all 7 dashboards to one)
    let barChartInstance;
    let lineChartInstance;
    let doughnutChartInstance;
    function switchChartForDashboard(chart_type){
        // Bar Chart
        function loadBarChartOnly(labels,data){
            if (barChartInstance) {
                barChartInstance.destroy();
            }
            if(document.getElementById('barchart')){
                const bar = document.getElementById('barchart').getContext('2d');
                const screenWidth = window.innerWidth;
                var barThickness;
                if (screenWidth < 600) {
                    barThickness = 15
                }else if (screenWidth < 960) {
                    barThickness = 40
                }else{
                    barThickness = 60
                }
                // Define gradient fill (vertical from top to bottom)
                const gradient = bar.createLinearGradient(0, 0, 10, 400);
                gradient.addColorStop(0, 'rgba(0, 128, 0, 1)');
                gradient.addColorStop(1, 'rgba(0, 184, 0, 1)');
                
                barChartInstance = new Chart(bar, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            backgroundColor: gradient,
                            barThickness: barThickness,
                            categorySpacing: 60,
                            label: '',
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                }
                            },
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    boxWidth: 0
                                }
                            }
                        }
                    }
                });
                
            }
        }

        function loadLineChartOnly(line_labels,line_data){

            if (lineChartInstance) {
                lineChartInstance.destroy();
            }
            if(document.getElementById('lineChart')){
                let ctx = document.getElementById('lineChart').getContext('2d');

                // Define gradient fill (vertical from top to bottom)
                var gradient = ctx.createLinearGradient(0, 0, 10, 400);
                gradient.addColorStop(0, 'rgba(0, 128, 0, 1)');
                gradient.addColorStop(1, 'rgba(0, 184, 0, 1)');
            
                lineChartInstance = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: line_labels,
                        datasets: [{
                            label: '',
                            data: line_data,
                            backgroundColor: gradient,
                            borderColor: 'rgba(0, 128, 0, 1)',
                            tension: 0.4,
                            pointRadius: 0,
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                },
                            }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    boxWidth: 0
                                }
                            }
                        }
                    }
                });
            }
        }

        function loadDoughnutChartOnly(doughLabel,dataDoughnut){
            if (doughnutChartInstance) {
                doughnutChartInstance.destroy();
            }
            if(document.getElementById('lineChart')){
                // Doughnut Chart
                const doughnut = document.getElementById('doughnut').getContext('2d');
                
                var gradient = doughnut.createLinearGradient(0, 0, 10, 400);
                gradient.addColorStop(0, 'rgba(0, 128, 0, 1)');
                gradient.addColorStop(1, 'rgba(0, 184, 0, 1)');
                doughnutChartInstance = new Chart(doughnut, {
                    type: 'doughnut',
                    data: {
                        labels: doughLabel,
                        datasets: [{
                            data: dataDoughnut,
                            backgroundColor: [gradient, '#D45800', '#31D0AA'],
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
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
            }
        }

        if(chart_type == "daily"){
            var data_bar_label_daily = ['12am-3am', '3;01am-6am', '6:01am-9am', '9:01am-12pm', '12:01pm-3pm', '3:01pm-6pm', '6:01pm-9pm', '9:01pm-11:59pm'];
            var data_bar_daily = [2, 40, 80, 90, 20, 45, 100, 110, 120];
            loadBarChartOnly(data_bar_label_daily,data_bar_daily);

            var line_labels = ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm', '11:59am'];
            var line_data = [0, 0, 0, 50, 120, 70, 50, 150, 100, 200, 250];
            loadLineChartOnly(line_labels,line_data);

            var doughLabel = ['Plain T', 'Branded T', 'Customized T'];
            var dataDoughnut = [5, 10, 85];
            loadDoughnutChartOnly(doughLabel, dataDoughnut);
        }else if(chart_type == "weekly"){
            var data_bar_label_daily = ['Sun', 'Mon','Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
            var data_bar_daily = [160, 80, 140, 40, 159, 60, 200, 240];
            loadBarChartOnly(data_bar_label_daily,data_bar_daily);
            
            var line_labels = ['Sun', 'Mon','Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
            var line_data = [0, 200, 100, 300, 100, 400, 200, 500];
            loadLineChartOnly(line_labels,line_data);

            var doughLabel = ['Plain T', 'Branded T', 'Customized T'];
            var dataDoughnut = [15, 50, 35];
            loadDoughnutChartOnly(doughLabel, dataDoughnut);
        }else if(chart_type == "monthly"){
            var data_bar_label_daily = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var data_bar_daily = [400, 610, 550, 700, 800, 600, 710, 400, 370, 780, 700, 900, 1000];
            loadBarChartOnly(data_bar_label_daily,data_bar_daily);

            var line_labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var line_data = [400, 610, 550, 700, 800, 600, 710, 400, 370, 780, 700, 900, 1000];
            loadLineChartOnly(line_labels,line_data);

            var doughLabel = ['Plain T', 'Branded T', 'Customized T'];
            var dataDoughnut = [25, 40, 35];
            loadDoughnutChartOnly(doughLabel, dataDoughnut);
        }else{
            alert('invalid chart category');
        }
    }

    $('.bars-generate').click(function(){
        var bar_type = $(this).attr('data-chart');
        switchChartForDashboard(bar_type.trim());
        $('#cate').text(bar_type);
        toggleDropdown();
    });

    // load default charts
    switchChartForDashboard("daily");
});

// Dropdown toggle
const iconCtrl = document.getElementById('icon-ctrl');
const downC = document.querySelector('#dropdown');
let iconMoveCtrl = 1;
const toggleDropdown = () => {
    downC.classList.toggle('hidden');
    if(iconMoveCtrl == 1){
        iconCtrl.classList.remove('ph-caret-down');
        iconCtrl.classList.add('ph-caret-up');
        iconMoveCtrl = 0;
    }else{
        iconCtrl.classList.remove('ph-caret-up');
        iconCtrl.classList.add('ph-caret-down');
        iconMoveCtrl = 1;
    }
}

if(document.getElementById("dropdown-active-select")){
    const dropdownSelect = document.getElementById("dropdown-select");
    const dropActive = document.getElementById("dropdown-active-select");
    
    dropdownSelect.addEventListener('click', () => {
        dropActive.classList.toggle('hidden');
    });
}

if(document.getElementById('sidebar-ctrl')){    
    const sidebar = document.getElementById('sidebar-ctrl');
    const theSidebar = document.getElementById('side-navbar');
    const closeSidebar = document.getElementById('close-sidebar');

    sidebar.addEventListener('click', () => {
        theSidebar.classList.toggle('xs:hidden');
        theSidebar.classList.toggle('sm:hidden');
    });
    closeSidebar.addEventListener('click', () => {
        theSidebar.classList.toggle('xs:hidden');
        theSidebar.classList.toggle('sm:hidden');
    });
}

// step forms script
let currentForm = 1;
const totalForms = 3;

function showForm(formNumber) {
    $('[data-form]').addClass('hidden').removeClass('flex'); // Hide all forms
    $(`[data-form="form-${formNumber}"]`).removeClass('hidden').addClass('flex'); // Show current form

    $('#prev_form').toggleClass('hidden', formNumber === 1);
    $('#next_form').toggleClass('hidden', formNumber === totalForms);
    $('#submit_button').toggleClass('hidden', formNumber !== totalForms);
    $('#step-indicator').text(`Step ${formNumber} of ${totalForms}`);

    for (let i = 1; i <= totalForms; i++) {
        if (i <= formNumber) {
            $(`#form-${i}`).removeClass('bg-stepgray').addClass('bg-gradient-to-b from-GreenT to-GreenL');
        } else {
            $(`#form-${i}`).removeClass('bg-gradient-to-b from-GreenT to-GreenL').addClass('bg-stepgray');
        }
    }
}

$('#next_form').click(function() {
    if (currentForm < totalForms) {
        currentForm++;
        showForm(currentForm);
    }
});

$('#prev_form').click(function() {
    if (currentForm > 1) {
        currentForm--;
        showForm(currentForm);
    }
});

showForm(currentForm);

// tab control script
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        tabs.forEach(t => t.classList.remove("active", "text-green-600", "border-green-600"));
        tab.classList.add("active", "text-green-600", "border-green-600");

        tabContents.forEach(content => content.classList.add("hidden"));
        const target = document.querySelector(tab.dataset.tabTarget);
        target.classList.remove("hidden");
    });
});

// modals functionality
function openModal(modal) {
    $(modal).removeClass('hidden');
}
function closeModal(modal) {
    $(modal).addClass('hidden');
}
$('.btn-modal').on('click', function(e) {
    e.preventDefault();
    var targetModal = $(this).data('target');
    openModal(targetModal);
});
$('.custom-modal').on('click', '.close-modal', function() {
    var modal = $(this).closest('.custom-modal');
    closeModal(modal);
});
$(window).on('click', function(event) {
    $('.custom-modal').each(function() {
        if ($(event.target).is($(this))) {
            closeModal(this);
        }
    });
});

// dropdown by dots
if(document.querySelectorAll('.other-edits')){
    const editButtons = document.querySelectorAll('.other-edits');
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.nextElementSibling.classList.remove('hidden');
        });
    });

    $('.close-edits').click(function (){
        $('.action-box').addClass('hidden');
    })
}

// go back function
$('.go-back').click(function(){
    window.history.back();
})
