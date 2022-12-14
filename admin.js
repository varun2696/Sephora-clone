let loginButton = document.querySelector("#login_btn");

window.addEventListener("load", () => {
  loginButton.addEventListener("click", (e) => {
    e.target.parentNode.remove();
    document.querySelector("#Right").innerHTML="";
    document.querySelector("#Right").innerHTML=`
      <div class="wel">
        <h1> Login First ! </h1>
      </div>
    `
    setTimeout(() => {
      logindetails();
    }, 0);
  });
});

let leftdiv = document.querySelector("#Left");

function logindetails() {
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

head.addEventListener("click", () => {
  window.location.reload();
});

function click() {
  let subButton = document.querySelector("#submit_btn");

  let userNameValue = document.querySelector("#username");

  let userPassValue = document.querySelector("#password");

  subButton.addEventListener("click", (e) => {
    e.preventDefault();
    data();
  });

  function data() {
    if (userNameValue.value == "admin" && userPassValue.value == "C4RA") {
      WelcomeScreen()
      alert("Hello Admin !");
      document.querySelector("#submit_btn").parentNode.remove();
      setTimeout(() => {
        details();
        document.querySelector("#Right").innerHTML="";
        document.querySelector("#Right").innerHTML=`
          <div class="wel">
            <h1> Admin DashBoard ! </h1>
          </div>
        `
      }, 2000);
    } else {
      alert("Please Enter Correct Details !");
    }
  }
}

// After Login Successfully

function WelcomeScreen() {
  document.querySelector("#Right").innerHTML=`
    <div class="wel">
      <h1> Welcome in Admin Page ! </h1>
    </div>
  `  
}

function details() {
  leftdiv.innerHTML = `
      <div id="Container">
            <button id="pr_btn">Product details</button>
            <button id="ur_btn">User details</button>
      </div>
    `;
  ClickFunction();
}

function ClickFunction() {
  let productBtn = document.querySelector("#pr_btn");

  productBtn.addEventListener("click", (e) => {
    e.target.parentNode.remove()
   
    setTimeout(()=>{
        InsideProductBtn();
    },1000);
    document.querySelector("#Right").innerHTML="";
    document.querySelector("#Right").innerHTML=`
          <div class="wel">
            <h1> Product DashBoard ! </h1>
          </div>
    `
  });

  let UserBtn = document.querySelector("#ur_btn");

  UserBtn.addEventListener("click", (e) => {
    console.log("user");
    e.target.parentNode.remove()
  });
}

function InsideProductBtn() {
    leftdiv.innerHTML = `
      <div id="Container_1">
            <button id="Back"><</button>
            <button id="ft_btn">Fetch Products</button>
            <button id="ad_btn">Add Product</button>
            <button id="de_btn">Delete Product</button>
            
      </div>
    `;
    back();
    fetch_button();
    add_button();
}
function back(){
  let back_button = document.querySelector("#Back")
  back_button.addEventListener("click",()=>{
    details()
    document.querySelector("#Right").innerHTML="";
    document.querySelector("#Right").innerHTML=`
          <div class="wel">
            <h1> Admin DashBoard ! </h1>
          </div>
    `
  });
}
// After InsideProductBtn has been called

 function fetch_button() {
    let fetch_btn = document.querySelector("#ft_btn");

    fetch_btn.addEventListener("click", (e) =>{
        FetchProduct()
    });
 }

let Rightdiv = document.querySelector("#Right");


async function FetchProduct() {
    try {
        let res = await fetch("https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products",{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
            }
        });
        if(res.ok==true) {
            let data = await res.json();
            DisplayProduct(data);
        }
    } catch{
        console.log("Failed to fetch Product")
    }
}


function DisplayProduct(data){
  Rightdiv.innerHTML ="";
    Rightdiv.innerHTML =`
        <div id="Cards">
                ${data.map((el)=>{
                    return `<div Class="SmallCards">
                                <img src="${el.image}" alt="Error">
                                <p>${el.id}</p>
                                <p>${el.category}</p>
                                <p>${el.title}</p>
                                <p>Rs. ${el.price}</p>
                            </div>`  
                }).join(" ")} 
        </div> `
}

function add_button() {
  let add_btn = document.querySelector("#ad_btn");

  add_btn.addEventListener("click", (e) =>{
      Rightdiv.innerHTML="";
  });
}