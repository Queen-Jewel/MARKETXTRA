const signup = document.getElementById('button1');
const signup1 = document.getElementById('button2');

// Toggle Password
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const eyeImage = togglePassword.querySelector('img');

togglePassword.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeImage.src = './images/EyeClosed.png';
    } else {
        passwordInput.type = 'password';
        eyeImage.src = './images/Eyes-Outline.png';
    }
});

// signing up button
let signUp = (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let useremail = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    let url = '/verify.html';


    let success = () => {
        if (username === "" || useremail === "" || password === "") {
            alert('Please insert your details');
        } else if (!useremail.includes('@')) {
            alert('Insert your Email');
        } else if (password.length <= 8 || !uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !numberRegex.test(password)) {
            alert('Not a strong password');
        } else {
            window.location.href = url;
        }
    }

    success();
}

signup.addEventListener('click', signUp);
signup1.addEventListener('click', signUp);