window.addEventListener('load',function(){
    let table=this.document.getElementById("table1");
    let productname=this.document.getElementById("productname");
    let productimg=this.document.getElementById("img");
    var productprice=this.document.getElementById("price");
    let productdiscripton=this.document.getElementById("description");
    let update= this.document.getElementById("update");
    


    let ARRAY=JSON.parse(localStorage.getItem('products'))||[];
    //3shan law ml2ash l key de bydeny null law mst5dma l variable de b for loop null hytl3 error
    

    productname.addEventListener('blur',function(){
        if(!isproductnamevalid()){
            productname.className="incorrect";
            // productname.focus();
            productname.select();
        }else{
            productname.className="correct";
        };
    });
    productimg.addEventListener('blur',function(){
        if(!isproductURLvalid()){
            productimg.className="incorrect";
            // productimg.focus();
            productimg.select();
        }else{
            productimg.className="correct";
        }

    });
    productprice.addEventListener('blur',function(){
        if(!isproductPRICEvalid()){
            productprice.className="incorrect";
            // productprice.focus();
            productprice.select();
        }else{
            productprice.className="correct";
        };
    });
    productdiscripton.addEventListener('blur',function(){
        if(!isproductdiscriptionvalid()){
            productdiscripton.className="incorrect";
            // productdiscripton.focus();
            productdiscripton.select();
        }else{
            productdiscripton.className="correct";
            console.log(ARRAY);
        };
    });
    
    let productdata;
    this.document.forms[0].addEventListener('submit',function(e){
        if(!(isproductnamevalid()&&isproductURLvalid()&&isproductPRICEvalid()&&isproductdiscriptionvalid())){
         e.preventDefault();
         alert("please... Complete Data of new product");
        }else{
            
           
            productdata={
                name:document.getElementById("productname").value,
                image:document.getElementById("img").value,
                price:document.getElementById("price").value,
                discription:document.getElementById("description").value
            };
            console.log(productdata);
            main.push(productdata);
        
            localStorage.setItem('newproducts',JSON.stringify(main));
            
        }
        });
    
    let main = [];
    if (localStorage.getItem('newproducts') != null) {
        main = JSON.parse(localStorage.getItem('newproducts'));
    } else {
        main = ARRAY;
    };
   


    
    let tr1;
    for(let i=0 ; i<main.length ; i++){
        if(i%3===0){
            //.createElement("tr");
            tr1 = document.createElement('tr');
            tr1.classList.add('rowst');
            table.appendChild(tr1);
        }
  
        const combinedTd = document.createElement('td');
        combinedTd.classList.add('tdstyle');
        const checkbox=document.createElement('input');
        checkbox.type="checkbox";
        checkbox.classList.add('checkboxst');
        checkbox.value= i;
        
        const viewmore=this.document.createElement('input')
        viewmore.type='button';
        viewmore.value='view more...';
        viewmore.classList.add('viewmore');

        const img = document.createElement('img');
        img.src = main[i].image; // Corrected image source assignment
        img.alt = main[i].name;
        img.classList.add('photost');


        const deleteimg = document.createElement('img');
        deleteimg.src = "../photos/deleting.jpg"; // Corrected image source assignment
        deleteimg.alt = "delete";
        deleteimg.classList.add('deletest');

  
        
        var nameAndPrice = `${main[i].name}\n price : $${main[i].price}`;
        const infoTd = document.createElement('div');
        infoTd.innerText = nameAndPrice;
        infoTd.classList.add('ppst');

        combinedTd.appendChild(checkbox);
        combinedTd.appendChild(img);
        combinedTd.appendChild(infoTd);
        //combinedTd.appendChild(viewmore);
        combinedTd.appendChild(deleteimg);
        tr1.appendChild(combinedTd);
        checkbox.addEventListener('change', function() { 
         
            if(checkbox.checked){
                infoTd.classList.add("checked")
            }else{
                infoTd.classList.remove("checked")
            }
        
        ;
          });
              //for product page
          viewmore.addEventListener('click',function(){
            localStorage.setItem('clicked',JSON.stringify(main[i]));
            location.assign('productpage.html')
        })   
        //for deleting iteam 
        deleteimg.addEventListener('click',function(){
            console.log(i);
            if(checkbox.checked){
             combinedTd.remove();
             main.splice(i,1)
             localStorage.setItem('newproducts',JSON.stringify(main));
             location.reload();
             //console.log("hello");
             }
           })
           //for update or edit product
        update.addEventListener('click', function(){
            if(checkbox.checked){
               if(productname.value!==""){main[i].name=productname.value} 
               if(productimg.value!==""){main[i].image=productimg.value} 
               if(productprice.value!==""){main[i].price=productprice.value} 
               if(productdiscripton.value!==""){main[i].discription=productdiscripton.value} 
               localStorage.setItem('newproducts',JSON.stringify(main));
             location.reload();
            }
            //alert("you have to choose the product");
            
            




           })
           
    

        
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




});

function isproductnamevalid(){
    return productname.value.match(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/);
};
function isproductURLvalid(){
    return document.getElementById("img").value.match(/\.(jpg|jpeg|png|gif|bmp|webp)$/);
};
function isproductdiscriptionvalid(){
    return document.getElementById("description").value.match(/\S+/);
};
function isproductPRICEvalid(){
    return document.getElementById("price").value.match(/^[0-9]{1,3}(\.\d[0-9]{1,2})?\$$/);
};


