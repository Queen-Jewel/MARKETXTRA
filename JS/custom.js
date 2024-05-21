// page change
const flip = document.getElementById('Switch');

flip.addEventListener('click', () => {
    window.location.href = '/ownerview.html';
})
const divs = document.querySelectorAll('.greenB');

// product border change
divs.forEach(div => {
div.addEventListener('click', () => {
    if (div.style.border === '1px solid transparent') {
        div.style.border = ' 3px solid green';
      } else {
        div.style.border = '1px solid transparent';
      }
    });
});

// Dropdown toggle
const downC = document.querySelector('#dropdown');
const toggleDropdown = () => {
  downC.classList.toggle('hidden');
}


// Image change
const image = document.getElementById('image');

image.addEventListener('click', ()=> {
  if(image.src.match("DNC")) {
    image.src = '/images/UPC.svg';
  } else {
    image.src = '/images/DNC.svg';
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