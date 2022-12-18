//putting dummy data in ls
let u1={
    "id": 1,
    "userName": "Anandhu P A",
    "profilePic":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/985.jpg",
    "Address" : "Anandhu P A, Perumoola(H) Kailasanadu PO Pothakkally Idukky District Kerala, Kerala Idukki, Kerala - 685553 9526332548",
    "cartItems": [{
        "createdAt": "2022-12-10T04:24:59.885Z",
        "image": "https://cdn13.nnnow.com/web-images/medium/styles/6QFRWWY6GN7/1589003350410/1.jpg",
        "category": "Perfume",
        "title": "Oud Wood Eau De Parfum",
        "price": 25300,
        "rating": [5,3],
        "discount": 5,
        "id": "1",
        "count":3
        },
        {
        "createdAt": "2022-12-09T11:49:47.804Z",
        "image": "https://cdn12.nnnow.com/web-images/medium/styles/SK7N1M9ICBQ/1583390837736/1.jpg",
        "category": "Perfume",
        "title": "Beau De Jour Eau De Parfum",
        "price": 13600,
        "rating": [5],
        "discount": 5,
        "id": "2",
        "count":4
        },
        {
            "createdAt": "2022-12-10T07:47:57.232Z",
            "image": "https://cdn04.nnnow.com/web-images/medium/styles/JWDVPXLPG9P/1639113646812/1.jpg",
            "category": "Perfume",
            "title": "Ombre Leather Parfum",
            "price": 16000,
            "rating": [
            5
            ],
            "discount": 5,
            "id": "4",
            "count":2
            },
        

    ],
    
    "orders":[],

    "additionalInfo":[]
    
  }
//localStorage.setItem("userdata",JSON.stringify(u1));
localStorage.setItem("promoCodeApplied",false);
// localStorage.setItem("finalPrice",0);

//start cart
let localUserData = JSON.parse(localStorage.getItem("userdata"));
console.log("localuserData", localUserData)
let id = localStorage.getItem("userId")


let checkOutBtn = document.getElementById("checkout-btn");
let shopMoreBtn =  document.getElementById("shopmore-btn");
//cart
let cartItemDiv  = document.querySelector(".cartItems");

//prev
 let overView  = document.querySelector("#overview");
// let cartItemDiv  = document.querySelector(".cartItems");
// let cartItemDiv  = document.querySelector(".cartItems");
// let cartItemDiv  = document.querySelector(".cartItems");
//locally stored data
let LocalUserData = JSON.parse(localStorage.getItem("userData"))|[];
let userId = LocalUserData.id||2;
//let userName = LocalUserData.name|"No name in local storage";
let promoCodeDiv = document.getElementById("promocode");


//checkOutBtn
checkOutBtn.addEventListener("click",()=>{
    window.location.replace("../shipping.html")
});
//shopMoreBtn 
shopMoreBtn.addEventListener("click",()=>{
    window.location.replace("../product1.html")
});




// // api start******************************************************************
// //fetching users
// fetchUsers()
// async function fetchUsers(){
//     let usersarr;

//     try{
//     let res = await fetch("https://639c5a3b16d1763ab1472b90.mockapi.io/cart");
//     if(res.ok){
//         let usersarr1 = await res.json();
//         usersarr = usersarr1;
//         console.log(usersarr)
//     }
//     else {alert("error happened while fetching cartitems from cart page")}
//     }
//     catch(err){console.log(err, "this error is catched while fetching cartItems in cartpage")}

// //------------usersarr is available inside this block-----------------------
// //console.log(JSON.stringify(usersarr,null,2))

// //user extraction by id
//   let user = getUser(userId,usersarr);
//   console.log(user)
// //cart Items of particular by key;
// let cartarr = user[0].cartItems;
// renderCardItems(cartarr)
// //console.log(JSON.stringify(cartarr,null,2))











// }


// function getUser(id,usersarr){
//     //cartItems extraction



// let user = usersarr.filter((item)=>{
//     return item["id"]==id;
// })
//  //console.log(JSON.stringify(user,null,10))
//  return user;
// }
// api end******************************************************************





