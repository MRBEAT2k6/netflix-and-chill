//lây dữ liệu local storage
const  Userlogin = JSON.parse(localStorage.getItem("userlogin"));
const  loginbefore = document.getElementById("loginbefore");
const  usernameid   = document.getElementById("usernameid");
const  Icon = document.getElementById("iconuser");

if(Userlogin){
    loginbefore.style.display = "none";
    usernameid.style.display = "block";
    Icon.style.display = "block";
    usernameid.innerHTML= Userlogin.Username;
}else{
    loginbefore.style.display = "block";
    usernameid.style.display = "none";
    Icon.style.display = "none";
}