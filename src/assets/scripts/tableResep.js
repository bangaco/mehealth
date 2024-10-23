const dataResep = [
  {
    id: 1,
    tanggal: "15-Oct-2024",
    nomor: "RSO-028/PND4D0000/MDN/10/2024-S8",
    farmasi: "Depo Obat Medical Medan",
    catatan: "(not set)",
    status: "released",
  },
];

// Get the table body element
const tableBodyResep = document.querySelector(".dataTableResep tbody");

// Initialize a variable to hold the rows
let rowsResep = "";

// Iterate through the data and create rows for each item
dataResep.forEach((item) => {
  rowsResep += `
              <tr>
                  <td>${item.id}</td>
                  <td>${item.tanggal}</td>
                  <td>${item.nomor}</td>
                  <td>${item.farmasi}</td>
                  <td>${item.catatan}</td>
                  <td><p class="bg-success rounded-pill p-2 text-center">${item.status}</p></td>
                  <td>
                  <div class="d-flex justify-content-center align-items-center">
                  <button class="btn btn-outline-secondary"><i class="fa-solid fa-up-right-from-square"></i></button>
                  <button class="btn btn-outline-primary"><i class="fa-solid fa-pencil"></i></button>
                  <button class="btn btn-primary text-white"><i class="fa-solid fa-print"></i></button>
                  </div>
                  </td>
              </tr>
          `;
});

// Inject the rows into the table body
tableBodyResep.innerHTML = rowsResep;

console.log(dataResep);
