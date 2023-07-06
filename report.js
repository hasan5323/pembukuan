const doc = document.getElementById("table-body");

const KEYOF_DATA = "keyofdata";

function fillData() {
  const dataRaw = localStorage.getItem(KEYOF_DATA);
  const data = JSON.parse(dataRaw || "[]");

  data.forEach((data) => {
    const dataTable = `
        <tr>
          <td>${data.nama}</td>
          <td>${data.pengali}</td>
          <td>Rp${data.harga}</td>
          <td>Rp ${data.pengali * data.harga}</td>
        </tr>
    `;

    doc.insertAdjacentHTML("beforeend", dataTable);
  });
}

fillData();
