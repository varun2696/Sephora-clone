let btn = document.querySelector("button")
let obj ={
    id:3,
    name:"Madhu",

}



btn.addEventListener("click",()=>{
    
})


addcount  (2)
async function addcount  (id){
    let currentUser ;
    try{
    let res = await fetch(`https://639c5a3b16d1763ab1472b90.mockapi.io/cart/${id}`,{
        method:"GET"
       
    });
    if(res.ok){
    let data = await res.json();
    console.log(data.userName)
    data.userName="Winneey The Pooh";
    
    //lets PUT
    
  async function put (id,obj){
       
  }


    }
     }
    catch(err){err, "catched while patching data ."}




}