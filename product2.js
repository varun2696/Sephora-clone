 // this is for show userName in navbar and signout functionality

const loginName = document.querySelector("#PUname");

const PrUserName = sessionStorage.getItem('c4raUser') || "LogIn";


loginName.innerHTML = ' ' + PrUserName;
 
 
 // Fetching api from the JSON Server :-

 function showdata(){
  document.querySelector(".container").innerHTML=`
  <div id="loading" style=" background-color:white; height:100px; width:100%"; >
  <img src="./Spinner-5.gif" alt="error">
  <p>Please wait page is loading ...</p>
   </div>
  `
}

 let cartproducts=JSON.parse(localStorage.getItem("cart"))||[];
 let bag=[];
// let url="https://fakestoreapi.com/products";
let url="https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products_2";
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      bag=data;
      showdata()
      setTimeout(()=>{
          displayCard(data);
         },1000)
    });

  // Sorting functionaly
    function handleSort(){
      let selected=document.querySelector("select").value;
      if(selected=="LTH"){
          bag.sort((a,b)=>a.price-b.price);
      }
         if(selected=="HTL"){
        bag.sort((a,b)=>b.price-a.price);
      }
      console.log(bag);
      displayCard(bag);
    }

 // Filter Functionality
    function filterByCategory() {
        let selected = document.querySelector("#filtered").value;
      console.log(selected)
      if(selected=="ALL"){
        displayCard(bag);
      
      }else{
        let filteredData = bag.filter(function (elem) {
          return elem.category == selected;
      });
      console.log(filteredData)
      displayCard(filteredData);
      }  
    }
// Search functionality
    function search(){
      let q=document.querySelector("#Search").value;
      console.log(q);
      let newData=bag.filter(function (elem){
        return elem.title.toLowerCase().includes(q.toLowerCase());
      });
      console.log(newData);
      displayCard(newData);
    }
 
    

function displayCard(data){
  document.querySelector(".container").innerHTML="";    
  data.forEach(elem => {
    let div=document.createElement("div");

    let imageProduct=document.createElement("img");
    imageProduct.setAttribute("src",elem.image)
    
    let Category=document.createElement("h3");
   Category.innerText= elem.category;

    let title=document.createElement("p");
    title.innerText=elem.title.substring(0,20);

    let Price=document.createElement("h4");
    Price.innerText="Rs. "+elem.price;
  
    let btn=document.createElement("button");
    btn.className = "show-modal"; // className added 
    btn.innerText= `Add to cart`
    
    btn.addEventListener("click", function () {
      cartproducts.push(elem);
      localStorage.setItem("cart",JSON.stringify(cartproducts));
      showfeed()
      
      addToCart(elem)
    });

    div.append(imageProduct,Category,title,Price,btn);

    document.querySelector(".container").append(div);
      });
    }


        
// feedback functionality - day-3

const section = document.querySelector("section"),
showBtn = document.querySelector(".show-modal"),
overlay = document.querySelector(".overlay"),
closeBtn = document.querySelector(".close-btn");
function addtoBag(){

}
console.log(showBtn)
showBtn.addEventListener("click", showfeed );

function showfeed(){
section.classList.add("active");
}

overlay.addEventListener("click", addedtoBag);
function addedtoBag(){
section.classList.remove("active");
// window.location.href="cart.html";
}

closeBtn.addEventListener("click", cancel);

function cancel(){
  section.classList.remove("active");
  // window.location.href="cart.html";
}


// drop down functionalities
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownBrand() {
  document.getElementById("Brand").classList.toggle("show");
}
function dropdownGender() {
  document.getElementById("Gender").classList.toggle("show");
}
 
///add to cart functionality
function addToCart(item){
  let larr = JSON.parse(localStorage.getItem("userdata"))||[];
  
}
  //***************************** */


//local storage usage for cart page

function addToCart(item){
  let larr = JSON.parse(localStorage.getItem("userdata"));
  
  
  //***************************** */
  console.log(item)
  item["count"]=1;
  larr.cartItems.push(item)
  
  console.log(JSON.stringify(larr,null,2))

 //***************************** */

  localStorage.setItem("userdata",JSON.stringify(larr))
  
}