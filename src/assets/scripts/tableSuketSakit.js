const dataSuketSakit = [
  {
    id: 1,
    tanggal: "2024-09-18",
    keperluanIstirahat: "",
    lamaHari: "1",
    tglKembaliKontrol: "2024-09-19",
  },
];

// Get the table body element
const tableBodySuketSakit = document.querySelector(".dataTableKetSakit tbody");

// Initialize a variable to hold the rows
let rowsSuketSakit = "";

// Iterate through the data and create rows for each item
dataSuketSakit.forEach((item) => {
  rowsSuketSakit += `
                  <tr>
                      <td>${item.id}</td>
                      <td>${item.tanggal}</td>
                      <td>${item.keperluanIstirahat}</td>
                      <td>${item.lamaHari}</td>
                      <td>${item.tglKembaliKontrol}</td>
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
tableBodySuketSakit.innerHTML = rowsSuketSakit;

console.log(dataSuketSakit);
