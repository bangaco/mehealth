const dataResep = [
  {
    id: 1,
    tanggal: "15-Oct-2024",
    nomor: "RSO-028/PND4D0000/MDN/10/2024-S8",
    farmasi: "Depo Obat Medical Medan",
    catatan: "(not set)",
    status: "Released",
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
                  <td><p class="text-danger">${item.catatan}</p></td>
                  <td><p class="bg-success rounded-pill p-2 text-center text-white">${item.status}</p></td>
                  <td>
                   <div class="d-flex justify-content-center">
                    <div class="btn-group">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Detail</a></li>
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Print Out</a></li>
                    </ul>
                    </div>
                  </div>
                  </td>
              </tr>
          `;
});

// Inject the rows into the table body
tableBodyResep.innerHTML = rowsResep;

console.log(dataResep);
