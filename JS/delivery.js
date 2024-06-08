// Get the button that open the modal
const btn = document.getElementById('btn');
// Get the modal
const modal = document.getElementById("myModal");

 // Get the <span> element that closes the modal
const span = document.getElementById("close");

 // When the user clicks the button, open the modal 
 btn.addEventListener('click', ()=>{
     modal.classList.remove('hidden');
 });

 // When the user clicks on <span> (x), close the modal
 span.addEventListener('click', ()=> {
     modal.classList.add('hidden');
 });

 // When the user clicks anywhere outside of the modal, close it
 window.addEventListener('click', (event)=>{
     if (event.target == modal) {
         modal.classList.add('hidden');
     }
 });


// Image change
const image = document.getElementById('image');

image.addEventListener('click', ()=> {
  if(image.src.match("icons8-chevron-down-30")) {
    image.src = '/images/icons8-chevron-up-30.png';
  } else {
    image.src = '/images/icons8-chevron-down-30.png';
  }
})

// Dropdown toggle
const downC = document.querySelector('#dropdown');
const toggleDropdown = () => {
  downC.classList.toggle('hidden');
}

// categories change color on click
const cats = document.querySelectorAll('.click');
const cate = document.getElementById('cate');
const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
const cat3 = document.getElementById('cat3');
const cat4 = document.getElementById('cat4');
const cat5 = document.getElementById('cat5');
cats.forEach(cat => {
    cat.addEventListener('click', ()=> {
      cat.classList.add('gradient-border');
    });
  });
  
  cat1.addEventListener('click', () => {
    cate.textContent = 'Lagos';
});

cat2.addEventListener('click', () => {
    cate.textContent = 'Abuja';
});

cat3.addEventListener('click', () => {
    cate.textContent = 'Enugu';
});
cat4.addEventListener('click', () => {
    cate.textContent = 'Abakaliki';
});
cat5.addEventListener('click', () => {
    cate.textContent = 'Akwa Ibom';
});

 