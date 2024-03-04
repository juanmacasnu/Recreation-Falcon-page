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
              display: true, // Mostrar líneas de la cuadrícula
              color: 'rgb(189,199,209)',
              drawBorder: false, // No dibujar el borde del gráfico
              drawOnChartArea: false, // No dibujar en el área del gráfico
              drawTicks: false,
              tickBorderDash: [5], 
              tickBorderDashOffset: 4,
              tickLength: 8,// No dibujar marcas de graduación en las líneas de la cuadrícula
              /*borderDash: [3], // Define el patrón de líneas discontinuas
              zeroLineBorderDash: [3],*/
              zeroLineColor: 'rgba(0,0,0,0)',
          },
      },
      x: {
        
          ticks: {
              maxRotation: 0, // Establece la rotación máxima a 0 grados
              minRotation: 0, // Establece la rotación mínima a 0 grados
              autoSkip: true, // Habilita el auto-salto de las etiquetas
              color: 'rgb(189,199,209)' 
          },
          grid: {
              display: false,
              color: 'rgb(189,199,209)'  // No mostrar líneas de la cuadrícula en el eje x
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