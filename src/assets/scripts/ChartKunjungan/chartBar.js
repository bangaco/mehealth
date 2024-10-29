const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Januari", "March", "May", "July", "September", "November"],
    datasets: [
      {
        label: "Poli Umum medical Pekanbaru",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
      {
        label: "Poli Umum medical Medan",
        data: [1, 3, 13, 1, 8],
        borderWidth: 1,
      },
      {
        label: "Poli Gigi medical Medan",
        data: [2, 5, 8, 11, 17],
        borderWidth: 1,
      },
      {
        label: "Psikology medical Medan",
        data: [2, 6, 9, 13, 19],
        borderWidth: 1,
      },
      {
        label: "Poli Umum medical Batam",
        data: [1, 8, 7, 20, 17],
        borderWidth: 1,
      },
      {
        label: "Poli Umum medical Padang",
        data: [1, 6, 17, 2, 19],
        borderWidth: 1,
      },
      {
        label: "Poli Umum medical Aceh",
        data: [2, 4, 11, 8, 20],
        borderWidth: 1,
      },
      {
        label: "Total Pasien",
        data: [1, 9, 18, 12, 10],
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
