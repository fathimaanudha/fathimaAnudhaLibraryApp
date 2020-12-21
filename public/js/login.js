var user=document.getElementById("user");
var errorUser=document.getElementById("errorUser");
var password=document.getElementById("pwd");
var errorPwd=document.getElementById("errorPwd");

function validate(data){

    let regpwd = /^[a-zA-Z0-9]{2,20}$/
    if(regpwd.test(user.value)){
        // errorUser.innerHTML = "valid";
        // errorUser.style.color="green";
        return true;
      }
      else{
        errorUser.innerHTML = "Invalid";
        errorUser.style.color="red";
       
        // alert("password should contain min 8 characters including capital and small letters, numbers and special characters!!!");
        
        return false;
       
        
      }
    }
//     if( user.value== "admin" && password.value==12345){
//         return true;
//     }
//     if( user.value== "" && password.value==""){
//         errorUser.innerHTML="required";
//         errorUser.style.color="blue";
//         errorPwd.innerHTML="required";
//         errorPwd.style.color="blue";
//         password.value="";
//         user.value="";
//         return false;
//     }

//      if(user.value== "admin" && password.value!=12345){
            
//         errorPwd.innerHTML="Invalid Password";
//         errorPwd.style.color="red";
//         errorUser.innerHTML="Valid ";
//         errorUser.style.color="Green";
//         password.value="";
       
        
//         return false;

//     }
//      if(user.value!= "admin" && password.value==12345){
//         errorUser.innerHTML="Invalid userName";
//         errorUser.style.color="red";
//         errorPwd.innerHTML="Valid";
//         errorPwd.style.color="green";
        
//         user.value="";
       
//         return false;

//     }
//     else{
//         errorUser.innerHTML="Invalid userName";
//         errorUser.style.color="red";
//         errorPwd.innerHTML="Invalid Password";
//         errorPwd.style.color="red";
//         password.value="";
//         user.value="";
//         return false;
//     }
    

// }