window.addEventListener('load',function(){
let datajs= JSON.parse(localStorage.getItem('clicked'));
//let data=JSON.parse(localStorage.getItem('clickedcart'))||[];
let data=JSON.parse(localStorage.getItem(`dataOF ${JSON.parse(localStorage.getItem("userloged in"))}`))||[];

let img=document.getElementById("productimg");
let namee=document.getElementById("productname");
let price=document.getElementById("productprice");
let description=document.getElementById("productdes");
let button=document.getElementById("button");


img.src=datajs.image;
namee.innerText=datajs.name;
price.innerText=`price : $${datajs.price}`;
description.innerText=datajs.discription;


button.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('position')) === null || JSON.parse(localStorage.getItem('position')) === 0) {
        location.assign("login.html");
        
    } else {
        const addedproduct ={
            img : datajs.image,
            name : datajs.name,
            price : datajs.price
        }
        console.log(addedproduct);
        data.push(addedproduct);
        localStorage.setItem(`dataOF ${JSON.parse(localStorage.getItem("userloged in"))}`, JSON.stringify(data));

        let msg = confirm("If you want to go to the cart page, press OK. To continue shopping, press CANCEL");

        if (msg) {
            location.assign("cart.html");
        } else {
            location.assign("gallary.html");
        }
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
})

