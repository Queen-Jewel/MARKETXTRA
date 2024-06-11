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
    if(cat.style.fontWeight = 'normal'){
    cat.style.fontWeight = 'bold';
    cat.style.color = '#00B800';
  }
  });
});

cat1.addEventListener('click', ()=> {
  cate.textContent = 'category 1'
});
cat2.addEventListener('click', ()=> {
  cate.textContent = 'category 2'
});
cat3.addEventListener('click', ()=> {
  cate.textContent = 'category 3'
});


 // Get the modal
 const modal = document.getElementById("myModal");

 // Get the button that opens the modal
 const btns = document.querySelectorAll(".trashButton");

 // Get the <span> element that closes the modal
 const span = document.getElementById("close");

 // When the user clicks the button, open the modal 
 btns.forEach(btn => {
 btn.addEventListener('click', ()=>{
     modal.classList.remove('hidden');
 });
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