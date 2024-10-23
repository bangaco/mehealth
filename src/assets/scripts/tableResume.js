const dataResume = [
  {
    id: 1,
    tglRilis: "18-Sep-2024; 03.12",
    tglWaktuKejadian: "18-Sep-2024; 03.11",
    dokterPemeriksa: "Namira, M.Psi., Psikolog",
    status: "released",
  },
];

// Get the table body element
const tableBodyResume = document.querySelector(".dataTableResume tbody");

// Initialize a variable to hold the rows
let rowsResume = "";

// Iterate through the data and create rows for each item
dataResume.forEach((item) => {
  rowsResume += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.tglRilis}</td>
                    <td>${item.tglWaktuKejadian}</td>
                    <td>${item.dokterPemeriksa}</td>
                    <td><p class="bg-success rounded-pill p-2 text-center">${item.status}</p></td>
                    <td>
                    <div class="d-flex justify-content-center align-items-center">
                    <button class="btn btn-outline-secondary"><i class="fa-solid fa-up-right-from-square"></i></button>
                    <button class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                    <button class="btn btn-primary text-white"><i class="fa-solid fa-print"></i></button>
                    </div>
                    </td>
                </tr>
            `;
});

// Inject the rows into the table body
tableBodyResume.innerHTML = rowsResume;

console.log(dataResume);
