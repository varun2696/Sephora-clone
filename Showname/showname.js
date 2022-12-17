
// import { navbar } from '../components/navbar.js';

//  const ShowNavbar = document.getElementById('Navbar_div');
//  ShowNavbar.innerHTML = navbar();
//  console.log(navbar)


 const userName = sessionStorage.getItem('c4raUser') || "Login"

 const LoginName = document.querySelector('#LoginName');

 LoginName.innerHTML = userName;


 const signout = document.getElementById('signout');
 signout.addEventListener('click', () => {
     if (userName !== "Login") {
         alert('You are signout from the site')
         sessionStorage.removeItem('c4raUser');
         window.location.reload();
     }
 })




