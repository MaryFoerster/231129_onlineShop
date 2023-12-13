'use strct'
const date = new Date();
const month = date.getMonth();
let h1Text = "";
switch (month) {
  case 0: h1Text = "Januar"; break;
  case 1: h1Text = "Februar"; break;
  case 2: h1Text = "März";break;
  case 3: h1Text = "April"; break;
  case 4: h1Text = "Mai"; break;
  case 5: h1Text = "Juni"; break;
  case 6: h1Text = "Juli"; break;
  case 7: h1Text = "August"; break;
  case 8: h1Text = "September"; break;
  case 9: h1Text = "Oktober"; break;
  case 10: h1Text = "November"; break;
  case 11: h1Text = "Dezember"; break;
}

const datum = new Date();
const monat = datum.getMonth();
let img = "";
switch (monat) {
  case 0: img = "monat1.jpg"; break;
  case 1: img = "monat1.jpg"; break;
  case 2: img = "monat1.jpg"; break;
  case 3: img = "monat1.jpg"; break;
  case 4: img = "monat4.jpg"; break;
  case 5: img = "monat4.jpg"; break;
  case 6: img = "monat4.jpg"; break;
  case 7: img = "monat4.jpg"; break;
  case 8: img = "monat7.jpg"; break;
  case 9: img = "header1.jpg"; break;
  case 10: img = "header1.jpg"; break;
  case 11: img = "header1.jpg"; break;
}

let imgElements = document.querySelectorAll("img");
if (imgElements.length >= 2) {
  imgElements[1].src = "images/" + img;
}

let h1Element = document.querySelector("h1");
h1Element.textContent = h1Text;








// let quantityInput = document.getElementById("quantity");
// quantityInput.addEventListener("input", updateOutput);

// function updateOutput() {
//   const quantity = quantityInput.value;;
// }





















// // innerHTML


// // body
// // <form id="shop"></form>


// // <!-- <script src="js/script.js"></script> -->
// // <script>

// //     // Select the element with id "shop"
// //     let formElement = document.querySelector('#shop');

// //     // Set the inner HTML of the selected element
// //     formElement.innerHTML = '<p>hello world</p>';

// // </script>