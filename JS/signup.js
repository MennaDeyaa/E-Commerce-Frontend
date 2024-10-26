window.addEventListener('load', function(){
    let UserName=document.getElementById("username");
    let Email=document.getElementById("email");
    let Birthdaydate=document.getElementById("birthdaydate");
    let Phonenumber=document.getElementById("phonenumber");
    let Address=document.getElementById("address");
    let Password=document.getElementById("password");
    let uniqueusername=JSON.parse(localStorage.getItem("uniqueusername"))||[]
     UserName.focus();
    UserName.addEventListener('blur',function(){
        if(!isUserNameValid()){
            UserName.className="incorrect";
            UserName.focus();
            UserName.select();
        }else{
            UserName.className="correct";
        };
    });
    Password.addEventListener('blur',function(){
        if(!isPasswordValid()){
            Password.className="incorrect";
            Password.focus();
            Password.select();
        }else{
            Password.className="correct";
        }

    });
    Phonenumber.addEventListener('blur',function(){
        if(!isPhoneNUMValid()){
            Phonenumber.className="incorrect";
            Phonenumber.focus();
            Phonenumber.select();
        }else{
            Phonenumber.className="correct";
        };
    });
    Address.addEventListener('blur',function(){
        if(!isAddressValid()){
            Address.className="incorrect";
            Address.focus();
            Address.select();
        }else{
            Address.className="correct";
        };
    });
    Birthdaydate.addEventListener('blur',function(){
        if(!isBirthdayDATEValid()){
            Birthdaydate.className="incorrect";
            Birthdaydate.focus();
            Birthdaydate.select();
        }else{
            Birthdaydate.className="correct";
        };
    });
    Email.addEventListener('blur',function(){
        if(!isUseremailValid()){
            Email.className="incorrect";
            Email.focus();
            Email.select();
        }else{
            Email.className="correct";
        };
    });
    this.document.forms[0].addEventListener('submit',function(e){
        if(!(isUserNameValid()&&isPasswordValid()&&isPhoneNUMValid()&&isAddressValid()&&isBirthdayDATEValid()&&isUseremailValid())){
         e.preventDefault();
         alert("please... Complete Your Data");
        }else if(isUniqueUsername()){
            e.preventDefault();
            alert("choose ANOTHER username ...this username have been used before");
            UserName.focus();
            UserName.select();

        }
        else{
            
            let existinguserdatajson = JSON.parse(localStorage.getItem('userdata')) || [];
            let oneuser = [];
             // let uniqueusername=JSON.parse(localStorage.getItem("uniqueusername"))||[]


             let userdatajs = {
              UserName: UserName.value,
              Password: Password.value,
              Email: Email.value,
              Phonenumber: Phonenumber.value,
              Address: Address.value,
              Birthdaydate: Birthdaydate.value
             };

             existinguserdatajson.push(userdatajs);
             uniqueusername.push(userdatajs.UserName);
             oneuser.push(userdatajs);

             let arrayuserdatajson = JSON.stringify(existinguserdatajson);
             let oneuserjson = JSON.stringify(oneuser);

             localStorage.setItem('userdata', arrayuserdatajson);
             localStorage.setItem('uniqueusername', JSON.stringify(uniqueusername));
             localStorage.setItem(`dataOF ${userdatajs.UserName}`, oneuserjson);

              }
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
    return document.getElementById("username").value.match(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/);
};
function isPasswordValid(){
    return document.getElementById("password").value.match(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/);
};
function isPhoneNUMValid(){
    return document.getElementById("phonenumber").value.match(/^01\d{9}$/);
};
function isAddressValid(){
    return document.getElementById("address").value.match(/\S+/);
};
function isBirthdayDATEValid(){
    return document.getElementById("birthdaydate").value.match(/^\d{4}-\d{2}-\d{2}$/);
};
function isUseremailValid(){
    return document.getElementById("email").value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};
function isUniqueUsername(){
    let UserName=document.getElementById("username");
    let uniqueusername=JSON.parse(localStorage.getItem("uniqueusername"))||[]
    for(let i=0;i<uniqueusername.length;i++){ 
        if(uniqueusername[i].toLowerCase()===UserName.value.toLowerCase()){
            return true;
        }
    };
    return false;
};