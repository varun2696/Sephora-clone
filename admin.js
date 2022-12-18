let loginButton = document.querySelector("#login_btn");

window.addEventListener("load", () => {
  loginButton.addEventListener("click", (e) => {
    e.target.parentNode.remove();
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
      <div class="wel">
        <h1> Login First ! </h1>
      </div>
    `;
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
      console.log(document.getElementById);
      WelcomeScreen();
      alert("Hello Admin !");
      document.querySelector("#submit_btn").parentNode.remove();
      setTimeout(() => {
        details();
        document.querySelector("#Right").innerHTML = "";
        document.querySelector("#Right").innerHTML = `
          <div class="wel">
            <h1> Admin DashBoard ! </h1>
          </div>
        `;
      }, 2000);
    } else {
      alert("Please Enter Correct Details !");
    }
  }
}

// After Login Successfully

function WelcomeScreen() {
  document.querySelector("#Right").innerHTML = `
    <div class="wel">
      <h1> Welcome in Admin Page ! </h1>
    </div>
  `;
}

function details() {
  leftdiv.innerHTML = `
      <div id="Container">
            <h2 id="cat">Categories</h2>
            <button id="pr_btn">Product details</button>
            <button id="ur_btn">User details</button>
      </div>
    `;
  ClickFunction();
  ClickFunction_1();
}

function ClickFunction() {
  let productBtn = document.querySelector("#pr_btn");

  productBtn.addEventListener("click", (e) => {
    e.target.parentNode.remove();

    setTimeout(() => {
      InsideProductBtn();
    }, 0);
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
          <div class="wel">
            <h1> Product DashBoard ! </h1>
          </div>
    `;
  });

  let UserBtn = document.querySelector("#ur_btn");

  UserBtn.addEventListener("click", (e) => {
    console.log("user");
    e.target.parentNode.remove();
  });
}

function InsideProductBtn() {
  leftdiv.innerHTML = `
      <div id="Container_1">
            <button id="Back"><</button>
            <button id="ft_btn">Products</button>
            <button id="ad_btn">Add Product</button>
            <button id="de_btn">Delete Product</button>
            <button id="up_btn">Update Product(if existing)</button>
            
      </div>
    `;
  back();
  fetch_button();
  add_button();
  deleteProduct();
  update_Product();
}

function back() {
  let back_button = document.querySelector("#Back");
  back_button.addEventListener("click", () => {
    details();
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
          <div class="wel">
            <h1> Admin DashBoard ! </h1>
          </div>
    `;
  });
}

// After InsideProductBtn has been called

//  Fetch && Pagination

function fetch_button() {
  let fetch_btn = document.querySelector("#ft_btn");

  fetch_btn.addEventListener("click", (e) => {
    Rightdiv.style.background = "white";
    Rightdiv.innerHTML = "";

    Rightdiv.innerHTML = `
    <div id="loading" style=" background-color:white; height:6100px;" >
        <img src="./Spinner-5.gif" alt="error">
        <p>Please wait page is loading ...</p>
    </div>
  `;
    FetchProduct();
    Rightdiv.style.background = "White";
  });
}

let Rightdiv = document.querySelector("#Right");

async function FetchProduct() {
  try {
    let res = await fetch(
      "https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok == true) {
      let data = await res.json();
      DisplayProduct(data);
    }
  } catch {
    console.log("Failed to fetch Product");
  }
}

function DisplayProduct(data) {
  Rightdiv.innerHTML = "";
  Rightdiv.innerHTML = `
       <div id="but">
          <button id="pg_1">1</button>
          <button id="pg_2">2</button>
          <button id="pg_3">3</button>
          <button id="pg_4">4</button>
          <button id="pg_5">5</button>
       </div>
        <div id="Cards">
                ${data
                  .map((el) => {
                    return `<div Class="SmallCards">
                                <img src="${el.image}" alt="Error">
                                <p>${el.id}</p>
                                <p>${el.category}</p>
                                <p>${el.title}</p>
                                <p>Rs. ${el.price}</p>
                            </div>`;
                  })
                  .join(" ")} 
        </div> `;
  callBut();
}

function callBut() {
  document.getElementById("pg_1").addEventListener("click", (e) => {
    document.getElementById("but").nextElementSibling.innerHTML = "";
    document.getElementById("but").nextElementSibling.innerHTML = `
        <div id="loading" style="width: 410%;" >
            <img src="./Spinner-5.gif" alt="error">
            <p>Please wait page is loading ...</p>
        </div>
      `;
    fetch_2();
  });
  document.getElementById("pg_2").addEventListener("click", (e) => {
    document.getElementById("but").nextElementSibling.innerHTML = "";
    document.getElementById("but").nextElementSibling.innerHTML = `
       <div id="loading" style="width: 410%;" >
          <img src="./Spinner-5.gif" alt="error">
          <p>Please wait page is loading ...</p>
       </div>
      `;
    fetch_3();
  });
  document.getElementById("pg_3").addEventListener("click", (e) => {
    document.getElementById("but").nextElementSibling.innerHTML = "";
    document.getElementById("but").nextElementSibling.innerHTML = `
       <div id="loading" style="width: 410%;" >
          <img src="./Spinner-5.gif" alt="error">
          <p>Please wait page is loading ...</p>
       </div>
      `;
    fetch_4();
  });
  document.getElementById("pg_4").addEventListener("click", (e) => {
    document.getElementById("but").nextElementSibling.innerHTML = "";
    document.getElementById("but").nextElementSibling.innerHTML = `
       <div id="loading" style="width: 410%;" >
          <img src="./Spinner-5.gif" alt="error">
          <p>Please wait page is loading ...</p>
       </div>
      `;
    fetch_5();
  });
  document.getElementById("pg_5").addEventListener("click", (e) => {
    document.getElementById("but").nextElementSibling.innerHTML = "";
    document.getElementById("but").nextElementSibling.innerHTML = `
       <div id="loading" style="width: 410%;" >
          <img src="./Spinner-5.gif" alt="error">
          <p>Please wait page is loading ...</p>
       </div>
      `;
    fetch_6();
  });
}

// 1

function DisplayProduct_2(data) {
  document.getElementById("but").nextElementSibling.innerHTML = "";
  let dt = [];
  for (let i = 0; i < 20; i++) {
    dt.push(data[i]);
  }
  document.getElementById("but").nextElementSibling.innerHTML = `
        ${dt
          .map((el) => {
            return `<div Class="SmallCards">
                        <img src="${el.image}" alt="Error">
                        <p>${el.id}</p>
                        <p>${el.category}</p>
                        <p>${el.title}</p>
                        <p>Rs. ${el.price}</p>
                    </div>`;
          })
          .join(" ")} 
  `;
}

async function fetch_2() {
  try {
    let res = await fetch(
      "https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok == true) {
      let data = await res.json();
      DisplayProduct_2(data);
    }
  } catch {
    console.log("Failed to fetch Product");
  }
}

// 2

function DisplayProduct_3(data) {
  document.getElementById("but").nextElementSibling.innerHTML = "";
  let dt = [];
  for (let i = 20; i < 40; i++) {
    dt.push(data[i]);
  }
  document.getElementById("but").nextElementSibling.innerHTML = `
        ${dt
          .map((el) => {
            return `<div Class="SmallCards">
                        <img src="${el.image}" alt="Error">
                        <p>${el.id}</p>
                        <p>${el.category}</p>
                        <p>${el.title}</p>
                        <p>Rs. ${el.price}</p>
                    </div>`;
          })
          .join(" ")} 
  `;
}

async function fetch_3() {
  try {
    let res = await fetch(
      "https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok == true) {
      let data = await res.json();
      DisplayProduct_3(data);
    }
  } catch {
    console.log("Failed to fetch Product");
  }
}

// 3

function DisplayProduct_4(data) {
  document.getElementById("but").nextElementSibling.innerHTML = "";
  let dt = [];
  for (let i = 40; i < 60; i++) {
    dt.push(data[i]);
  }
  document.getElementById("but").nextElementSibling.innerHTML = `
        ${dt
          .map((el) => {
            return `<div Class="SmallCards">
                        <img src="${el.image}" alt="Error">
                        <p>${el.id}</p>
                        <p>${el.category}</p>
                        <p>${el.title}</p>
                        <p>Rs. ${el.price}</p>
                    </div>`;
          })
          .join(" ")} 
  `;
}

async function fetch_4() {
  try {
    let res = await fetch(
      "https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok == true) {
      let data = await res.json();
      DisplayProduct_4(data);
    }
  } catch {
    console.log("Failed to fetch Product");
  }
}

// 4

function DisplayProduct_5(data) {
  document.getElementById("but").nextElementSibling.innerHTML = "";
  let dt = [];
  for (let i = 60; i < 80; i++) {
    dt.push(data[i]);
  }
  document.getElementById("but").nextElementSibling.innerHTML = `
        ${dt
          .map((el) => {
            return `<div Class="SmallCards">
                        <img src="${el.image}" alt="Error">
                        <p>${el.id}</p>
                        <p>${el.category}</p>
                        <p>${el.title}</p>
                        <p>Rs. ${el.price}</p>
                    </div>`;
          })
          .join(" ")} 
  `;
}

async function fetch_5() {
  try {
    let res = await fetch(
      "https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok == true) {
      let data = await res.json();
      DisplayProduct_5(data);
    }
  } catch {
    console.log("Failed to fetch Product");
  }
}

// 5

function DisplayProduct_6(data) {
  document.getElementById("but").nextElementSibling.innerHTML = "";
  let dt = [];
  for (let i = 80; i < data.length; i++) {
    dt.push(data[i]);
  }
  document.getElementById("but").nextElementSibling.innerHTML = `
        ${dt
          .map((el) => {
            return `<div Class="SmallCards">
                        <img src="${el.image}" alt="Error">
                        <p>${el.id}</p>
                        <p>${el.category}</p>
                        <p>${el.title}</p>
                        <p>Rs. ${el.price}</p>
                    </div>`;
          })
          .join(" ")} 
  `;
}

async function fetch_6() {
  try {
    let res = await fetch(
      "https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok == true) {
      let data = await res.json();
      DisplayProduct_6(data);
    }
  } catch {
    console.log("Failed to fetch Product");
  }
}

// Add Product

function add_button() {
  let add_btn = document.querySelector("#ad_btn");

  add_btn.addEventListener("click", (e) => {
    Rightdiv.innerHTML = "";

    Rightdiv.innerHTML = `
         <div id="FormInput">
            <h2 id="inputHeader">Product Form</h2>
             <form>
                
                <input type="text" id="id" placeholder="Enter Product Id" required maxlength="2">
                
                <br>
                
                <input type="url" id="image" required="Mandatory Field" placeholder="Enter Product Url" >

                <br>
                
                <input type="text" id="category" required="Mandatory Field" placeholder="Enter Product Category" >

                <br>
                
                <input type="text" id="title" required="Mandatory Field" placeholder="Enter Product Title" >

                <br>

                <input type="number" id="price" required="Mandatory Field" placeholder="Enter Product Price" > 
                
                <br>

                <input type="submit">

             </form>
         </div>
         <div class="dataShow">
         </div> 
       `;
    InputTag();
  });
}
var arr = [];

function InputTag() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let productInput = document.querySelectorAll("input");
    let newProduct = {};
    for (let i = 0; i < productInput.length - 1; i++) {
      newProduct[productInput[i].id] = productInput[i].value;
    }
    AddPro(newProduct);
  });
}

async function AddPro(data) {
  try {
    let product = await fetch(
      "https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (product.ok) {
      let finalProduct = await product.json();
      alert("Product Added Successfully");
      setTimeout(() => {
        document.querySelector("#id").value = "";
        document.querySelector("#image").value = "";
        document.querySelector("#category").value = "";
        document.querySelector("#title").value = "";
        document.querySelector("#price").value = "";
      }, 1000);

      arr.push(finalProduct);
      console.log(arr);
      addD(arr);
    } else {
      alert("Product Not Added ! Please try again !");
    }
  } catch (error) {
    console.log("Fetching product failed");
  }
}

function addD(finalProduct) {
  document.querySelector(".dataShow").innerHTML = `
                     ${finalProduct
                       .map((el) => {
                         return `<div class="displayCard">
                                         <img src="${el.image}" alt="Error">
                                         <p>${el.id}</p>
                                         <p>${el.category}</p>
                                         <p>${el.title}</p>
                                         <p>Rs. ${el.price}</p>
                                 </div>`;
                       })
                       .join(" ")}
         `;
}

// Delete product

function deleteProduct() {
  document.querySelector("#de_btn").addEventListener("click", () => {
    Rightdiv.innerHTML = "";
    Rightdiv.innerHTML = `
              <div id="DeleteInput">
                  <form>
                      <input type="text" id="id" placeholder="Enter Product Id" required maxlength="2">

                      <br>

                      <input type="submit">
                  </form>   
              </div>
          `;
    InputTag_2();
  });
}

function InputTag_2() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let ids = document.querySelector("#id").value;
    InputTag_2_1(ids);
  });
}

async function InputTag_2_1(ids) {
  try {
    let product = await fetch(
      `https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products/${ids}`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (product.ok) {
      let finalProduct = await product.json();
      alert("Product Deleted Successfully");
      setTimeout(() => {
        document.querySelector("#id").value = "";
      }, 1000);
    } else {
      alert("Product Not Deleted ! Please try again !");
    }
  } catch (error) {
    console.log("Fetching product failed");
  }
}

// Update Product

function update_Product() {
  document.getElementById("up_btn").addEventListener("click", () => {
    Rightdiv.innerHTML = "";

    Rightdiv.innerHTML = `
         <div id="FormInput">
            <h2 id="inputHeader">Product Form</h2>
             <form>
                
                <input type="text" id="id" placeholder="Enter Product Id" required maxlength="2">
                
                <br>
                
                <input type="url" id="image" required="Mandatory Field" placeholder="Enter Product Url" >

                <br>
                
                <input type="text" id="category" required="Mandatory Field" placeholder="Enter Product Category" >

                <br>
                
                <input type="text" id="title" required="Mandatory Field" placeholder="Enter Product Title" >

                <br>

                <input type="number" id="price" required="Mandatory Field" placeholder="Enter Product Price" > 
                
                <br>

                <input type="submit">

             </form>
         </div>
         <div class="dataShow">
         </div> 
       `;
    up_DAte();
  });
}

function up_DAte() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let productInput = document.querySelectorAll("input");
    let newProduct = {};
    for (let i = 0; i < productInput.length - 1; i++) {
      newProduct[productInput[i].id] = productInput[i].value;
    }
    InputTag_3(newProduct);
  });
}

async function InputTag_3(data) {
  var arr1 = [];
  try {
    let ids = document.querySelector("#id").value;
    let product = await fetch(
      `https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products/${ids}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (product.ok) {
      let finalProduct = await product.json();
      alert("Product Updated Successfully");
      setTimeout(() => {
        document.querySelector("#id").value = "";
        document.querySelector("#image").value = "";
        document.querySelector("#category").value = "";
        document.querySelector("#title").value = "";
        document.querySelector("#price").value = "";
      }, 1000);
      arr1.push(finalProduct);
      addU(arr1);
    } else {
      alert("Product Not Updated ! Please try again !");
    }
  } catch (error) {
    console.log("Fetching product failed");
  }
}

function addU(finalProduct) {
  document.querySelector(".dataShow").innerHTML = `
                    ${finalProduct
                      .map((el) => {
                        return `<div class="displayCard">
                                        <img src="${el.image}" alt="Error">
                                        <p>${el.id}</p>
                                        <p>${el.category}</p>
                                        <p>${el.title}</p>
                                        <p>Rs. ${el.price}</p>
                                </div>`;
                      })
                      .join(" ")}
        `;
}

//User Detais

function ClickFunction_1() {
  let userBtn = document.querySelector("#ur_btn");

  userBtn.addEventListener("click", (e) => {
    e.target.parentNode.remove();

    setTimeout(() => {
      InsideUserBtn();
    }, 0);

    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
          <div class="wel">
            <h1> User DashBoard ! </h1>
          </div>
    `;
  });
}

function InsideUserBtn() {
  leftdiv.innerHTML = `
      <div id="Container_1">
            <button id="Back" style="height: 20%;"><</button>
            <button id="regis_btn">Register User</button>
            <button id="user_btn">Login User</button>        
      </div>
    `;
  back();
  WelcomeRegister();
  WelcomeLogin();
}

function WelcomeRegister() {
  document.getElementById("regis_btn").addEventListener("click", () => {
    Rightdiv.style.background="linear-gradient(to left, rgb(120 139 109), rgb(231, 170, 231))"
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
      <div id="loading" style=" background-color:white; height:6100px;" >
        <img src="./Spinner-5.gif" alt="error">
        <p>Please wait page is loading ...</p>
     </div>
    `;
    setTimeout(() => {
      document.querySelector("#Right").innerHTML = "";
      tableStructure();
    }, 1000);
  });
}

function tableStructure() {
  document.querySelector("#Right").innerHTML = `
  <h2 id="head_regDetails">Register User Details</h2>
        <table>
              <thead id="head">
                    <tr class="navRow">
                        <td class="details">Id</td>
                        <td class="details">Username</td>
                        <td class="details">Mobile</td>
                        <td class="details">Email Id</td>
                        <td class="details">Password</td>
                    </tr>
              </thead>
              <tbody id="mainContainer_tb">
                   
              </tbody>
          </table>
  `;
  Register();
}

async function Register() {
  try {
    let res = await fetch(
      "https://636f9027f2ed5cb047e01947.mockapi.io/reg_mail",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      let data = await res.json();
      tableStruc(data);
    }
  } catch (error) {
    alert("Problem in Fetching");
  }
}

function tableStruc(data) {
  tableStructu(data);
}

function tableStructu(data) {
  document.querySelector("#mainContainer_tb").innerHTML = `
        ${data
          .map((el) => {
            return `<tr class="navRow">
                      <td class="details">${el.id}</td>
                      <td class="details">${el.username}</td>
                      <td class="details">${el.mobileNo}</td>
                      <td class="details">${el.email}</td>
                      <td class="details">${el.password}</td>
                  </tr>`;
          })
          .join(" ")}
  </tr>
  `;
}

// Login

function WelcomeLogin() {(251, 243, 244)
  document.getElementById("user_btn").addEventListener("click", () => {
    Rightdiv.style.background="linear-gradient(to left, rgb(120 139 109), rgb(231, 170, 231))"
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
      <div id="loading" style=" background-color:white; height:6100px;" >
        <img src="./Spinner-5.gif" alt="error">
        <p>Please wait page is loading ...</p>
     </div>
    `;
    setTimeout(() => {
      document.querySelector("#Right").innerHTML = "";
      tableStructure_lo();
    }, 1000);
  });
}

function tableStructure_lo() {
  document.querySelector("#Right").innerHTML = `
  <h2 id="head_regDetails">Login User Details</h2>
        <table>
              <thead id="head">
                    <tr class="navRow">
                        <td class="details_1">Id</td>
                        <td class="details_1">Username</td>
                        <td class="details_1">Password</td>
                    </tr>
              </thead>
              <tbody id="mainContainer_tc">
                   
              </tbody>
          </table>
  `;
  login_1();
}

async function login_1() {
  try {
    let res = await fetch(
      "https://6398172cfe03352a94c47ae1.mockapi.io/login_user",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      let data = await res.json();
      tableStruc_1(data);
    }
  } catch (error) {
    alert("Problem in Fetching");
  }
}

function tableStruc_1(data) {
  tableStructu_1(data);
}

function tableStructu_1(data) {
  document.querySelector("#mainContainer_tc").innerHTML = `
        ${data
          .map((el) => {
            return `<tr class="navRow">
                      <td class="details_1">${el.id}</td>
                      <td class="details_1">${el.Username}</td>
                      <td class="details_1">${el.Password}</td>
                  </tr>`;
          })
          .join(" ")}
  </tr>
  `;
}
