window.addEventListener('load', function(){
let username = this.document.getElementById("username");
let password = this.document.getElementById("password");
let button=this.document.getElementById("button");


button.addEventListener('click', function(e) {
    //admin data
    const admin={
        usernameA:"menna tullah deyaa",
        passwordA:"menna112001"
    }
    if(username.value===admin.usernameA&&password.value===admin.passwordA){
        location.replace("dashboard.html")
    }else{
    //user submit
    let USERDATA = JSON.parse(localStorage.getItem('userdata')) || [];
    let found = false; 
    // for loop the local storage data 
    for (let i = 0; i < USERDATA.length; i++) {
        //if condition to check if the user data is in local storage 
        if (USERDATA[i].UserName === username.value && USERDATA[i].Password === password.value) {
            found = true;
            localStorage.setItem('userloged in',JSON.stringify(USERDATA[i].UserName));
            break; // Exit the loop if a matching user is found
        }
    }
    if (found) {
        alert('You are successfully logged in');
        window.location.replace('gallary.html');
        localStorage.setItem('position',1);
    } else {
        alert('Your username or password is NOT correct');
        e.preventDefault(); 
        username.focus();
        username.select();
        username.classList.add('usernameRed');
        password.classList.add('passwordRed');
    }}
    
});
 //for sign in and sign out in the header
 let containINandOUT=this.document.getElementById("contain");
 if (JSON.parse(this.localStorage.getItem('position')) === null || JSON.parse(this.localStorage.getItem('position')) === 0) {
     containINandOUT.innerText='Sign in';
 }else if (JSON.parse(this.localStorage.getItem('position')) === 1) {
    document.getElementById('UP').style.display="none";
     containINandOUT.innerText='Sign out';
 }
 containINandOUT.addEventListener('click',function(){
     if(containINandOUT.innerText==='Sign in'){
         containINandOUT.href="/html/login.html";
     }else{
        // if choose signout
         containINandOUT.href="/html/login.html";
         localStorage.setItem('position','0');
         containINandOUT.innerText = 'Sign in';

     }
 })//end of signin and signout

 //code of cart to go to when login or not
 document.getElementById('cartt').addEventListener('click',function(){
    if( JSON.parse(localStorage.getItem("position"))===null || JSON.parse(localStorage.getItem("position"))===0){
    console.log("ffff")
    location.assign("/html/login.html");}
    else if (JSON.parse(localStorage.getItem("position"))===1)
   location.assign("/html/cart.html");
     })//end of cart
})