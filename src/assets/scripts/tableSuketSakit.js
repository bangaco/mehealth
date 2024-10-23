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
                      <div class="d-flex justify-content-center align-items-center">
                      <button class="btn btn-outline-secondary"><i class="fa-solid fa-up-right-from-square"></i></button>
                      <button class="btn btn-outline-primary"><i class="fa-solid fa-pencil"></i></button>
                      <button class="btn btn-danger text-white"><i class="fa-solid fa-trash"></i></button>
                      </div>
                      </td>
                  </tr>
              `;
});

// Inject the rows into the table body
tableBodySuketSakit.innerHTML = rowsSuketSakit;

console.log(dataSuketSakit);
