
const registerUrl = 'https://636f9027f2ed5cb047e01947.mockapi.io/reg_mail'

let sub_btn = document.querySelector('#submit_btn');

sub_btn.addEventListener('click', ()=>{

    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let mobileNo = document.getElementById('mobileNo');

    let userObj = {
        username: username.value,
        email: email.value,
        password: password.value,
        mobileNo: mobileNo.value ,
        
    };

    // console.log(userObj)
    RegisterNewUser(userObj)

});

const RegisterNewUser = async (userObj)=>{

    try { 
        let reg_req = await fetch(registerUrl, {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type':'application/json',
            },

        })
        // console.log(reg_req)
        let data = await reg_req.json()
        console.log(data)
    } 
    catch (error) {
       console.log('er', error)
    }
    
}
