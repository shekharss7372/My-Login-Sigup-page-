const title = document.getElementById('title');
const usarname = document.getElementById('usarname');
const loginbutton = document.getElementById('loginbutton');
const sigupbotton = document.getElementById('sigupbotton');

sigupbotton.onclick =function (){
    title.innerHTML = "SignUp";
    usarname.style.display ="block";
    
}

loginbutton.onclick =function (){
    title.innerHTML = "Login";
    usarname.style.display ="none";
    
}