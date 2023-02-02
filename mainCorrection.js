var btnsPlus = Array.from(document.querySelectorAll(".plus-btn"));
var btnsMinus = Array.from(document.querySelectorAll(".minus-btn"));
var quantities = Array.from(document.querySelectorAll(".qute"));
var unitiesPrices = Array.from(document.querySelectorAll(".unit-price"));
var total = document.querySelector(".total-price");
var hearts = Array.from(document.querySelectorAll(".fa-heart"));
var removes = Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards = Array.from(document.querySelectorAll(".card"));

//total prices
function totalPrices() {
  let sum = 0;
  for (let i = 0; i < btnsPlus.length; i++) {
    sum = sum + unitiesPrices[i].innerText * quantities[i].innerText;
  }
  total.innerText = sum;
}

// decrementation incrementation
for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    quantities[i].innerText++;
    totalPrices();
  });

  btnsMinus[i].addEventListener("click", function () {
    if (quantities[i].innerText > 0) {
      quantities[i].innerText--;
      totalPrices();
    }
  });
}
// Hearts
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    if (hearts[i].style.color !== "red") {
      hearts[i].style.color = "red";
    } else {
      hearts[i].style.color = "black";
    }
  });
}

// remove card

for (let i = 0; i < removes.length; i++) {
  removes[i].addEventListener("click", function () {
    cards[i].remove();
    quantities[i].innerText = 0;
    totalPrices();
  });
}
