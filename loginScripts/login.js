// const login_Url = 'https://6398172cfe03352a94c47ae1.mockapi.io/login_user'

const loginUrl = 'https://636f9027f2ed5cb047e01947.mockapi.io/reg_mail'

const login_btn = document.getElementById('login_btn');
const showName = document.querySelector('h2');

let userName = sessionStorage.getItem('c4raUser') || "Login"
showName.innerHTML = userName;

login_btn.addEventListener('click', () => {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    LoginUser(username, password)
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
                if (el.username == username && el.password == password) {
                    // let Name = el.username
                    console.log(el)
                    return el;


                }
            });
            console.log(DATA[0].username)
            let loginName = DATA[0].username || null;

            if (loginName) {
                alert('login sucees')
                sessionStorage.setItem('c4raUser', loginName);
                window.location.reload()
            }
            else {
                alert('Please enter valid username and password')
            }
        }

    }
    catch (error) {
        alert('something went wrong')
        console.log('error', error)
    }
}
