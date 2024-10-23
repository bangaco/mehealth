const dataCatatan = [
  {
    id: 1,
    tglKunjungan: "2024-10-24",
    keperluanIstirahat: "yntkts",
  },
];

// Get the table body element
const tableBodyCatatan = document.querySelector(".dataTableCatatan tbody");

// Initialize a variable to hold the rows
let rowsCatatan = "";

// Iterate through the data and create rows for each item
dataCatatan.forEach((item) => {
  rowsCatatan += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.tglKunjungan}</td>
                        <td>${item.keperluanIstirahat}</td>
                        <td>
                        <div class="d-flex justify-content-center align-items-center">
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-up-right-from-square"></i></button>
                        <button class="btn btn-outline-primary"><i class="fa-solid fa-pencil"></i></button>
                        <button class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        </td>
                    </tr>
                `;
});

// Inject the rows into the table body
tableBodyCatatan.innerHTML = rowsCatatan;

console.log(dataCatatan);
