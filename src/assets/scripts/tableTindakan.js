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
              <td><div class="d-flex justify-content-center"><p class="m-0">${item.id}</p></div></td>
              <td><div class="d-flex justify-content-center"><p class="m-0">${item.diagnosa}</p></div></td>
              <td><div class="d-flex justify-content-center"><p class="m-0">${item.tindakan}</p></div></td>
              <td><div class="d-flex justify-content-center"><p class="m-0">${item.tanggal}</p></div></td>
              <td><div class="d-flex justify-content-center"><p class="m-0">${item.jammulaiselesai}</p></div></td>
              <td><div class="d-flex justify-content-center"><p class="m-0">${item.catatan}</p></div></td>
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
