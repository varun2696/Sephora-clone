
// do not touch this *********
const login_Url = 'https://6398172cfe03352a94c47ae1.mockapi.io/login_user'


const registerUrl = 'https://636f9027f2ed5cb047e01947.mockapi.io/reg_mail'

        // **************



// this is for pop pup modal

    const LoginName = document.querySelector('#loginName');
    LoginName.addEventListener('click', showModal)

    function showModal() {
        document.querySelector('.loginform').classList.add('showLoginform');
    }

    function closeModal(){
        document.querySelector('.loginform').classList.remove('showLoginform');
    }
     
    let crossbtn = document.querySelector('#crossbtn');
    crossbtn.addEventListener('click', closeModal);


// ************************





const login_btn = document.getElementById('login_btn');
let LoginData;


// showUsername();

// const showName = document.querySelector('h2');

// let userName = sessionStorage.getItem('c4raUser') || "Login"
// showName.innerHTML = userName;

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
            
            console.log('LoginDATA',DATA)
            if(username == DATA[0].username && password == DATA[0].password){
                alert('login sucees');
                sessionStorage.setItem('c4raUser', username);

                let postData = DATA[0]
                // console.log('LogedDATA', postData)

                LoginData = {
                    Username: postData.username,
                    Password: postData.password
                }
                let loginUserName = LoginData.Username
                CheckUserIfExists(loginUserName)

                // window.location.reload();
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


// let signout = document.getElementById('signout');
// signout.addEventListener('click',  ()=>{

//     alert('You are signout from the site')
//     sessionStorage.removeItem('c4raUser');
//     window.location.reload();
// })


async function PostLoginData (LoginData){

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
            console.log('PostData', data)
        }

        // console.log(data)
    }
    catch (error) {
        console.log('er', error)
    }
}





const CheckUserIfExists = async (loginUserName) => {
    
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
                    console.log('User is Already exists in LoginUrl');
                    // window.location.href = './Homepage.html'
                }
                else {
                    PostLoginData (LoginData)
                    // window.location.href = './Homepage.html'
                }
            }
            else {
                PostLoginData (LoginData)
                // window.location.href = './Homepage.html'
            }

        }

    }
    catch (error) {
        alert('Error while fetching')
        console.log('error', error)
    }
}
