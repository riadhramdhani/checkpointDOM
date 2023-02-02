var btnsPlus=Array.from(document.querySelectorAll(".plus-btn"));
var btnsMinus=Array.from(document.querySelectorAll(".minus-btn"));
var quantities=Array.from(document.querySelectorAll(".qute"));
var unitiesPrices=Array.from(document.querySelectorAll(".unit-price"));
var removes =Array.from(document.querySelectorAll(".fa-trash-alt")); 
var cards= Array.from(document.querySelectorAll(".card"));
var total=document.querySelector(".total-price");
var hearts=Array.from(document.querySelectorAll(".fa-heart"));

// fonction Total
function totalPrices(){
    let sum=0;
    for (let i=0; i<unitiesPrices; i++){
        sum=sum+quantities[i].innerText*unitiesPrices[i].innerText;
    }
    total.innerText=sum;
}

// bouton moins
for (let i=0; i<btnsPlus.length; i++){
    btnsPlus[i].addEventListener("click", function(){
        quantities[i].innerText++;
        total.innerText=Number(total.innerText)+Number(quantities[i].innerText)*Number(unitiesPrices[i].innerText);
    });
}

// bouton moins
for (let i=0; i<btnsMinus.length; i++){
    btnsMinus[i].addEventListener("click", function(){
        if(quantities[i].innerText>0){
        quantities[i].innerText--;
    
    total.innerText=Number(total.innerText)-Number(unitiesPrices[i].innerText);
}});
}


// heart section
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function () {
      if (hearts[i].style.color !== "red") {
        hearts[i].style.color = "red";
      } else {
        hearts[i].style.color = "black";
      }
    });
  }

// remove section

for (let i=0; i<removes.length; i++){
        removes[i].addEventListener("click", function(){
            cards[i].remove();
            quantities[i].innerText=0;
            
        });
    }