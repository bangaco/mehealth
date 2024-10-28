const data = [
  {
    id: 1,
    tanggalKunjungan: "2024-10-15",
    keluhan: "Cuci tangan berulang",
    icd: "F42 Obsessive-compulsive disorder",
    dokter: "Namira, M.Psi., Psikolog",
    kategori: "Baru",
    tipeDiagnosa: "Utama",
  },
  {
    id: 2,
    tanggalKunjungan: "2024-10-15",
    keluhan: "Cuci tangan berulang",
    icd: "F42 Obsessive-compulsive disorder",
    dokter: "Namira, M.Psi., Psikolog",
    kategori: "Baru",
    tipeDiagnosa: "Utama",
  },
  {
    id: 3,
    tanggalKunjungan: "2024-10-15",
    keluhan: "Cuci tangan berulang",
    icd: "F42 Obsessive-compulsive disorder",
    dokter: "Namira, M.Psi., Psikolog",
    kategori: "Baru",
    tipeDiagnosa: "Utama",
  },
  {
    id: 4,
    tanggalKunjungan: "2024-10-15",
    keluhan: "Cuci tangan berulang",
    icd: "F42 Obsessive-compulsive disorder",
    dokter: "Namira, M.Psi., Psikolog",
    kategori: "Baru",
    tipeDiagnosa: "Utama",
  },
  {
    id: 5,
    tanggalKunjungan: "2024-10-15",
    keluhan: "Cuci tangan berulang",
    icd: "F42 Obsessive-compulsive disorder",
    dokter: "Namira, M.Psi., Psikolog",
    kategori: "Baru",
    tipeDiagnosa: "Utama",
  },
  {
    id: 6,
    tanggalKunjungan: "2024-10-15",
    keluhan: "Cuci tangan berulang",
    icd: "F42 Obsessive-compulsive disorder",
    dokter: "Namira, M.Psi., Psikolog",
    kategori: "Baru",
    tipeDiagnosa: "Utama",
  },
  {
    id: 7,
    tanggalKunjungan: "2024-10-15",
    keluhan: "Cuci tangan berulang",
    icd: "F42 Obsessive-compulsive disorder",
    dokter: "Namira, M.Psi., Psikolog",
    kategori: "Baru",
    tipeDiagnosa: "Utama",
  },
  {
    id: 8,
    tanggalKunjungan: "2024-10-15",
    keluhan: "Cuci tangan berulang",
    icd: "F42 Obsessive-compulsive disorder",
    dokter: "Namira, M.Psi., Psikolog",
    kategori: "Baru",
    tipeDiagnosa: "Utama",
  },
  {
    id: 9,
    tanggalKunjungan: "2024-10-15",
    keluhan: "Cuci tangan berulang",
    icd: "F42 Obsessive-compulsive disorder",
    dokter: "Namira, M.Psi., Psikolog",
    kategori: "Baru",
    tipeDiagnosa: "Utama",
  },
  {
    id: 10,
    tanggalKunjungan: "2024-10-15",
    keluhan: "Cuci tangan berulang",
    icd: "F42 Obsessive-compulsive disorder",
    dokter: "Namira, M.Psi., Psikolog",
    kategori: "Baru",
    tipeDiagnosa: "Utama",
  },
  {
    id: 11,
    tanggalKunjungan: "2024-10-15",
    keluhan: "Cuci tangan berulang",
    icd: "F42 Obsessive-compulsive disorder",
    dokter: "Namira, M.Psi., Psikolog",
    kategori: "Baru",
    tipeDiagnosa: "Utama",
  },
];

// Get the table body element
const tableBody = document.querySelector(".dataTableDiagnosa tbody");

// Initialize a variable to hold the rows
let rows = "";

// Iterate through the data and create rows for each item
data.forEach((item) => {
  rows += `
        <tr>
            <td>${item.id}</td>
            <td>${item.tanggalKunjungan}</td>
            <td>${item.keluhan}</td>
            <td>${item.icd}</td>
            <td>${item.dokter}</td>
            <td>${item.kategori}</td>
            <td>${item.tipeDiagnosa}</td>
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
tableBody.innerHTML = rows;
