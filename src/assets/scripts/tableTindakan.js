const dataTindakan = [
  {
    id: 1,
    diagnosa: "A03 Shigellosis",
    tindakan: "Other psychotherapy and counselling",
    tanggal: "2024-10-15",
    jammulaiselesai: "	11:53-12:00",
    catatan: "",
  },
];

// Get the table body element
const tableBodyTindakan = document.querySelector(".dataTableTindakan tbody");

// Initialize a variable to hold the rows
let rowsTindakan = "";

// Iterate through the data and create rows for each item
dataTindakan.forEach((item) => {
  rowsTindakan += `
          <tr>
              <td>${item.id}</td>
              <td>${item.diagnosa}</td>
              <td>${item.tindakan}</td>
              <td>${item.tanggal}</td>
              <td>${item.jammulaiselesai}</td>
              <td>${item.catatan}</td>
              <td>
              <div class="d-flex justify-content-center align-items-center">
              <button class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
              </div>
              </td>
          </tr>
      `;
});

// Inject the rows into the table body
tableBodyTindakan.innerHTML = rowsTindakan;

console.log(dataTindakan);
