
window.addEventListener('load', function () {
   
    
    document.forms[0].addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

    
    function sendMail(){
        (function(){
          emailjs.init("LcQCiWHjdrP_dS5Uu"); // Account Public Key //fetch api //key acc //to initialize service
        })();

        var params = {
            to: JSON.parse(localStorage.getItem(`dataOF ${JSON.parse(localStorage.getItem('userloged in'))}`))[0].Email,
            name: JSON.parse(localStorage.getItem('userloged in'))
          
        };

        var serviceID = "service_yk7b08d"; // Email Service ID
        var templateID = "template_7ymxxn9"; // Email Template ID //shakl l form 

        emailjs.send(serviceID, templateID, params)
        .then( res => {
            alert("Email sent successfully!!")
        })
        .catch();
      }
      sendMail();
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
     
});