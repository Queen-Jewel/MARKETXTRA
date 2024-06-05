// Get the modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("btn");

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