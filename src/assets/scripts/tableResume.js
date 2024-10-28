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
                        <li><a class="dropdown-item" href="#">Print out</a></li>
                      </ul>
                    </div>
                    </div>
                    </td>
                </tr>
            `;
});

// Inject the rows into the table body
tableBodyResume.innerHTML = rowsResume;

console.log(dataResume);
