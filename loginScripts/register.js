

// ********* POpPup message **********

const Modal_div = document.querySelector('.PopPupMessage');
const AlertMessage = document.querySelector('#alertMessage');
const CloseAlert = document.querySelector('.modal-close');

CloseAlert.addEventListener('click', event => {
    Modal_div.style.display = 'none';
    AlertMessage.innerHTML = ''
})

//  *********** end *********



// ******** SHOW REGISTER MODAL  latest changes ***********

const registerbtn = document.querySelector('#registerbtn');

const RegisterModal_div = document.querySelector('.RegisterModalform');

const RegisterCloseModal = document.querySelector('#crossbtnforRegister');

RegisterCloseModal.addEventListener('click', event => {
    RegisterModal_div.style.display = 'none';
})

registerbtn.addEventListener('click', ()=>{
    RegisterModal_div.style.display = 'flex'
})

// ********* end ************




//  ******** CRUD operations start *******

const RegisterUrl = 'https://636f9027f2ed5cb047e01947.mockapi.io/reg_mail'

let sub_btn = document.querySelector('#submit_btn');

let userObj;

sub_btn.addEventListener('click', () => {

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let mobileNo = document.getElementById('mobileNo').value;

    if (username == '' || email == '' || password == '' || mobileNo == '') {
        // alert('Please enter all fields')
        Modal_div.style.display = 'flex';
        AlertMessage.innerHTML = 'Please enter all the fields !';
    }
    else {
        CheckUserIfExists(username)
        userObj = {
            username: username,
            email: email,
            password: password,
            mobileNo: mobileNo,
        };
    }

});




const CheckUserIfExists = async (username) => {

    try {
        let Check_res = await fetch(RegisterUrl, {
            method: 'GET'
        })
        // console.log(Check_res);
        if (Check_res.ok) {
            let data = await Check_res.json();
            // console.log('resDATA', data);
            let DATA = data.filter((el) => {
                if (el.username == username) {
                    // let Name = el.username
                    // console.log(el)
                    return el;
                }
            });

            // console.log('DATA', DATA)
            if (DATA.length !== 0) {
                if (username == DATA[0].username) {
                    // alert('User Already exists');
                    Modal_div.style.display = 'flex';
                    AlertMessage.innerHTML = 'User Already Exists !';
                }
                else {
                    RegisterNewUser(userObj)
                }
            }
            else {
                RegisterNewUser(userObj)
            }

        }

    }
    catch (error) {
        // alert('Error while fetching')
        console.log('error', error)
    }
}




const RegisterNewUser = async (userObj) => {

    try {
        let reg_req = await fetch(RegisterUrl, {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json',
            },

        })
        // console.log(reg_req)
        if (reg_req.ok) {
            let data = await reg_req.json()
            // console.log(data)
            // alert("Registerd Sucessfully")
            Modal_div.style.display = 'flex';
            AlertMessage.innerHTML = 'Registered Successfully !';
            setTimeout(function(){
                window.location.reload();
             }, 3000);

        }

        // console.log(data)
    }
    catch (error) {
        console.log('er', error)
    }

}


//   ***** CRUD operations end *****