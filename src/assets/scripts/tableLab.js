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
                    <td><p class="bg-success rounded-pill p-2 text-center">${item.status}</p></td>
                    <td>
                    <div class="d-flex justify-content-center align-items-center">
                    <button class="btn btn-outline-secondary"><i class="fa-solid fa-up-right-from-square"></i></button>
                    <button class="btn btn-danger text-white"><i class="fa-solid fa-trash"></i></button>
                    <button class="btn btn-warning text-white"><i class="fa-solid fa-flask"></i></button>
                    </div>
                    </td>
                </tr>
            `;
});

// Inject the rows into the table body
tableBodyLab.innerHTML = rowsLab;

console.log(dataLab);
