function validateForm(){
    var phno=document.forms["form"]["ph"].value;
    var password=document.forms["form"]["pwd"].value;
    if(phno.length!=10 || typeof(phno)!=Number){
        alert("Invalid mobile number");
        return false;
    }
    if(password.length<8 || password.length>15){
        alert("Password must be atleast 8 characters long and should not exceed 15 characters");
        return false;
    }
}