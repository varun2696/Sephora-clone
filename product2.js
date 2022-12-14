 
 // Fetching api from the JSON Server :-
 let cartproducts=JSON.parse(localStorage.getItem("cart"))||[];
 let bag=[];
// let url="https://fakestoreapi.com/products";
let url="https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products_2";
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      bag=data;
        console.log(data);
        displayCard(data);
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
      let q=document.querySelector("#search").value;
      console.log(q);
      let newData=bag.filter(function (elem){
        return elem.category.toLowerCase().includes(q.toLowerCase());
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
    title.innerText=elem.title;

    let Price=document.createElement("h4");
    Price.innerText="Rs. "+elem.price;
  
    let btn=document.createElement("button");
    btn.innerText= `Add  to
    cart`
    
    btn.addEventListener("click", function () {
      cartproducts.push(elem);
      localStorage.setItem("cart",JSON.stringify(cartproducts));
    });

    div.append(imageProduct,Category,title,Price,btn);

    document.querySelector(".container").append(div);
      });
    }