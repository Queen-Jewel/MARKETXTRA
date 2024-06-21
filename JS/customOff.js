// const { description } = require("commander");

// Move to Online page.
const online = document.getElementById('online');

 online.addEventListener('click', () => {
    window.location.href = '/customeronline.html'
 })


 // Dropdown toggle
const toggleDropdown = ()=> {
    const editButtons = document.querySelectorAll('.edit');
editButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.remove('hidden');
  });
});
}
toggleDropdown();

// close toggleDown
const closeds = document.querySelectorAll('.closed');

closeds.forEach(closed => {
    closed.addEventListener('click', ()=> {

        closed.parentElement.classList.add('hidden');
    })
})


// MODAL
// Modal functionality
const modal = document.getElementById('myModal');
const customerInputs = document.getElementsByClassName('customerInput');
const closeModal = document.getElementById('xcus');
const customerContainer = document.getElementById("customercontainer");
const addBtn = document.getElementById("addbutton");
const addCustomerBtn = document.getElementById("button");

addCustomerBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

const operationModal = () => {
    let allValid = true;

    Array.from(customerInputs).forEach(input => {
        if (input.value === "") {
            input.style.border = "1px solid red";
            input.style.backgroundColor = "pink";
            input.placeholder = "Please fill out this field";
            allValid = false;
        } else {
            input.style.border = "";
            input.style.backgroundColor = "";
            input.placeholder = "";
            input.style
        }
    });

    if (allValid) {
        const nameInput = document.getElementById('customerName');
        const emailInput = document.getElementById('customerEmail');
        const phoneInput = document.getElementById('customerPhone');
        const dateInput = document.getElementById('customerDate');

        if (!nameInput || !emailInput || !phoneInput || !dateInput) {
            console.error("One or more input elements not found");
            return;
        }

        const cusName = nameInput.value;
        const cusEmail = emailInput.value;
        const cusPhone = phoneInput.value;
        const cusDate = dateInput.value;

        const newCustomerDiv = document.createElement('div');
        newCustomerDiv.className = "w-[1078px] w-[66px] relative";

        newCustomerDiv.innerHTML = `
            <div class="w-[1038px] h-[66px] bg-white flex items-start justify-between rounded-lg px-10 py-5 my-5">
                <p>${cusName}</p>
                <p>${cusEmail}</p>
                <p>${cusPhone}</p>
                <p>${cusDate}</p>
                <img class="edit" src="images/Component 14.png" alt="Component">
                <div class="dropdown absolute w-[80px] h-[60px] bg-footer flex flex-col items-start justify-end rounded-lg pl-2 left-[970px] top-[20px] hidden">
                    <img src="images/X.png" class="closed w-3 h-3 ml-[58px] mt-2 flex items-center justify-end" alt="closed">
                    <p>Edit</p>
                    <p>Remove</p>
                </div>
            </div>
        `;

        customerContainer.appendChild(newCustomerDiv);
        modal.classList.add('hidden');

        // Re-initialize the event listeners for the new elements
        toggleDropdown();
        Array.from(newCustomerDiv.querySelectorAll('.closed')).forEach(closed => {
            closed.addEventListener('click', () => {
                closed.parentElement.classList.add('hidden');
            });
        });

        // Clear input fields
        Array.from(customerInputs).forEach(input => input.value = "");
    }
};

addBtn.addEventListener('click', () => {
    operationModal();
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.classList.add('hidden');
    }
});