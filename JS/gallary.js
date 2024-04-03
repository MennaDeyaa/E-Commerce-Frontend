
window.addEventListener('load', function () {
    // array of products
    var productss = [
        { name: 'Valentino bag', price: '100', discription: 'Stylish shoulder bag in pink. Perfect for any occasion.', image: '../photos/img1 (3).jpg' },
        { name: 'Steve Madeen bag', price: '60', discription: 'Chic brown shoulder bag that complements your everyday look.', image: '../photos/img2 (2).jpg' },
        { name: 'River island bag', price: '150', discription: 'Elegant green shoulder bag for a touch of sophistication.', image: '../photos/img5.jpg' },
        { name: 'Guess long boot', price: '90.99', discription: 'Classic black long boot in Size 39. A must-have for the winter season.', image: '../photos/img7.jpg' },
        { name: 'Guess boot', price: '99.99', discription: 'Stylish black boot in Size 38. Adds a fashionable edge to your footwear collection.', image: '../photos/img8 (2).jpg' },
        { name: 'US polo bag', price: '80.99', discription: 'Versatile brown shoulder bag that complements various outfits.', image: '../photos/img2.jpg' },
        { name: 'River island bag', price: '103.99', discription: 'Trendy brown shoulder bag with ample space for your essentials.', image: '../photos/img3.jpg' },
        { name: 'Steve Madeen bag', price: '60.99', discription: 'Sleek black shoulder bag that adds a touch of sophistication to your style.', image: '../photos/img6.jpg' },
        { name: 'Tommy Hielfiger shoes', price: '140', discription: 'Classic white shoes from Tommy Hielfiger in Size 39. Perfect for a casual and sporty look.', image: '../photos/img7 (2).jpg' },
        { name: 'River island bag', price: '99.99', discription: 'Stylish brown shoulder bag with a modern design.', image: '../photos/img12.jpg' },
        { name: 'River island bag', price: '80.99', discription: 'Eye-catching red shoulder bag for a bold and vibrant statement.', image: '../photos/img13.jpg' },
        { name: 'River island bag', price: '103.99', discription: 'Charming pink shoulder bag with a unique and fashionable flair.', image: '../photos/img14.jpg' },
        { name: 'Guess bag', price: '60.99', discription: 'Classic black shoulder bag that complements any outfit.', image: '../photos/img11.jpg' }
        // Add more products as needed
    ];
    
    
    
  
    var Table1 = this.document.getElementById("table1");

    var main=[];
    if(localStorage.getItem("newproducts")!=null){
        // main = JSON.parse(localStorage.getItem("newproducts"));
        
        main=JSON.parse(localStorage.getItem('newproducts'));
    }
    else{
        main=productss;
        localStorage.setItem("products",JSON.stringify(main));
    }
  
    
    for (let i = 0; i < main.length; i++) {
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
        location.assign('productpage.html')
    })   
      //for cart page 
    //   button.addEventListener('click', function () {
    //     if (JSON.parse(localStorage.getItem('position')) === null || JSON.parse(localStorage.getItem('position')) === '1') {
    //         location.assign('login.html');
    //     } else {
    //         // Retrieve the existing cart array from local storage
    //         let cartArray = JSON.parse(localStorage.getItem('clickedcart')) || [];
    //         // Add the current product (main[i]) to the cart array
    //         cartArray.push(main[i]);
    //         // Update the local storage with the modified cart array
    //         localStorage.setItem('clickedcart', JSON.stringify(cartArray));
    
    //         let result = confirm('If you want to go to the cart page, press OK. To continue shopping, press CANCEL');
            
    //         if (result) {
    //             location.assign('cart.html');
    //         } else {
    //             location.assign('gallary.html');
    //         }
    //     }
    // });
    //   button.addEventListener('click',function(){
    //     if(JSON.parse(this.localStorage.getItem('position')===null) || JSON.parse(this.localStorage.getItem('position')==='1')){
    //        location.assign('login.html');
    //     }else if(JSON.parse(this.localStorage.getItem('position')==='1')){
    //  // Retrieve the existing cart array from local storage
    // let cartArray = JSON.parse(localStorage.getItem('clickedcart')) || [];
    // // Add the current product (main[i]) to the cart array
    // cartArray.push(main[i]);
    // // Update the local storage with the modified cart array
    // localStorage.setItem('clickedcart', JSON.stringify(cartArray));
    //     //let cartarray=localStorage.setItem('clickedcart',JSON.stringify(main[i]))||[];
    //     let result=confirm('if you want to go to cart page Press OK...or continue shopping Press CANCLE')
    //     if(result){
    //         location.assign('cart.html');
    //     }else{
    //         return;
    //     }}
    //   })

        
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
    
    

    

  // var p=JSON.stringify(products);
  //   this.localStorage.setItem('products',p);
    
  });