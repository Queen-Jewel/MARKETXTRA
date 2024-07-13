// Dropdown toggle
const downC = document.querySelector('#dropdown');
const categoryDown = () => {
  downC.classList.toggle('hidden');
}


// Image change
const image = document.getElementById('image');

image.addEventListener('click', ()=> {
  if(image.src.match("CD")) {
    image.src = '/images/CU.png';
  } else {
    image.src = '/images/CD.png';
  }
})

// Next
const next = document.getElementById('next');

next.addEventListener('click', () => {
  window.location.href = '/step2.html';
})