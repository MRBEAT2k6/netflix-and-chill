//Khai Báo phần tử
const formregister = document.getElementById('registerform');
const Username = document.getElementById('Username');
const Password = document.getElementById('Password');
const RePassword = document.getElementById('RePassword');
const Email = document.getElementById('email');

//Lỗi nhập
const UsernameError = document.getElementById('UserNameError');
const PasswordError = document.getElementById('PasswordError');
const RePasswordError = document.getElementById('RePasswordError');
const EmailError = document.getElementById('EmailError');
//lây dữ liệu từ localstoge
const  userlocal = JSON.parse(localStorage.getItem("user")) || [];


/**
 * Validate địa chỉ email
 * @param {*} email:chuỗi email người dùng gõ vào
 * @returns: Dữ liệu nếu email đúng định dạng, undefined nếu email sai định dạng
 * Author: StackOverFlow
 */
//kiểm tra email
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(   
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};
//hàm kiểm tra thông tin input 
formregister.addEventListener("submit",function(e){
    e.preventDefault();

    //Value đầu vào
    //username
    if(!Username.value){
        UsernameError.style.display =       "block";
    }else{
        UsernameError.style.display =   "none";
    }
    //password
    if(!Password.value){
            PasswordError.style.display =   "block";
    }else{
            PasswordError.style.display =   "none";
    }
    //Repassword
    if(!RePassword.value){
        RePasswordError.style.display = "block";
    }else{
        RePasswordError.style.display = "none";
    }
    //Email
    if(!Email.value){
        EmailError.style.display =  "block";
    }else{
        EmailError.style.display =  "none";
        if(!validateEmail(Email.value)){
            EmailError.style.display =  "block";
            EmailError.innerHTML =  "Email sai định dạng";
        }
    }
    //kiểm tra Repassword
    if(RePassword.value != Password.value){
        RePasswordError.style.display = "block";
        RePasswordError.innerHTML = "Password không khớp";
    }
     //lưu thông tin lên localstorage
    if(
        Username.value &&
        Password.value &&
        RePassword.value &&
        Password.value === RePassword.value &&
        validateEmail(Email.value)
    ){
        //tạo user
        const user = {
                UserID: Math.ceil(Math.random() * 1000000),
                Username: Username.value,
                Email: Email.value,
                Password: Password.value,
    };
        //Push user
        userlocal.push(user);
        
        //lưu trữ dữ liêu lên localstorage
        localStorage.setItem("users",JSON.stringify(userlocal));
        setTimeout(function(){
            //sang trang đăng nhập
            window.location.href=('/html/login.html')
        }, 100);
    
    }
    
    
});