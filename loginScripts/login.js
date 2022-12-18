
//  *********  do not touch this ***********

const login_Url = 'https://6398172cfe03352a94c47ae1.mockapi.io/login_user'

const registerUrl = 'https://636f9027f2ed5cb047e01947.mockapi.io/reg_mail'

// ************** end **********************




// this is for show userName in navbar and signout functionality

const userName = sessionStorage.getItem('c4raUser') || "LogIn";

const LoginName = document.querySelector('#loginName');

LoginName.innerHTML = ' ' + userName;

// LoginName.addEventListener('click', ()=>{
//     LModal_div.style.display = 'flex'
// })

const signout = document.getElementById('signout');
signout.addEventListener('click', () => {
    if (userName !== "LogIn") {
        // alert('You are signout from the site')
        modal_div.style.display = 'flex';
        alertMessage.innerHTML = 'You are Signout from the site';
        sessionStorage.removeItem('c4raUser');
        setTimeout(function () {
            window.location.reload();
        }, 3000);
    }
})

//  ********** END ********




// ********* POpPup message **********

const modal_div = document.querySelector('.PopPupMessage');
const alertMessage = document.querySelector('#alertMessage');
const closeAlert = document.querySelector('.modal-close');

closeAlert.addEventListener('click', event => {
    modal_div.style.display = 'none';
    alertMessage.innerHTML = '';
})

//  *********** end *********





// ******** SHOW LOGIN MODAL  latest changes ***********


const LoginModal_div = document.querySelector('.loginModal');
const CloseLoginModal = document.querySelector('#loginCrossbtn');


LoginName.addEventListener('click', ()=>{
    LoginModal_div.style.display = 'flex'
})


CloseLoginModal.addEventListener('click', event => {
    LoginModal_div.style.display = 'none';
})


// ********* end ************



// ***** CRUD operations Start *****

const login_btn = document.getElementById('login_btn');
let LoginData;

login_btn.addEventListener('click', () => {

    let username = document.getElementById('UserName').value;
    let password = document.getElementById('PassWord').value;
    if (username == '' || password == '') {
        // alert('Please enter the details')
        modal_div.style.display = 'flex';
        alertMessage.innerHTML = 'Please enter all the details';

    }
    else {
        LoginUser(username, password)
    }

})



const LoginUser = async (username, password) => {

    try {
        let login_res = await fetch(registerUrl, {
            method: 'GET'
        })
        // console.log(login_res);
        if (login_res.ok) {
            let data = await login_res.json();
            // console.log('data',data);
            let DATA = data.filter((el) => {
                if (el.username == username) {
                    // let Name = el.username
                    // console.log(el)
                    return el;
                }
            });

            // console.log('LoginDATA', DATA)
            if (username == DATA[0].username && password == DATA[0].password) {
                // alert('login sucees');
                modal_div.style.display = 'flex';
                alertMessage.innerHTML = 'Login Success !';
                sessionStorage.setItem('c4raUser', username);

                setTimeout(function () {
                    window.location.reload();
                }, 3000);

                let postData = DATA[0]
                // console.log('LogedDATA', postData)

                LoginData = {
                    Username: postData.username,
                    Password: postData.password
                }
                let loginUserName = LoginData.Username
                CheckUserIfAlreagyLogin(loginUserName)

            }
            else {
                // alert('Please enter valid username and password')
                modal_div.style.display = 'flex';
                alertMessage.innerHTML = 'Please enter valid username and password';
            }

        }

    }
    catch (error) {
        // alert('Something went wrong User not found')
        modal_div.style.display = 'flex';
        alertMessage.innerHTML = 'Please enter valid username and password';
        console.log('error', error)
    }
}





const CheckUserIfAlreagyLogin = async (loginUserName) => {

    try {
        let Check_res = await fetch(login_Url, {
            method: 'GET'
        })
        // console.log(Check_res);
        if (Check_res.ok) {
            let data = await Check_res.json();
            // console.log('resDATA', data);
            let DATA = data.filter((el) => {
                if (el.Username == loginUserName) {
                    return el;
                }
            });

            console.log('llllDATA', DATA)
            if (DATA.length !== 0) {
                if (loginUserName == DATA[0].Username) {
                    // console.log('User is Already exists in LoginUrl');
                    // window.location.reload();
                }
                else {
                    PostLoginData(LoginData)
                    // window.location.reload();
                }
            }
            else {
                PostLoginData(LoginData)
                // window.location.reload();
            }

        }

    }
    catch (error) {
        // alert('Error while fetching')
        console.log('error', error)
    }
}





async function PostLoginData(LoginData) {

    try {
        let reg_req = await fetch(login_Url, {
            method: 'POST',
            body: JSON.stringify(LoginData),
            headers: {
                'Content-Type': 'application/json',
            },

        })
        // console.log(reg_req)
        if (reg_req.ok) {
            let data = await reg_req.json()
            // console.log('PostData', data)
        }

        // console.log(data)
    }
    catch (error) {
        console.log('er', error)
    }
}


// ***** CRUD operations end *****



