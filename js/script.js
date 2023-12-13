'use strct'





function toggleMenu() {
  var navbarLinks = document.getElementById("navbar-links");
  navbarLinks.classList.toggle("show");
}


















function toggleMenu() {
  var navbarLinks = document.getElementById("navbar-links");
  navbarLinks.classList.toggle("show");
}

function updateSumme() {
  var stueckzahl = document.getElementById("quantity").value;
  var einzelPreis = 12; // Einzelpreis bleibt bei 12 €
  var gesamtSumme = stueckzahl * einzelPreis;
  document.querySelector(".input-summe").innerText = gesamtSumme + " €";

  // Hier wird die Gesamtsumme aktualisiert
  updateGesamtSumme();
}

function updateGesamtSumme() {
  var summeElemente = document.querySelectorAll('.input-summe');
  var gesamtSumme = 0;

  summeElemente.forEach(function (element) {
    gesamtSumme += parseFloat(element.textContent);
  });

  document.getElementById('gesamtSumme').textContent = 'Gesamtsumme: ' + gesamtSumme.toFixed(2) + ' €';
}

// Änderung für mehrere Produkte
var inputElements = document.querySelectorAll('.stuekzahl__container input');

inputElements.forEach(function (inputElement) {
  inputElement.addEventListener('change', updateSumme);
});
