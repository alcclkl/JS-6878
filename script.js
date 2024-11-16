let buttonLondon, buttonParis, buttonTokyo;

buttonLondon = document.getElementById("buttonLondon");
buttonParis = document.getElementById("buttonParis");
buttonTokyo = document.getElementById("buttonTokyo");

buttonLondon.addEventListener("click", function () {
  document.getElementById("london").style.display = "block";
  document.getElementById("paris").style.display = "none";
  document.getElementById("tokyo").style.display = "none";
});

buttonParis.addEventListener("click", function () {
  document.getElementById("paris").style.display = "block";
  document.getElementById("london").style.display = "none";
  document.getElementById("tokyo").style.display = "none";
});

buttonTokyo.addEventListener("click", function () {
  document.getElementById("tokyo").style.display = "block";
  document.getElementById("london").style.display = "none";
  document.getElementById("paris").style.display = "none";
});
