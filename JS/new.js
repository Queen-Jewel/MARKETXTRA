const button = document.getElementById('button');
const login = document.getElementById('login');


button.addEventListener('click', (e)=> {
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



login.addEventListener('click', () => {
    window.location.href = '/welcome.html'
});