const dataLab = [
  {
    id: 1,
    namaPemeriksa: "ttest",
    tglKunjungan: "2024-09-18",
    namaLab: "PT Prodia Widyahusada Tbk",
    noLab: "RJL-013/PND4D0000/MDN/09/2024-S8",
    catatan: "(not set)",
    status: "released",
  },
];

// Get the table body element
const tableBodyLab = document.querySelector(".dataTableLab tbody");

// Initialize a variable to hold the rows
let rowsLab = "";

// Iterate through the data and create rows for each item
dataLab.forEach((item) => {
  rowsLab += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.namaPemeriksa}</td>
                    <td>${item.tglKunjungan}</td>
                    <td>${item.namaLab}</td>
                    <td>${item.noLab}</td>
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
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                    <li><a class="dropdown-item" href="#">Pemeriksa</a></li>
                    </ul>
                    </div>
                  </div>
                    </td>
                </tr>
            `;
});

// Inject the rows into the table body
tableBodyLab.innerHTML = rowsLab;

console.log(dataLab);
