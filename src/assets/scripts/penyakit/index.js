const sehatgawe = document.getElementById("KesehatanPekerja");
const geringgawe = document.getElementById("TopPenyakit");

new Chart(sehatgawe, {
  type: "pie",
  data: {
    labels: [
      "Staff",
      "BOD",
      "Helper",
      "Medical Sumbagut",
      "Intern",
      "Konsultant",
      "Nuclear Reactor Staff",
      "HSSE Sumbagut",
      "SSC ICT I Sumbagut",
      "Supply & Dist. Sumbagut",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 11, 6, 5, 6, 4, 2, 1, 1, 1],
        hoverOffset: 4,
      },
    ],
  },
});

new Chart(geringgawe, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          axis: 'y',
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
    options: {
      indexAxis: 'y',
    }
});
