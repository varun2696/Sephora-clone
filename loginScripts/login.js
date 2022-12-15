// const login_Url = 'https://6398172cfe03352a94c47ae1.mockapi.io/login_user'

// import  showUsername  from './Showname/showname.js';


const loginUrl = 'https://636f9027f2ed5cb047e01947.mockapi.io/reg_mail'

const login_btn = document.getElementById('login_btn');

// showUsername();

const showName = document.querySelector('h2');

let userName = sessionStorage.getItem('c4raUser') || "Login"
showName.innerHTML = userName;

login_btn.addEventListener('click', () => {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username == '' || password == ''){
        alert('Please enter the details')
    }
    else{
        LoginUser(username, password)
    }
   
})

const LoginUser = async (username, password) => {

    try {
        let login_res = await fetch(loginUrl, {
            method: 'GET'
        })
        // console.log(login_res);
        if (login_res.ok) {
            let data = await login_res.json();
            // console.log(data);
            let DATA = data.filter((el) => {
                if (el.username == username) {
                    // let Name = el.username
                    // console.log(el)
                    return el;
                }
            });
            
            // console.log(DATA)
            if(username == DATA[0].username && password == DATA[0].password){
                alert('login sucees');
                sessionStorage.setItem('c4raUser', username);
                window.location.reload();
                // window.location.href = './Homepage.html'
            } 
            else{
                alert('Please enter valid username and password')
            }

        }

    }
    catch (error) {
        alert('Something went wrong User not found')
        console.log('error', error)
    }
}


let signout = document.getElementById('signout');
signout.addEventListener('click',  ()=>{

    alert('You are signout from the site')
    sessionStorage.removeItem('c4raUser');
    window.location.reload();
})



var modal = document.getElementById('pop');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}