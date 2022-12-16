
const registerUrl = 'https://636f9027f2ed5cb047e01947.mockapi.io/reg_mail'

let sub_btn = document.querySelector('#submit_btn');

let userObj;

sub_btn.addEventListener('click', () => {

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let mobileNo = document.getElementById('mobileNo').value;

    if (username == '' || email == '' || password == '' || mobileNo == '') {
        alert('Please enter all fields')
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




const RegisterNewUser = async (userObj) => {

    try {
        let reg_req = await fetch(registerUrl, {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json',
            },

        })
        // console.log(reg_req)
        if (reg_req.ok) {
            let data = await reg_req.json()
            console.log(data)
            alert("Registerd Sucessfully")
        }

        // console.log(data)
    }
    catch (error) {
        console.log('er', error)
    }

}




const CheckUserIfExists = async (username) => {
    
    try {
        let Check_res = await fetch(registerUrl, {
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
                    alert('User Already exists');
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
        alert('Error while fetching')
        console.log('error', error)
    }
}