renderCardItems(localUserData);
let arr = localUserData.cartItems;













function renderCardItems(json){
     let arr  = json.cartItems;
     displayCart(arr)
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


//cart card factory
function cartDiv (id,name,category,count,price,image,avgRating,discount){
    let dummyPrice = price+200;
    
   

    return `<div id="cartItem" >
    <div>
        <img  src=${image} alt="${id}">
    </div>
    <div>
        <h3>${name}</h3>
        <h3>${category}</h3>
        <br>
        <div>${getStars(avgRating)}</div>
        <br>
        <div id="button_div" >
            <button     >-</button>
            <button >${count}</button>
            <button  >+</button>
        </div>
     data-id=${id}
    </div>
   
    <div id="overview1" >
        <h3>Price Details</h3>
       
            <div><h3>Original Price</h3><h3>&#8377; ${dummyPrice}</h3></div>
            <div><h3>Discount</h3><h3>&#8377; ${discount}</h3></div>
            
            
      
        <hr>
        <div><h3>Final Price</h3><h2>${price}</h2></div>
        
       </div>




</div>`
}
//getstars
//expernal function
function getStars(rating) {

    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    let output = [];
  
    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
      output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    // If there is a half a star, append it
    if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
      output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    return output.join('');
  
  }









//promocode
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

promoCodeDiv.addEventListener("click",()=>{
    modal.style.display = "block";
    
})
span.addEventListener("click",()=>{
    modal.style.display = "none";
});


//to make the close btn working outside box

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }



  ////////////////////////////////json template making old count not added
  let json ={
    "id": 1,
    "userName": "Anandhu P A",
    "profilePic":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/985.jpg",
    "Address" : "Anandhu P A, Perumoola(H) Kailasanadu PO Pothakkally Idukky District Kerala, Kerala Idukki, Kerala - 685553 9526332548",
    "cartItems": [{
        "createdAt": "2022-12-10T04:24:59.885Z",
        "image": "https://cdn13.nnnow.com/web-images/medium/styles/6QFRWWY6GN7/1589003350410/1.jpg",
        "category": "Perfume",
        "title": "Oud Wood Eau De Parfum",
        "price": 25300,
        "rating": [5,3],
        "discount": 5,
        "id": "1",
        
        },
        {
        "createdAt": "2022-12-09T11:49:47.804Z",
        "image": "https://cdn12.nnnow.com/web-images/medium/styles/SK7N1M9ICBQ/1583390837736/1.jpg",
        "category": "Perfume",
        "title": "Beau De Jour Eau De Parfum",
        "price": 13600,
        "rating": [5],
        "discount": 5,
        "id": "2"
        },
        {
            "createdAt": "2022-12-10T07:47:57.232Z",
            "image": "https://cdn04.nnnow.com/web-images/medium/styles/JWDVPXLPG9P/1639113646812/1.jpg",
            "category": "Perfume",
            "title": "Ombre Leather Parfum",
            "price": 16000,
            "rating": [
            5
            ],
            "discount": 5,
            "id": "4"
            },
        

    ],
    
    "orders":[],

    "additionalInfo":[]
    
  }


//****************count **********************************

let cartItemCountIncreaseBtns = document.querySelectorAll(".cartItemCountIncrease");
let cartItemCountDecreaseBtns = document.querySelectorAll(".cartItemCountDecrease");


//d
//      })

///appending function 


