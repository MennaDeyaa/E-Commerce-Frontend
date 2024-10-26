
window.addEventListener('load', function () {
    let arraycart = JSON.parse(localStorage.getItem(`dataOF ${JSON.parse(localStorage.getItem("userloged in"))}`));
    let carttable = document.getElementById("table");
    let buynow=document.getElementById("button")
   

    //for total price 
    function totalprice(){
        let usercart=JSON.parse(localStorage.getItem(`dataOF ${JSON.parse(localStorage.getItem("userloged in"))}`)) || [];
        let total=0;
        for(let i=1;i<usercart.length;i++){
            total += parseFloat(usercart[i].price)
            let totalprice = document.getElementById("price");
            totalprice.innerText=`Total price : $${total}`; 

        }
       
        
    }

    //for button buy now 
    buynow.addEventListener('click',function(){
        location.assign("../html/buying.html");
    })

    // Check if arraycart is not null and is an array
    if (Array.isArray(arraycart) && arraycart.length > 0) {
        for (let i = 1; i < arraycart.length; i++) {
            // Create row
            let cartrow = document.createElement('tr');
            cartrow.classList.add('rowst');

            // Create td for image
            let imgg = document.createElement('td');
            let innerimg = document.createElement('img');
            // Assuming 'image' is a property of arraycart[i]
            innerimg.src = arraycart[i].img;
            innerimg.classList.add("productimg");
            imgg.appendChild(innerimg);

            // Create td for name
            let namee = document.createElement('td');
            // Assuming 'name' is a property of arraycart[i]
            namee.innerText = arraycart[i].name;

            // Create td for price
            let price = document.createElement('td');
            // Assuming 'price' is a property of arraycart[i]
            price.innerText = `$ ${arraycart[i].price}`;


            let deletee = document.createElement('td');
            let deleteeimg = document.createElement('img');
            // Assuming 'image' is a property of arraycart[i]
            deleteeimg.src = "../photos/deleting.jpg";
            deletee.appendChild(deleteeimg);
            deleteeimg.classList.add("deleteclass");

            deleteeimg.addEventListener('click', function () {
                cartrow.remove();
                arraycart.splice(i, 1); 
                localStorage.setItem(`dataOF ${JSON.parse(localStorage.getItem("userloged in"))}`, JSON.stringify(arraycart));
                location.reload();
                totalprice()
            });

            // Append td elements to tr
            cartrow.appendChild(imgg);
            cartrow.appendChild(namee);
            cartrow.appendChild(price);
            cartrow.appendChild(deletee);
            // Append tr to table
            carttable.appendChild(cartrow);
        }
    } 

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
            //signout
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


     totalprice()
});
