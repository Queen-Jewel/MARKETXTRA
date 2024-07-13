// page change
const flip = document.getElementById('Switch');

flip.addEventListener('click', () => {
    window.location.href = '/ownerview.html';
})
// Second switch
const flip2 = document.getElementById('Switch2');

flip2.addEventListener('click', () => {
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
  if(image.src.match("CD")) {
    image.src = '/images/CU.png';
  } else {
    image.src = '/images/CD.png';
  }
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

// Dropdown3 toggle
const down3 = document.querySelector('#dropdown3');
const toggleDropdown3 = () => {
  down3.classList.toggle('hidden');
}


// Image change
const image3 = document.getElementById('ham');

image3.addEventListener('click', ()=> {
  if(image3.src.match("Menu")) {
    image3.src = '/images/X (1).png';
  } else {
    image3.src = '/images/Menu.png';
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
  cate.textContent = 'Category 1'
});
cat2.addEventListener('click', ()=> {
  cate.textContent = 'Category 2'
});
cat3.addEventListener('click', ()=> {
  cate.textContent = 'Category 3'
});