let checkOutBtn = document.getElementById("checkout-btn");
let shopMoreBtn =  document.getElementById("shopmore-btn");
//cart
let cartItemDiv  = document.querySelector(".cartItems");
let cartItemCountIncreaseBtn = document.querySelector("#cartItemCountIncrease");
let cartItemCountDecreaseBtn = document.querySelector("#cartItemCountDecrease");
//prev
 let preview  = document.querySelector("#overview");
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
    window.location.replace("../product.html")
});

//fetching users
fetchUsers()
async function fetchUsers(){
    let usersarr;

    try{
    let res = await fetch("https://639c5a3b16d1763ab1472b90.mockapi.io/cart");
    if(res.ok){
        let usersarr1 = await res.json();
        usersarr = usersarr1;
        console.log(usersarr)
    }
    else {alert("error happened while fetching cartitems from cart page")}
    }
    catch(err){console.log(err, "this error is catched while fetching cartItems in cartpage")}

//------------usersarr is available inside this block-----------------------
//console.log(JSON.stringify(usersarr,null,2))

//user extraction by id
  let user = getUser(userId,usersarr);
  console.log(user)
//cart Items of particular by key;
let cartarr = user[0].cartItems;
renderCardItems(cartarr)
//console.log(JSON.stringify(cartarr,null,2))











}


function getUser(id,usersarr){
    //cartItems extraction



let user = usersarr.filter((item)=>{
    return item["id"]==id;
})
 //console.log(JSON.stringify(user,null,10))
 return user;
}




let data1 =[
    {
    "createdAt": "2022-12-10T04:24:59.885Z",
    "image": "https://cdn13.nnnow.com/web-images/medium/styles/6QFRWWY6GN7/1589003350410/1.jpg",
    "category": "Perfume",
    "title": "Oud Wood Eau De Parfum",
    "price": 25300,
    "rating":[5,3.5,4,6],
    "id": "1"
    },
    {
    "createdAt": "2022-12-09T11:49:47.804Z",
    "image": "https://cdn12.nnnow.com/web-images/medium/styles/SK7N1M9ICBQ/1583390837736/1.jpg",
    "category": "Perfume",
    "title": "Beau De Jour Eau De Parfum",
    "price": 13600,
    "id": "2",
    "rating":[4,3.5,4,4],
    },
    {
    "createdAt": "2022-12-09T22:19:24.742Z",
    "image": "https://cdn05.nnnow.com/web-images/medium/styles/CIKRZUT8BV8/1589003350421/1.jpg",
    "category": "Perfume",
    "title": "Tobacco Vanille Eau De Parfum",
    "price": 25300,
    "id": "3",
    "rating":[1,3.5,3,2],
    },
    {
    "createdAt": "2022-12-10T07:47:57.232Z",
    "image": "https://cdn04.nnnow.com/web-images/medium/styles/JWDVPXLPG9P/1639113646812/1.jpg",
    "category": "Perfume",
    "title": "Ombre Leather Parfum",
    "price": 16000,
    "id": "4",
    "rating":[2,3.5,2,2],
    },
    {
    "createdAt": "2022-12-10T00:09:13.600Z",
    "image": "https://cdn07.nnnow.com/web-images/medium/styles/VITHTL168U1/1589003350452/1.jpg",
    "category": "Perfume",
    "title": "Noir Extreme Eau De Parfum",
    "price": 13600,
    "id": "5",
    "rating":[4,3.5,3,3],
    }
]
// {
//     "createdAt": "2022-12-10T04:24:59.885Z",
//     "image": "https://cdn13.nnnow.com/web-images/medium/styles/6QFRWWY6GN7/1589003350410/1.jpg",
//     "category": "Perfume",
//     "title": "Oud Wood Eau De Parfum",
//     "price": 25300,
//     "id": "1",
//     "rating"
//     }




function renderCardItems(arr){
    cartItemDiv.innerHTML= null;

    
    cartItemDiv.innerHTML =`
     ${
        arr.map((item)=>{
           let id = item.id;
           let name = item.title;
           let category = item.category;
           let count =1;
           let price = item.price;
           let image = item.image;

           //rating part starts here
           let sumRating = 0;
           item["rating"].forEach((item1)=>{sumRating+=item1})
           let avgRating = sumRating/item["rating"].length;
           //rating part starts here
       
           return cartDiv (id,name,category,count,price,image,avgRating)

        }).join("")
     }
    `
//preview part





    
}







//cart card factory
function cartDiv (id,name,category,count,price,image,avgRating){
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
            <button id="cartItemCountDecrease" >-</button>
            <button>${count}</button>
            <button id="cartItemCountIncrease" >+</button>
        </div>

    </div>
   
    <div id="overview1" >
        <h3>Price Details</h3>
       
            <div><h3>Original Price</h3><h3>&#8377; ${dummyPrice}</h3></div>
            <div><h3>Discount</h3><h3>&#8377; 200</h3></div>
            
            
      
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



  ////////////////////////////////json template making

//   {
//     "id": 1,
//     "userName": "Anandhu P A",
//     "profilePic":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/985.jpg",
//     "Address" : "Anandhu P A, Perumoola(H) Kailasanadu PO Pothakkally Idukky District Kerala, Kerala Idukki, Kerala - 685553 9526332548",
//     "cartItems": [{
//         "createdAt": "2022-12-10T04:24:59.885Z",
//         "image": "https://cdn13.nnnow.com/web-images/medium/styles/6QFRWWY6GN7/1589003350410/1.jpg",
//         "category": "Perfume",
//         "title": "Oud Wood Eau De Parfum",
//         "price": 25300,
//         "rating": [5,3],
//         "discount": 5,
//         "id": "1"
//         },
//         {
//         "createdAt": "2022-12-09T11:49:47.804Z",
//         "image": "https://cdn12.nnnow.com/web-images/medium/styles/SK7N1M9ICBQ/1583390837736/1.jpg",
//         "category": "Perfume",
//         "title": "Beau De Jour Eau De Parfum",
//         "price": 13600,
//         "rating": [5],
//         "discount": 5,
//         "id": "2"
//         },
//         {
//             "createdAt": "2022-12-10T07:47:57.232Z",
//             "image": "https://cdn04.nnnow.com/web-images/medium/styles/JWDVPXLPG9P/1639113646812/1.jpg",
//             "category": "Perfume",
//             "title": "Ombre Leather Parfum",
//             "price": 16000,
//             "rating": [
//             5
//             ],
//             "discount": 5,
//             "id": "4"
//             },
        

//     ],
    
//     "orders":[],

//     "additionalInfo":[]
    
//   }



