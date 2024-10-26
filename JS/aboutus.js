window.addEventListener('load',function(){
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