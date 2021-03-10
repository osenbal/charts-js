const visitor = document.querySelector('.visitor');
const kepuasan_visitor = document.querySelector('.kepuasan-visitor');
const penjualan_harian = document.querySelector('.penjualan-harian');

var ctx = document.getElementById("PieChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Visitor','Kepuasan Pelanggan','Tingkat Penjualan Harian'],
        datasets: [
            {
                label: '# of Votes',
                data: [ 10, 10, 10],
                backgroundColor: ['#4572E', '#17BEBB', '#FFC914'],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
});

const updateChartValue = (input, dataOrder) => {
    input.addEventListener('change', e => {
        myChart.data.datasets[0].data[dataOrder] = e.target.value;
        myChart.update();
    });
};

updateChartValue(visitor, 0);
updateChartValue(penjualan_harian, 1);
updateChartValue(kepuasan_visitor, 2);