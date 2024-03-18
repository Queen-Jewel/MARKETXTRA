const button = document.getElementById('btn');
const BackWelcome = document.getElementById('back');


button.addEventListener('click', ()=> {
    const Enter = document.getElementById('Enter').value;
    const numberRegex = /[0-9]/;
    

    let verify = ()=> {
        if (!numberRegex.test(Enter)) {
            alert('Insert Code')
        }else if (Enter.length < 6){
            alert('Insert Code')
        }else if(Enter.length > 6) {
            alert('Incorrect Code')
        }else {
            window.location.href = '/newpass.html'
        }
    }
    verify();
})

BackWelcome.addEventListener('click', ()=> {
    window.location.href = '/welcome.html'
})