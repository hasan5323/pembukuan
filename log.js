const form = document.getElementById("formulir");
form.addEventListener("submit", submitHandler);
function submitHandler(e) {
  e.preventDefault();
  console.log(e.target.elements.nama.value);
  console.log(e.target.elements.harga.value);
  console.log(e.target.elements.pengali.value);
}
