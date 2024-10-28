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
                        <div class="d-flex justify-content-center">
                        <div class="btn-group">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Detail</a></li>
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                          </ul>
                        </div>
                        </div>
                        </td>
                    </tr>
                `;
});

// Inject the rows into the table body
tableBodyCatatan.innerHTML = rowsCatatan;

console.log(dataCatatan);
