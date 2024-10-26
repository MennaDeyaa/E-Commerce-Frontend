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

     //button of going to gallary
     document.getElementById('buttonHEAD').addEventListener('click',function(){
        location.assign("/html/gallary.html");
     })


    // document.getElementById('cartt').addEventListener('click',function(){
    //     if( JSON.parse(localStorage.getItem("position"))===null || JSON.parse(localStorage.getItem("position"))===0){
    //     console.log("ffff")
    //     location.assign("/html/login.html");}
    //     else if (localStorage.getItem("position")===1)
    //    location.assign("/html/cart.html")
    //      })

    var Table1 = this.document.getElementById("table1");
    let ARRAY=JSON.parse(localStorage.getItem('products'))||[];

    let main = [];
    if (localStorage.getItem('newproducts') != null) {
        main = JSON.parse(localStorage.getItem('newproducts'));
    } else {
        main = ARRAY;
    };
  
    
    for (let i = 0; i < main.length-7; i++) { 
        if (i % 3 === 0) {
            // Create a new row for every three products
            tr1 = document.createElement('tr');
            tr1.classList.add('rowst');
            Table1.appendChild(tr1);
        }
  
        const combinedTd = document.createElement('td');
        combinedTd.classList.add('tdstyle');

        const img = document.createElement('img');
        img.src = main[i].image; 
        img.alt = main[i].name;
        img.classList.add('photost');
  
        var nameAndPrice = `${main[i].name}\n price : $${main[i].price}`;
        const infoTd = document.createElement('div');
        infoTd.innerText = nameAndPrice;
        infoTd.classList.add('ppst');


        const viewmore=this.document.createElement('input')
        viewmore.type='button';
        viewmore.value='view more...';
        viewmore.classList.add('viewmore');

        // var button = document.createElement('input');
        // button.type='button';
        // button.id='cartbutton';
        // button.value='Add to cart'

  
        combinedTd.appendChild(img);
        combinedTd.appendChild(infoTd);
        combinedTd.appendChild(viewmore);
        // combinedTd.appendChild(button);
        tr1.appendChild(combinedTd);


       //for product page
       viewmore.addEventListener('click',function(){
        localStorage.setItem('clicked',JSON.stringify(main[i]));
        location.assign('/html/productpage.html')
    }) ;


   

}})