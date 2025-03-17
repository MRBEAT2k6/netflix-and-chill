//Khai Báo phần tử
const formlogin = document.getElementById('loginform');
const Email = document.getElementById("EmailLogin");
const Password = document.getElementById("PasswordLogin");
//hàm kiểm tra thông tin input 
formlogin.addEventListener("submit",function(e){
    e.preventDefault();
    //lây dữ liệu từ localstoge
    const  userlocal = JSON.parse(localStorage.getItem("users")) || [];
    //Tìm kiếm User
    const findUser = userlocal.find(
    (user) =>   
        user.Email === Email.value &&     
        user.Password === Password.value
    );
    if(!findUser){
        alert("Đăng nhập thất bại");
    }else{  
       window.location.href = "/html/index.html";
    }
    localStorage.setItem("userlogin",JSON.stringify(findUser));
});