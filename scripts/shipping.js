//localStorage.setItem("userdata",JSON.stringify(u1));
localStorage.setItem("promoCodeApplied",false);
// localStorage.setItem("finalPrice",0);

//start cart
let localUserData = JSON.parse(localStorage.getItem("userdata"));
//console.log("localuserData", localUserData)
let id = localStorage.getItem("userId")
let cartItemDiv = document.querySelector("#shippingCart")

let overView  = document.querySelector("#overview");
/////////***********************bag and continue buttons */
let editBagBtn = document.getElementById("shopmore-btn");

editBagBtn.addEventListener("click", ()=>{
    window.location.href ="./cart.html";
})

let continueBtn = document.querySelector("#checkout-btn")
continueBtn.addEventListener("click",()=>{
    window.location.href ="./payment.html";
})
//******************************************** */
///main part starts

renderCardItems(localUserData)





///main part ends





function renderCardItems(json){
    let arr  = json.cartItems;
    //displayCart(arr)
   cartItemDiv.innerHTML= null;

   
   cartItemDiv.innerHTML =`
    ${
       arr.map((item)=>{
          let id = item.id;
          let name = item.title;
          let category = item.category;
          let count =item.count;
          let price = item.price *count;
          let image = item.image;
          let discount = item.discount;

          //rating part starts here
          let sumRating = 0;
          item["rating"].forEach((item1)=>{sumRating+=item1})
          let avgRating = sumRating/item["rating"].length;
          //rating part starts here
      
          return cartDiv (id,name,category,count,price,image,0,discount)

       }).join("")
    }
   `
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

function cartDiv (id,name,category,count,price,image,avgRating,discount){
    

    return `<div id="cartItem" >
    <div>
        <img  src=${image} alt= id of item = ${id}>
    </div>
    <div>
        <h3>${name}</h3>
        <h3>${category}</h3>
        
        <h2>&#8377; ${price}</h2>

    </div>
    
    <div id="overview1" >
        <h3><i class="fa-solid fa-truck"></i></h3>
       
            <div><h3> <i class="fa-regular fa-circle-dot"></i>Delivery within 3 - 7 days</h3></div>
            
            
        
    </div>




</div>`
}


let paymentBtn = document.querySelector(".payment-btn");
paymentBtn.addEventListener("click",()=>{
  window.location.href ="./payment.html";
})

// id2
const userName111 = document.querySelector("#id2");
const userNameCart1 = sessionStorage.getItem('c4raUser') || "LogIn";
userName111.innerHTML =  `${userNameCart1} <i class="fa-solid fa-circle-chevron-down"> `