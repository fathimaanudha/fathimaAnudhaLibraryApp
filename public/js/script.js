

var user=document.getElementById("name");
var errorName=document.getElementById("errorName");

var email=document.getElementById("email");
var errorEmail=document.getElementById("errorEmail");

var password=document.getElementById("pwd");
var password1=document.getElementById("pwd1");
var errorPwd=document.getElementById("errorPwd");
var errorPwd1=document.getElementById("errorPwd1");



function emailVal(){
  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/
  if(regexp.test(email.value)){
    // console.log("true")
      errorEmail.innerHTML = "valid";
      errorEmail.style.color="green";
      return true;

  }
  else{
    // console.log("false")
      errorEmail.innerHTML="Invalid email";
      errorEmail.style.color = "red";
      return false;
  }

}
function userVal(){

  let regpwd1 = /^[a-zA-Z0-9]{5,20}$/
  if(regpwd1.test(user.value)){
    errorName.innerHTML = "valid";
    errorName.style.color="green";
      return true;
    }
    else{
      errorName.innerHTML = "username should contain min 5 characters, only alphanumerics ";
      errorName.style.color="red";
     
      // alert("password should contain min 8 characters including capital and small letters, numbers and special characters!!!");
      
      return false;
     
      
    }
  }


function confirmPwd(pwdVal){
    if (pwdVal(true)){
      if(pwdVal(true)&&password.value&&password1.value==""){
        errorPwd.style.color="red";
        errorPwd.style.border.color="red";
        errorPwd.innerHTML ="password can't be empty"
        // errorPwd1.innerHTML = "Invalid";
        errorPwd1.style.color="red";
        errorPwd1.innerHTML ="password can't be empty"
        

        return false;
      }
      else if(password.value!=password1.value){
        // errorPwd.innerHTML = "Invalid";
        errorPwd.style.color="red";
        errorPwd.style.border.color="red";
        errorPwd.innerHTML ="passwords doesnt match"
        // errorPwd1.innerHTML = "Invalid";
        errorPwd1.style.color="red";
        errorPwd1.innerHTML ="passwords doesnt match"
        return false;
      }
      else if((pwdVal(true))&&(password.value==password1.value)){
        errorPwd1.innerHTML = "Password match";
        errorPwd1.style.color="green";
        return true;
      }
     
  }
  else{
    return false;
  }

    
    

   pwdVal();
}
function pwdVal(data){
  let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  if(regpwd.test(password.value)){
    errorPwd.innerHTML = "valid";
    errorPwd.style.color="green";
    return true;
  }
  else{
    errorPwd.innerHTML = "Invalid";
    errorPwd.style.color="red";
    errorPwd.innerHTML = "password should contain min 8 characters including capital and small letters, numbers and special characters!!!";
    
    // alert("password should contain min 8 characters including capital and small letters, numbers and special characters!!!");
    
    return false;
   
    
  }
  
}
