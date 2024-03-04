/*const labels = Utils.months({count: 13}); //esto creo que debo cambiarlo
const data = {
  labels: [
     'Jan 1', '', 'Jan 5', '', 'Jan 9', '', 'Jan 13', '','Jan 17', '', 'Jan 21', '', 'Jan 25'
   ],
   //['0', '30', '60', '90', '120', '150']
  datasets: [{
   // label: 'My First Dataset',
    data: [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70, 80],
    fill: true,
    borderColor: 'rgb(44,123,229)',
    tension: 0.1,
    borderWidth: 2,
    backgroundColor: 'rgb(227,237,251)', 
    pointBorderColor: 'rgb(44,123,229)',
    pointBorderWidth: 3,
    pointHoverBorderWidth: 3,
    pointRadius: 5,
    pointHoverRadius: 8,
    pointBackgroundColor: 'rgb(255,255,255)',
    pointHoverBackgroundColor: 'rgb(255,255,255)',
  }]
};*/

const ctxM = document.getElementById('total-sales-chart-m').getContext('2d');

 
var gradientM = ctxM.createLinearGradient(0, 0, 0, 300);
gradientM.addColorStop(0, 'rgba(228, 238, 252, 1)');
gradientM.addColorStop(1, 'rgba(228, 238, 252, 0)'); 

let chartTotalSalesM = new Chart(ctxM, {
    type: 'line',
    data: {
      labels: [
         'Jan 1', '', 'Jan 5', '', 'Jan 9', '', 'Jan 13', '','Jan 17', '', 'Jan 21', '', 'Jan 25'
       ],
      datasets: [{
        data: [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70, 80],
        fill: true,
        borderColor: 'rgb(44,123,229)',
        tension: 0.1,
        borderWidth: 2,
        backgroundColor: gradientM,
        pointBorderColor: 'rgb(44,123,229)',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgb(255,255,255)',
        pointHoverBackgroundColor: 'rgb(255,255,255)',
      }]
    },
    options: {
      scales: {
        y: {
          border: {
            dash: [12, 6],
          },
          grid: {
              display: true,
              color: 'rgb(189,199,209)',
              drawBorder: false,
              drawOnChartArea: false,
              drawTicks: false,
              tickBorderDash: [5], 
              tickBorderDashOffset: 4,
              tickLength: 8,
              /*borderDash: [3],
              zeroLineBorderDash: [3],*/
              zeroLineColor: 'rgba(0,0,0,0)',
          },
      },
      x: {
        
          ticks: {
              maxRotation: 0,
              minRotation: 0,
              autoSkip: true,
              color: 'rgb(189,199,209)' 
          },
          grid: {
              display: false,
              color: 'rgb(189,199,209)'  
          },
      },
          y: {
              type: 'linear', 
              min: 0, 
              max: 150,
              ticks: {
                  stepSize: 30,
                  color: 'rgb(189,199,209)' 
              }
          }
      }
  }
  });

  document.getElementById('months-ts-m').addEventListener('change', function() {
    let selectedMonth = this.value;
    switch (selectedMonth) {
        case 'January':
            chartTotalSalesM.data.labels = ['Jan 1', '', 'Jan 5', '', 'Jan 9', '', 'Jan 13', '', 'Jan 17', '', 'Jan 21', '', 'Jan 25'];
            chartTotalSalesM.data.datasets[0].data = [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70, 80];
            break;
          case 'February':
            chartTotalSalesM.data.labels = ['Feb 1', '', 'Feb 5', '', 'Feb 9', '', 'Feb 13', '', 'Feb 17', '', 'Feb 21', '', 'Feb 25'];
            chartTotalSalesM.data.datasets[0].data = [100, 70, 50, 120, 100, 130, 140, 90, 100, 40, 50, 60];
            break;
          case 'March':
            chartTotalSalesM.data.labels = ['Mar 1', '', 'Mar 5', '', 'Mar 9', '', 'Mar 13', '', 'Mar 17', '', 'Mar 21', '', 'Mar 25'];
            chartTotalSalesM.data.datasets[0].data = [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60, 70];
            break;
         case 'April':
            chartTotalSalesM.data.labels = ['Apr 1', '', 'Apr 5', '', 'Apr 9', '', 'Apr 13', '', 'Apr 17', '', 'Apr 21', '', 'Apr 25'];
            chartTotalSalesM.data.datasets[0].data = [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80, 90];
            break;
          case 'May':
            chartTotalSalesM.data.labels = ['May 1', '', 'May 5', '', 'May 9', '', 'May 13', '', 'May 17', '', 'May 21', '', 'May 25'];
            chartTotalSalesM.data.datasets[0].data = [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50, 60];
            break;
          case 'June':
            chartTotalSalesM.data.labels = ['Jun 1', '', 'Jun 5', '', 'Jun 9', '', 'Jun 13', '', 'Jun 17', '', 'Jun 21', '', 'Jun 25'];
            chartTotalSalesM.data.datasets[0].data = [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70, 80];
            break;
          case 'July':
            chartTotalSalesM.data.labels = ['Jul 1', '', 'Jul 5', '', 'Jul 9', '', 'Jul 13', '', 'Jul 17', '', 'Jul 21', '', 'Jul 25'];
            chartTotalSalesM.data.datasets[0].data = [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50, 60];
            break;
          case 'August':
            chartTotalSalesM.data.labels = ['Aug 1', '', 'Aug 5', '', 'Aug 9', '', 'Aug 13', '', 'Aug 17', '', 'Aug 21', '', 'Aug 25'];
            chartTotalSalesM.data.datasets[0].data = [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110, 120];
            break;
          case 'September':
            chartTotalSalesM.data.labels = ['Sep 1', '', 'Sep 5', '', 'Sep 9', '', 'Sep 13', '', 'Sep 17', '', 'Sep 21', '', 'Sep 25'];
            chartTotalSalesM.data.datasets[0].data = [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70, 80];
            break;
          case 'October':
            chartTotalSalesM.data.labels = ['Oct 1', '', 'Oct 5', '', 'Oct 9', '', 'Oct 13', '', 'Oct 17', '', 'Oct 21', '', 'Oct 25'];
            chartTotalSalesM.data.datasets[0].data = [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110, 120];
            break;
          case 'November':
            chartTotalSalesM.data.labels = ['Nov 1', '', 'Nov 5', '', 'Nov 9', '', 'Nov 13', '', 'Nov 17', '', 'Nov 21', '', 'Nov 25'];
            chartTotalSalesM.data.datasets[0].data = [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70, 180];
            break;
          case 'December':
            chartTotalSalesM.data.labels = ['Dec 1', '', 'Dec 5', '', 'Dec 9', '', 'Dec 13', '', 'Dec 17', '', 'Dec 21', '', 'Dec 25'];
            chartTotalSalesM.data.datasets[0].data = [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70, 180];
            break;
     
    }
    chartTotalSalesM.update();
});