const form = document.getElementById("formulir");
const dataa = document.getElementById("dataa");
const btn = document.getElementById("submit");
const text = document.getElementById("alert-message");
const span = document.getElementsByClassName("close")[0];

const KEYOF_DATA = "keyofdata";

function saveToLocalStorage(data) {
  const dataStored = localStorage.getItem(KEYOF_DATA);

  if (dataStored) {
    const parsedData = JSON.parse(dataStored);
    parsedData.push(data);
    localStorage.setItem(KEYOF_DATA, JSON.stringify(parsedData));
  } else {
    localStorage.setItem(KEYOF_DATA, JSON.stringify([data]));
  }
}

form.addEventListener("submit", submitHandler);
function submitHandler(e) {
  e.preventDefault();

  // get data ffrom form
  const nama = e.target.elements.nama.value;
  const harga = e.target.elements.harga.value;
  const pengali = e.target.elements.pengali.value;

  console.log(nama);
  console.log(harga);
  console.log(pengali);

  if (nama && harga && pengali) {
    saveToLocalStorage({
      nama,
      harga,
      pengali,
    });
    text.textContent = "Penjualan sudah dimasukkan";
  } else {
    text.textContent = "Data yang dimasukkan kosong";
  }

  // show alert
  dataa.style.display = "block";
  // reset form on submit
  form.reset();
}

span.onclick = function () {
  dataa.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == dataa) {
    dataa.style.display = "none";
  }
};
