// The four modal functionality

// Customer and Date of Transaction modal
const customerDiv = document.getElementById('cust');
const productDiv = document.getElementById('prod');


const customerInput = document.getElementById('customer');
const productInput = document.getElementById('product');
const unitInput = document.getElementById('unit');


const dotModal = document.getElementById('dotModal');
const unitModal = document.getElementById('unitModal');
const cusModal = document.getElementById('cusModal');
const proModal = document.getElementById('proModal');


const cusImg = document.getElementById('cus');
const proImg = document.getElementById('pro');
const downImg = document.getElementById('down');




// Open cusModal
    customerDiv.addEventListener('click', ()=> {
        cusModal.classList.remove('hidden');
    });
    cusImg.addEventListener('click', ()=> {
        cusModal.classList.remove('hidden');
    });
    customerInput.addEventListener('click', ()=> {
        cusModal.classList.remove('hidden');
    });


const operationCm = ()=> {
    const custNames = document.querySelectorAll('.custName');
    const nameInputs = document.querySelectorAll('.nameInput');

    custNames.forEach(custName => {
        custName.addEventListener('click', ()=> {
            cusModal.classList.add('hidden');
            nameInputs.forEach(nameInput => {
                if(nameInput){
                    customerInput.innerText = nameInput.textContent;
                }else {
                    console.error("Customer input element not found");
                }
            })
        })
    })
}
operationCm();


// from dotModal
const addCustomerBtn = document.getElementById("button");
const customerInputs = document.getElementsByClassName('customerInput');
const customerContainer = document.getElementById("customercontainer");
const addBtn = document.getElementById("addbutton");

addCustomerBtn.addEventListener('click', () => {
    dotModal.classList.remove('hidden');
    cusModal.classList.add('hidden');
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
        newCustomerDiv.className = "w-[821px] w-[66px] relative";

        newCustomerDiv.innerHTML = `
            <div class="custName w-[821px] h-[66px] bg-white flex items-start justify-between rounded-lg px-10 py-5 my-5">
                <p class="nameInput">${cusName}</p>
                <p>${cusEmail}</p>
                <p>${cusPhone}</p>
                <p>${cusDate}</p>
            </div>
        `;

        customerContainer.appendChild(newCustomerDiv);
        dotModal.classList.add('hidden');

        // Clear input fields
        Array.from(customerInputs).forEach(input => input.value = "");
    }
};

addBtn.addEventListener('click', () => {
    operationModal();
    cusModal.classList.remove('hidden');
});
// Everything about cusModal and dotModal ends here


// Open proModal
productDiv.addEventListener('click', ()=> {
    proModal.classList.remove('hidden');
});
proImg.addEventListener('click', ()=> {
    proModal.classList.remove('hidden');
});
productInput.addEventListener('click', ()=> {
    proModal.classList.remove('hidden');
});

const addCustomerBtn2 = document.getElementById("button2");
const customerInputs2 = document.getElementsByClassName('customerInput2');
const customerContainer2 = document.getElementById("customercontainer2");
const addBtn2 = document.getElementById("addbutton2");

addCustomerBtn2.addEventListener('click', () => {
    unitModal.classList.remove('hidden');
    proModal.classList.add('hidden');
});


// Everything about proModal and unitModal ends here


// close all modals
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target == dotModal) {
        dotModal.classList.add('hidden');
    }else if (event.target == unitModal) {
        unitModal.classList.add('hidden');
    }else if (event.target == cusModal) {
        cusModal.classList.add('hidden');
    }else if (event.target == proModal) {
        proModal.classList.add('hidden');
    }
});



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
let cate = document.getElementById('cate');
const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
  
  cat1.addEventListener('click', () => {
    cate.innerText = cat1.textContent
});

  cat2.addEventListener('click', () => {
    cate.innerText = cat1.textContent
});