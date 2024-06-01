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
    cate.textContent = 'Active';
});
  cat2.addEventListener('click', () => {
    cate.textContent = 'Pending';
});