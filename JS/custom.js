const flip = document.getElementById('Switch');



flip.addEventListener('click', () => {
    window.location.href = '/ownerview.html';
})
const divs = document.querySelectorAll('.greenB');


divs.forEach(div => {
div.addEventListener('click', () => {
    if (div.style.border === '1px solid transparent') {
        div.style.border = ' 3px solid green';
      } else {
        div.style.border = '1px solid transparent';
      }
    });
});