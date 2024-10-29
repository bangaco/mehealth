/* eslint-disable no-undef */
const wanrujuk = document.getElementById('Chartrujuk');
const ctc = document.getElementById('rujukan');

new Chart(wanrujuk, {
  type: 'bar',
  data: {
    labels: ['Poli Gigi', 'Poli Psikology', 'Poli Umum'],
    datasets: [{
      label: 'Pasangan',
      data: [12, 19, 3],
      borderWidth: 1,
    },
    {
      label: 'Pekerja',
      data: [7, 10, 5],
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
}
);

new Chart(ctc, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [{
      label: 'Rs Awas Bos Group',
      data: [1, 5, 2, 0],
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
    {
      label: 'RS Syafira Pekanbaru',
      data: [2, 3, 0, 1],
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
    {
      label :'RS. Pertamedika Ummi Rosnati',
      data: [1, 0, 0, 9],
      borderWidth: 1,
      fill: false,
      tension: 0.1,
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
}
);
