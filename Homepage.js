
let newarr =[
    "https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/SC_HPBanner_Desktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/ABH_Christmas.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/Bobbibrown_Topbanner01_desktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/SC_TopBannerdesktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/29-nov-2022/se/L'Ateilier_Topbannerdesktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/13-dec-2022/1125X500_HPBanner_Web35LM.jpg",
]

let image=document.createElement("img");
    document.querySelector(".imageContainer").append(image);
  
    let i=0;
    slider(i);
    function slider(el){
        setInterval(function(){
            if(el<newarr.length){
                image.src=newarr[el];
                el++;
            }
            if(el==newarr.length){
                el=0;
            }
        },2000);
    }

    let arr=[
        "https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/TomFord_Tile_01.jpg",
        "https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/TomFord_Tile_02.jpg",
        "https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/TomFord_Tile_03.jpg"
    ]

    

    function displaycard(arr){

    document.querySelector(".TomFord").innerHTML="";
    for(let i=0;i<arr.length;i++){
        let Div=document.createElement("div");
        let images=document.createElement("img");
        images.setAttribute("src",arr[i]);
        Div.append(images);
        
        document.querySelector(".TomFord").append(Div);
        Div.addEventListener("click",()=>{
          window.location.href="./product1.html"
        })
    }
   
}

displaycard(arr);


$(".slider").each(function () {
    var $this = $(this);
    var $group = $this.find(".slide_group");
    var $slides = $this.find(".slide");
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
  
    function move(newIndex) {
      var animateLeft, slideLeft;
  
      advance();
  
      if ($group.is(":animated") || currentIndex === newIndex) {
        return;
      }
  
      bulletArray[currentIndex].removeClass("active");
      bulletArray[newIndex].addClass("active");
  
      if (newIndex > currentIndex) {
        slideLeft = "100%";
        animateLeft = "-100%";
      } else {
        slideLeft = "-100%";
        animateLeft = "100%";
      }
  
      $slides.eq(newIndex).css({
        display: "block",
        left: slideLeft
      });
      $group.animate(
        {
          left: animateLeft
        },
        function () {
          $slides.eq(currentIndex).css({
            display: "none"
          });
          $slides.eq(newIndex).css({
            left: 0
          });
          $group.css({
            left: 0
          });
          currentIndex = newIndex;
        }
      );
    }
  
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (currentIndex < $slides.length - 1) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
  
    $(".next_btn").on("click", function () {
      if (currentIndex < $slides.length - 1) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
  
    $(".previous_btn").on("click", function () {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
  
    $.each($slides, function (index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
  
      if (index === currentIndex) {
        $button.addClass("active");
      }
      $button
        .on("click", function () {
          move(index);
        })
        // .appendTo(".slide_buttons");
      bulletArray.push($button);
    });
  
    advance();
  });
//   Lazy Girl's Bff's card
  let lazyGirlarr=  [
                    "https://logan.nnnow.com/content/dam/nnnow-project/05-nov-2022/se/Sephora_ContentP-Story_CreamyConcealers.jpg",
                    "https://logan.nnnow.com/content/dam/nnnow-project/05-nov-2022/se/Sephora_ContentP-Story_TrendingTints.jpg",
                    "https://logan.nnnow.com/content/dam/nnnow-project/05-nov-2022/se/Sephora_ContentP-Story_MagicalMascaras.jpg"
                     ]
                     displaylazrgirlcard(lazyGirlarr);

function displaylazrgirlcard(data){
    document.querySelector("#LazyGirlCard").innerHTML=`
        ${ data.map((el)=>{
                return `<div id="smallCard" onclick="girl()">
                          <img src="${el}" alt="err">
                         </div>`
                          }).join(" ")}
                        `
                 }

function girl(){
  window.location.href="./product2.html";
}
// New On The Block
      
     
     let newBlock=[
                    "https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/SC_NOTB.jpg",
                    "https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg", 
                    "https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/HomepageNewontheBlockBanner1659X1020.png",                  
                    "https://logan.nnnow.com/content/dam/nnnow-project/27-nov-2022/se/Smashbox_NOTB.jpg",  
                    "https://logan.nnnow.com/content/dam/nnnow-project/31-oct-2022/ABH_NOTB_RoseMetalsPallete.jpg",            
                    "https://logan.nnnow.com/content/dam/nnnow-project/14-sep-2022/Hudabeauty_NOTB.jpg"
                ]
  
displayNewBlockCard(newBlock);          
function displayNewBlockCard(data){
    document.querySelector("#BlockContainer").innerHTML=`
    ${data.map((el)=>{
        return `<div id="newblocksmallcard" onclick="fun()">
        <img src="${el}" alt="newcard">
        </div>
        `
    }).join(" ")}
    `
}       
   
function fun(){
  window.location.href="./product2.html";
} 

let Diaries=[

{
    Image:"https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg",
    Name:"MAKING A LOOK",
    Description:"With Anaita Shroff Adajania"
},

{
    Image:"https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg",
    Name:"7 MASKS",
     Description:"that’ll save your skin"
},

{ 
  Image:"https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg",
  Name:"LONG LASTING MAKEUP?",
  Description:"Here’s how!"
}
]
displayC4RADiary(Diaries);
function displayC4RADiary(data){
    document.querySelector(".C4RADiarierContainer").innerHTML=`
        ${ data.map((el)=>{
                return `<div id="smallCard">
                          <img src="${el.Image}" alt="err">
                          <h3>${el.Name}</h3>
                          <p>${el.Description}</p>
                         </div>`
                          }).join(" ")}
                        `
                 }



//adding user structure to local storage to faciliate add to cart functoinality
let userStructure={
  "id": 1,
  "userName": "",
  "profilePic":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/985.jpg",
  "Address" : "",
  "cartItems": [],
  "orders":[],
  "additionalInfo":[],
  "payment":0
  
}
if(localStorage.getItem("userdata")){}
else{
localStorage.setItem("userdata",JSON.stringify(userStructure));
}