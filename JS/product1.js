// Move to add new product page
const addButton = document.getElementById('button');

addButton.addEventListener('click', ()=> {
  window.location.href = "/addp1.html";
})
// const edit = document.querySelectorAll('.button1');

// edit.addEventListener('click', ()=> {
//   window.location.href = "editptoduct.html";
// })





// Dropdown toggle
const dropdownContainer = document.querySelector('#dropdown');
const toggleDropdown = () => {
  dropdownContainer.classList.toggle('hidden');
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
    cate.textContent = 'category 1';
    cat1.classList.add('gradient-border');
    cat2.classList.remove('gradient-border');
    cat3.classList.remove('gradient-border');
});

cat2.addEventListener('click', () => {
    cate.textContent = 'category 2';
    cat1.classList.remove('gradient-border');
    cat2.classList.add('gradient-border');
    cat3.classList.remove('gradient-border');
});

cat3.addEventListener('click', () => {
    cate.textContent = 'category 3';
    cat1.classList.remove('gradient-border');
    cat2.classList.remove('gradient-border');
    cat3.classList.add('gradient-border');
});

  // Get the modal
  const modal = document.getElementById("myModal");

  // Get the button that opens the modal
  const btn = document.getElementById("trashButton");

  // Get the <span> element that closes the modal
  const closed = document.getElementById("close");

  // When the user clicks the button, open the modal 
  btn.addEventListener('click', ()=>{
      modal.classList.remove('hidden');
  });

  // When the user clicks on <span> (x), close the modal
  closed.addEventListener('click', ()=> {
      modal.classList.add('hidden');
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', (event)=>{
      if (event.target == modal) {
          modal.classList.add('hidden');
      }
  });