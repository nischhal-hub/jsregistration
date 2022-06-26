function myFunction(){
    var x= document.getElementById("myNavbar");
    if(x.className=== "navlist" ){
        x.className+= " responsive";
    }
    else{
        x.classname="navlist"
    }
}

function validation(){
    var y = document.getElementById("myForm").value;
    var z = document.getElementById("number").value;
    var a = document.getElementById("name").value;
    var b = document.getElementById("uname").value;
    var c = document.getElementById("mail").value;
    var password = document.getElementById("psw").value;
    var cpassword = document.getElementById("cpsw").value;
    if (a==""){
        alert("Fill Name");
        return false;
    }
    if(b==""){
        alert("Enter Username.");
        return false;
    }
    if(c==""){
        alert("Enter your email.");
        return false;
    }
    if(isNaN(z)){
        alert("Phone no must be numeric.");
        return  false;
    }
    if(z.length<10 || z.length>10){
        alert("Enter 10 digit number.");
    }
    if (password != cpassword){
        alert("Password doesn't match.")
        return false;
    }
    if(password.length<8){
        alert("Password must be at least 8 digits.")
        return false;
    }
}