function displayCart(arr){
    cartItemDiv.innerHTML= null;
    
    arr.forEach((item,index) => {
           let id = item.id;
           let name = item.title;
           let category = item.category;
           let count =item.count;
           let price = item.price *count;
           let image = item.image;
           let discount = item.discount*count;
           let finalPrice = price - discount;

        //creation starts here 
        let cartItem=document.createElement("div");
        cartItem.setAttribute("id","cartItem");
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",image)
        div1.append(img);
        cartItem.append(div1);

        let div2 = document.createElement("div");
         let h31 = document.createElement("h3");
         h31.innerText=name;
         let h32 = document.createElement("h3");
         h32.innerText=category;
         let br = document.createElement("br") ;
         let btndiv = document.createElement("div");
         btndiv.setAttribute("id", "button_div")
           let plusBtn = document.createElement("button");
           plusBtn.innerText="+";
           plusBtn.addEventListener("click",()=>{
            addcount(item)
           })
           let countDisplay =document.createElement("button");
           countDisplay.innerText = count; 
           let minusBtn =document.createElement("button");
           minusBtn.innerText= "-";
           minusBtn.addEventListener("click",()=>{
            reduceCount(item)
           })
        btndiv.append(plusBtn,countDisplay,minusBtn);
        let removeBtn = document.createElement("button");
        removeBtn.innerText="remove item"
        removeBtn.setAttribute("id","removeBtn");
        removeBtn.addEventListener("click",()=>{
             removeItem(index)
        })
        div2.append(h31,h32,br,btndiv,removeBtn);
        cartItem.append(div2)

        let div3 = document.createElement("div");
        div3.setAttribute("id","overview1")
        div3.innerHTML=`<h3>Price Details</h3>
        <div><h3>Original Price</h3><h3>&#8377; ${price}</h3></div>
        <div><h3>Discount</h3><h3>&#8377; ${discount}</h3></div>
        <hr>
        <div><h3>Final Price</h3><h2>&#8377; ${finalPrice}</h2></div>
        </hr>`
        cartItem.append(div3)

        





        cartItemDiv.append(cartItem)
    });
}
//addcount
//addcount
function addcount(a){
    let larr = JSON.parse(localStorage.getItem("userdata"));
    console.log(JSON.stringify(larr,null,2))
    larr.cartItems.forEach((item,index)=>{
        if(item.id==a.id){
            item.count++
        }
    });
    displayCart(larr.cartItems);
    renderCardItems(larr)
    localStorage.setItem("userdata",JSON.stringify(larr))
    
}

/// reduce count 

function reduceCount(a){
    let larr = JSON.parse(localStorage.getItem("userdata"));
    console.log(JSON.stringify(larr,null,2))
   larr.cartItems.forEach((item,index)=>{
        if(item.id==a.id){
            item.count--;
            if(item.count <0){item.count=0}
        }
    });
    displayCart(larr.cartItems);
    renderCardItems(larr)
    localStorage.setItem("userdata",JSON.stringify(larr))
}

function removeItem(index){
let larr = JSON.parse(localStorage.getItem("userdata"));
larr.cartItems.splice(index,1)

displayCart(larr.cartItems);
renderCardItems(larr)
localStorage.setItem("userdata",JSON.stringify(larr))
}
/// reduce count 
// function addcount(a){
//     let larr = JSON.parse(localStorage.getItem("userdata"));
//     console.log(JSON.stringify(larr,null,2))
//     larr.cartItems.forEach((item,index)=>{
//         if(item.id==a.id){
//             item.count++
//         }
//     });
//     displayCart(larr.cartItems)
//     localStorage.setItem("userdata",JSON.stringify(larr))
    
// }

// return `<div id="cartItem" >
//     <div>
//         <img  src=${image} alt="${id}">
//     </div>

//     <div>
//         <h3>${name}</h3>
//         <h3>${category}</h3>
//         <br>
//         <div>${getStars(avgRating)}</div>
//         <br>
//         <div id="button_div" >
//             <button     >-</button>
//             <button >${count}</button>
//             <button  >+</button>
//         </div>
//      
//     </div>
   
    //  //<div id="overview1" >
    //     <h3>Price Details</h3>
    //         <div><h3>Original Price</h3><h3>&#8377; ${dummyPrice}</h3></div>
    //         <div><h3>Discount</h3><h3>&#8377; ${discount}</h3></div>
    //         <hr>
    //     <div><h3>Final Price</h3><h2>${price}</h2></div>
    //     </hr>
// </div>




// </div>



// shopMoreBtn.addEventListener("click",()=>{
//     console.log("checked")
//      window.location.href= "../product1.html";
// })


const userName11 = document.querySelector("#userName11");
const userNameCart = sessionStorage.getItem('c4raUser') || "LogIn";
userName11.innerHTML = `${userNameCart} <i class="fa-solid fa-circle-chevron-down"> `;