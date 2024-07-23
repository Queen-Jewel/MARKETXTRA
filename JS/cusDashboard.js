import users from '/JS/users.js';


const table = (data)=> {
    let tbody = document.getElementById('tbody');

    for (let i = 0; i < data.length; i++) {
        let row = `
         <tr key=${users[i].id} class="flex items-center justify-start">
            <td class="pl-3 flex items-center justify-start w-[249px] h-[72px]  py-6 border-y-[1px] border-grayTrue1">
                <span>
                    <input class="mr-2 w-4 h-4  border-grayTrue1 border-[0.3px] flex item-center justify-start rounded-2xl" type="checkbox" name="checkbox" id="check">
                </span>
                <img class="w-6 h-6 mr-2" src="images/J.png" alt="J">
                ${users[i].name}
            </td>
            <td class="pl-3 w-[304px] h-[72px] py-6 flex items-center justify-start border-y-[1px] border-grayTrue1">${users[i].email}</td>
        </tr>`

        tbody.innerHTML += row
    }
};
window.addEventListener('DOMContentLoaded', ()=> table(users));