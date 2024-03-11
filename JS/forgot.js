const btn = document.getElementById('button');
const login = document.getElementById('login');

login.addEventListener("click", ()=> {
    window.location.href = '/welcome.html';
})

btn.addEventListener("click", (e)=> {
    e.preventDefault();

    let useremail = document.getElementById('email').value;

    let success = ()=> {
        if (useremail === "") {
            alert('Please insert your email');
        } else if (!useremail.includes('@')) {
            alert('Incorrect format');
    }else {
        window.location.href = '/verify.html'
    }
}

success();
});