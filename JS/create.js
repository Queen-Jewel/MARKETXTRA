// Modal pop up
const modalPop = document.getElementById('button');

 // Get the modal
 const modal = document.getElementById("myModal");

 modalPop.addEventListener('click', () => {
    modal.classList.remove('hidden');
 })

//  Remove modal
const categoryInput = document.getElementById('Category');
const addCategoryBtn = document.getElementById('addbutton');
const categoryContainer = document.getElementById('addCate');


const removeModal = ()=> {
    if(categoryInput.value === ""){
        categoryInput.style.border = "1px solid red";
        categoryInput.style.backgroundColor = "pink";
        categoryInput.placeholder = "Please enter a category name";
    } else {
        const categoryName = categoryInput.value;
        categoryInput.value = ""; // reset input field
        const newCategoryElement = document.createElement('p');
        newCategoryElement.textContent = categoryName;
        newCategoryElement.style.margin = "32px 0";
        categoryContainer.appendChild(newCategoryElement);
        modal.classList.add('hidden');
    }
}
addCategoryBtn.addEventListener('click', ()=> {
    removeModal();
})
 // When the user clicks anywhere outside of the modal, close it
 window.addEventListener('click', (event)=>{
    if (event.target == modal) {
        modal.classList.add('hidden');
    }
});