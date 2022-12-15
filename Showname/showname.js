
function showUsername(){

    const showName = document.querySelector('h2');

    let userName = sessionStorage.getItem('c4raUser') || "Login"
    showName.innerHTML = userName;
    
    // const showName = document.querySelector('#pTag');

    // let userName = sessionStorage.getItem('c4raUser') || "Login"
    // showName.innerHTML = userName;
}

export default showUsername