// Move to offline page(order.html)
const button = document.getElementById('button');

button.addEventListener('click', () => {
    window.location.href = '/order.html'
})

const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('click', () => {
        window.location.href = '/order3.html'
    })
})

const unpaid = document.getElementById('unpaid')
unpaid.addEventListener('click', () => {
    if (unpaid.src.match("XCircle.png")) {
        window.location.href = '/order3.html'
    }
})