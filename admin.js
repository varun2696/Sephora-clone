let loginButton = document.querySelector("#login_btn")

window.addEventListener("load",()=>{
    loginButton.addEventListener("click", (e)=>{
        e.target.parentNode.remove();
        setTimeout(()=>{
            logindetails();
        },0)
    })
})

let leftdiv = document.querySelector("#Left")

function logindetails(){
    leftdiv.innerHTML = `
    <div class="form">
        <label id="lab">Username</label>
        <br>
        <input id="username" type="text" placeholder="Enter Username" required="Fill Username">
        <label id="lab">Password</label>
        <br>
        <input id="password" type="password" placeholder="Enter Password" required="Fill Password" maxlength="8" minlength="5">
        <button id="submit_btn">Login</button>
        </div>
    `;  
    click();  
}

let head = document.querySelector("#heading");

head.addEventListener("click", () =>{
    window.location.reload();
})

function click(){
    
    let subButton = document.querySelector("#submit_btn");

    let userNameValue = document.querySelector("#username");

    let userPassValue = document.querySelector("#password")

    subButton.addEventListener("click", (e) =>{
        e.preventDefault();
        data();

    })

    function data(){
        if(userNameValue.value == "admin" && userPassValue.value == "C4RA"){
                alert("Hello Admin !");
                document.querySelector("#submit_btn").parentNode.remove();
        }else{  
            alert("Please Enter Correct Details !");
        }
    }

}






