// Toggle Password
if(document.getElementById('password')){
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.innerHTML = '<i class="ph ph-eye"></i>';
        } else {
            passwordInput.type = 'password';
            togglePassword.innerHTML = '<i class="ph ph-eye-slash"></i>';
        }
    });
}

if(document.getElementById('login-account')){
    const btn = document.getElementById('login-account');
    let signIn = (e) => {
        e.preventDefault();
    
        let useremail = document.getElementById('email').value;
        let password = document.getElementById('password').value;
    
        let success = () => {
            if (useremail === "" || password === "") {
                alert('Please insert your details');
            } else if (!useremail.includes('@')) {
                alert('Incorrect email format');
            }
        }
        success();
    };
    btn.addEventListener('click', signIn);
}

if(document.getElementById('create-account')){
    const signup = document.getElementById('create-account');
    let signUp = (e) => {
        e.preventDefault();

        let username = document.getElementById('username').value;
        let useremail = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;
        let url = 'verify.html';


        let success = () => {
            if (username === "" || useremail === "" || password === "") {
                alert('Please insert your details');
            } else if (!useremail.includes('@')) {
                alert('Insert your Email');
            } else if (password.length <= 8 || !uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !numberRegex.test(password)) {
                alert('Not a strong password');
            }else {
                window.location.href = url;
            }
        }

        success();
    }

    signup.addEventListener('click', signUp);
}

if(document.getElementById('forgot-pass')){
    const btn = document.getElementById('forgot-pass');

    btn.addEventListener("click", (e)=> {
        e.preventDefault();

        let useremail = document.getElementById('email').value;

        let success = () => {
            if (useremail === "") {
                alert('Please insert your email');
            } else if (!useremail.includes('@')) {
                alert('Incorrect format');
            }else {
                window.location.href = 'verify.html'
            }
        }

        success();
    });
}

if(document.getElementById('final-submit')){
    const buttonNew = document.getElementById('final-submit');

    buttonNew.addEventListener('click', (e)=> {
        e.preventDefault();
        const newpass = document.getElementById('new1');
        const confirm = document.getElementById('new2');
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;

        const success = () => {
            const newvalue =newpass.value.trim();
            const convalue =confirm.value.trim();

            if(newvalue === "" || convalue === ""){
                alert('Please insert your details');
            }else if (convalue !== newvalue){
                confirm.style.border ='1px solid #d3a5a4'
                confirm.style.backgroundColor ='#ffe8e6'
                confirm.style.color = '#d57473'
                alert('Insert same password')
            }else if (newvalue.length <= 8 || !uppercaseRegex.test(newvalue) || !lowercaseRegex.test(newvalue) || !numberRegex.test(newvalue)) {
                alert('Not a strong password');
            }else if (convalue.length <= 8 || !uppercaseRegex.test(convalue) || !lowercaseRegex.test(convalue) || !numberRegex.test(convalue)) {
                alert('Not a strong password');
            }else {
                window.location.href = '/success.html';
            }
        }
        success();
    });
}