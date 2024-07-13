const flip = document.getElementById('Switch');
flip.addEventListener('click', () => {
    window.location.href = '/customerview.html';
})
const flip2 = document.querySelector('.Switch2');
flip2.addEventListener('click', () => {
    window.location.href = '/customerview.html';
})

// three dots
// Dropdown toggle
const downD = document.querySelector('#dropdown2');
const toggleDropdown2 = () => {
  downD.classList.toggle('hidden');
}


// Image change
const image2 = document.getElementById('threed');

image2.addEventListener('click', ()=> {
  if(image2.src.match("DotsThreeVertical.png")) {
    image2.src = '/images/X (1).png';
  } else {
    image2.src = '/images/DotsThreeVertical.png';
  }
})

// Dropdown toggle
const down2 = document.querySelector('#dropdown');
const toggleDropdown = () => {
  down2.classList.toggle('hidden');
}


// Image change
const image = document.getElementById('ham');

image.addEventListener('click', ()=> {
  if(image.src.match("Menu")) {
    image.src = '/images/X (1).png';
  } else {
    image.src = '/images/Menu.png';
  }
})