window.addEventListener('load',function(){
    username=this.document.getElementById("username");
    useremail=this.document.getElementById("useremail");
    subject=this.document.getElementById("subject");
    message=this.document.getElementById("message");
    username.focus();

    username.addEventListener('blur',function(){
        if(!isUserNameValid()){
            username.className="incorrect";
            username.focus();
            username.select();
        }else{
            username.className="correct";
        };
    });
    useremail.addEventListener('blur',function(){
        if(!isUserEmailValid()){
            useremail.className="incorrect";
            useremail.focus();
            useremail.select();
        }else{
            useremail.className="correct";
        }

    });
    subject.addEventListener('blur',function(){
        if(!isSubjectalid()){
            subject.className="incorrect";
            subject.focus();
            subject.select();
        }else{
            subject.className="correct";
        };
    });
    message.addEventListener('blur',function(){
        if(!isMSGValid()){
            message.className="incorrect";
            message.focus();
            message.select();
        }else{
            message.className="correct";
        };
    });
    this.document.forms[0].addEventListener('submit',function(e){
    if(!(isUserNameValid()&&isUserEmailValid()&&isSubjectalid()&&isMSGValid())){
     e.preventDefault();
     alert("please... Complete Your Data");
    }else{
        e.preventDefault();
        console.log("clicked")
     //email code 
     Email.send({
        SecureToken : "c1997799-7e47-44b3-94ac-e00f271c0e91",
        To : 'mennadeyaam@gmail.com',
        From : "mennadeyaam@gmail.com",
        Subject : useremail.value,
        Body :  message.value
    }).then(
      message => alert("msg sent successfully")
    );}
     
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
function isUserNameValid(){
    return username.value.match(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/);
};
function isUserEmailValid(){
    return useremail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};
function isSubjectalid(){
    return subject.value.match(/\S+/);
};
function isMSGValid(){
    return message.value.match(/\S+/);
};