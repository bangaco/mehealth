const ChartPoli = document.getElementById("ChartPoli");

new Chart(ChartPoli, {
  type: "bar",
  data: {
    labels: ["Poli Gigi", "Poli Psikology", "Poli Umum"],
    datasets: [
      {
        label: "Anak ke 1",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
      {
        label: "Anak ke 2",
        data: [1, 3, 13, 1, 8],
        borderWidth: 1,
      },
      {
        label: "Pasangan",
        data: [2, 5, 8, 11, 17],
        borderWidth: 1,
      },
      {
        label: "Pekerja",
        data: [2, 6, 9, 13, 19],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
