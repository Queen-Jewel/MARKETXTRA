const mark = document.getElementById('mark');
const paid = document.getElementById('paid');

mark.addEventListener('click', ()=> {
    paid.innerText = "Paid";
});