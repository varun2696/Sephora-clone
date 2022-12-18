//collapsible starts here
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//collapsible ends here


let localUserData = JSON.parse(localStorage.getItem("userdata"));
let id = localStorage.getItem("userId")
let cartItemDiv = document.querySelector("#shippingCart")

let overView  = document.querySelector("#overview");

//***************** */

renderCardItems(localUserData)

//***************** */


//*********functions */


function renderCardItems(json){
  let arr  = json.cartItems;
  
 // cartItemDiv.innerHTML= null;

 
 // cartItemDiv.innerHTML =`
 //  ${
 //     arr.map((item)=>{
 //        let id = item.id;
 //        let name = item.title;
 //        let category = item.category;
 //        let count =item.count;
 //        let price = item.price *count;
 //        let image = item.image;
 //        let discount = item.discount;

 //        //rating part starts here
 //        let sumRating = 0;
 //        item["rating"].forEach((item1)=>{sumRating+=item1})
 //        let avgRating = sumRating/item["rating"].length;
 //        //rating part starts here
    
 //        return cartDiv (id,name,category,count,price,image,0,discount)

 //     }).join("")
 //  }
 // `
//overview part
overView.innerHTML=null;

let subTotal = 0;
let discount = 0;
arr.forEach((item)=>{
 subTotal+=(item.price*item.count);
 discount+=item.discount;
})
let finalBeforeGST;
if(subTotal!=0){ finalBeforeGST = subTotal-discount;}
else{finalBeforeGST=subTotal}
let GST  =Math.ceil(subTotal/11) ;
let finalPrice = finalBeforeGST+GST;
let promocodeapplied = localStorage.getItem("promoCodeApplied");

localStorage.setItem("finalPrice",finalPrice);
let deliveryCharges;
let cashOnDelivery =localStorage.getItem("cashOnDelivery")||false;
if(cashOnDelivery){
deliveryCharges = (arr.length*10)+50+40;
}
if(subTotal>=5000){deliveryCharges=0}
else {deliveryCharges = (arr.length*10)+50;}
if(subTotal==0){discount=0;deliveryCharges=0}
overView.innerHTML=`
${getOverViewCard(subTotal,GST,finalPrice,discount,deliveryCharges  )}
`

 
}










function getOverViewCard(subTotal,GST,final,discount ,deliveryCharges ){
  return `
  
  <h1>OVERVIEW</h1>
 
      <div><h3>subtotal</h3><h3>&#8377; ${subTotal}</h3></div>
      <div><h3>Discount</h2><h3>&#8377; ${discount}</h3></div>
      <div><h3>GST</h2><h3>&#8377; ${GST}</h3></div>
      <div><h3>Delivery Charges</h3><h3>&#8377; ${deliveryCharges}</h2></div>

  <hr>
  <div><h2>Final Price</h2><h2>&#8377; ${final}</h2></div>
  
`
}

///form submission





function clearCart(){
  let larr = JSON.parse(localStorage.getItem("userdata"));
  
  
  //***************************** */
  let arr =larr.cartItems;
  localStorage.setItem("orders",JSON.stringify(arr))
  larr.orders =[...arr]
  larr.cartItems=[]
  console.log(JSON.stringify(larr,null,2))

 //***************************** */

  localStorage.setItem("userdata",JSON.stringify(larr))
  
}

let shippingBtn = document.querySelector(".shipping-btn");
shippingBtn.addEventListener("click",()=>{
  window.location.href ="./shipping.html";
})


//place order modal 
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("checkout-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//place order modal ends here

////////////////second model modefied by 1/////////////////////////////////

// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
//var btn1 = document.getElement("checkout-btn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
// btn1.onclick = function() {
//   modal1.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span1.onclick = function() {
//   modal.style.display = "none";
// }
//////////////////////////////////////////////////////////
let forms = document.querySelectorAll(".form")
forms.forEach((item)=>{
  item.addEventListener("submit",()=>{
    // alert("PAYMENT SUCCESSFULL")

    window.location.href="./index.html"
   //modal1.style.display = "block";
                              

    clearCart()

   

  })
})

////////////////////////////////////////////////////////////

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";

//   }
// }

//place order modal ends here

let drodown = document.querySelector("#nav-dropdown");
drodown.addEventListener("click",()=>{
  windows.location.href="./index.html"
})



const userName1111 = document.querySelector("#id3");
const userNameCart11 = sessionStorage.getItem('c4raUser') || "LogIn";
userName1111.innerHTML = `${userNameCart11} <i class="fa-solid fa-circle-chevron-down"> `