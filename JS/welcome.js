const btn = document.getElementById('button');



// Toggle Password
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const eyeImage = togglePassword.querySelector('img');


togglePassword.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeImage.src = '/images/EyeClosed.png';
    } else {
        passwordInput.type = 'password';
        eyeImage.src = '/images/Eyes-Outline.png';
    }
});
 
let signIn = (e)=> {
    e.preventDefault();

let useremail = document.getElementById('email').value;
let password = document.getElementById('password').value;
const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;
const numberRegex = /[0-9]/;

let success = () => {
    if (useremail === "" || password === "") {
        alert('Please insert your details');
    } else if (!useremail.includes('@')) {
        alert('Incorrect format');
    } else if (password.length <= 8 || !uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !numberRegex.test(password)) {
        alert('Not a strong password');
    }else {
        window.location.href = '/step.html'
    }
}

success();

};


btn.addEventListener('click', signIn);

// to the forgot password page
const fbtn = document.getElementById('forgot');

fbtn.addEventListener("click", ()=> {
    let url = '/forgot.html';
    window.location.href = url;
});

