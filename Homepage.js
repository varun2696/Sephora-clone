
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
    }
}

displaycard(arr);
