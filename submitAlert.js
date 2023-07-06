var dataa = document.getElementById("dataa");
var btn = document.getElementById("submit");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  dataa.style.display = "block";
};
span.onclick = function () {
  dataa.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == dataa) {
    dataa.style.display = "none";
  }
};
