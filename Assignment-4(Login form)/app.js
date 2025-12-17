let email=document.getElementById("email");
let pass=document.getElementById("pass");

const btn=document.getElementById("btn");
const errore=document.querySelector(".error-msg");
const errorp=document.querySelector(".error-pass");




function isValid(){

    let isvalidform=true;
    if(email.value.trim()==="" ){
        errore.style.display="block";
        errore.style.color="red";
        isvalidform=false;
    }else{
        errore.style.display="none";
    }

    
    

    if(pass.value.trim()===""){
        errorp.style.display="block";
        errorp.style.color="red";
        isvalidform=false
    } else   {
        errorp.style.display="none";
    }
    
    
    if(isvalidform){
        alert("Login successful..");
    }
   
}

btn.addEventListener("click",isValid);

