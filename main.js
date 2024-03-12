const chartMarketShareM = document.getElementById('canvas-market-share-m');
const doughnutLabel = { 
  id: 'doughnutLabel',
  beforeDatasetsDraw(chart, args,pluginOptions) { 
  const { ctx, data } = chart;
  ctx.save();
  const xCoor = chart.getDatasetMeta(0).data[0].x;
  const yCoor =chart.getDatasetMeta(0).data[0].y;
  ctx.font = '300 22px Poppins';

  ctx.fillStyle ='rgba(11, 23, 39)';
  ctx.textAlign = 'center'; 
  ctx.textBaseline = 'middle';
  ctx.fillText('92M', xCoor, yCoor);
}
}

new Chart(chartMarketShareM, {
  type: "doughnut",
  data:  {
    labels: [
      'Samsung', 'Huawei', 'Apple'
   ],
    datasets: [{
      data: [58, 21, 22],
      borderWidth: 0, 
      cutout: "90%", 
      spacing: 3,
      backgroundColor: [
        'rgb(44, 123, 229)',
        'rgb(39, 188, 253)',
        'rgb(216, 226, 239)'
      ],
      hoverBackgroundColor: [
        'rgb(48, 135, 251)',
        'rgb(42, 206, 255)',
        'rgb(237, 248, 255)'
      ],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
      backgroundColor: "white",
      bodyColor: "#010101",
      callbacks:{
        labelColor: (item) => {
        return {
        borderColor: 'none',
        backgroundColor: 'white',
        borderWidth: 0,
        borderDash: [0],
        borderRadius: 0,
                };
              },
        label: (context) => {
          return `${context.label}: ${context.parsed} %`
        }
        }
        }
    }
  },
  plugins: [doughnutLabel],
});



const API_URL_Weather_m  = 'https://www.meteosource.com/api/v1/free/point?lat=40.8N&lon=73.9W&sections=current%2Cdaily&timezone=America%2FNew_York&language=en&units=metric&key=idkbwvbq0d15zfa2g25qex829rhawgiwapizocky';

fetch(API_URL_Weather_m )
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log("Ha llegado al segundo then")
    console.log(data.daily.data)
    document.getElementById('img-weather-m').src = `./weather_icons/set02/medium/${data.daily.data[0].icon}.png`;
    let rephase =data.daily.data[0].weather.replace(/_/g, ' '); 
    document.getElementById('meteorology-weather-m').textContent = rephase.charAt(0).toUpperCase() + rephase.slice(1);
    document.getElementById('precipitation-weather-m').textContent = `Precipitation: ${data.daily.data[0].all_day.precipitation.total} mm`;
    document.getElementById('current-temperature-weather-m').textContent = `${data.daily.data[0].all_day.temperature}°`;
    document.getElementById('general-temperature-weather-m').textContent = `${data.daily.data[0].all_day.temperature_min}° / ${data.daily.data[0].all_day.temperature_max}°`
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  const ctxM = document.getElementById('total-sales-chart-m').getContext('2d');

 
  var gradientM = ctxM.createLinearGradient(0, 0, 0, 300);
  gradientM.addColorStop(0, 'rgba(228, 238, 252, 1)');
  gradientM.addColorStop(1, 'rgba(228, 238, 252, 0)'); 
  
  ctxM.canvas.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX - ctxM.canvas.getBoundingClientRect().left;
    const xAxis = chartTotalSalesM.scales["x"];
    const xValue = xAxis.getValueForPixel(mouseX);
    chartTotalSalesM.options.plugins.annotation.annotations.line1.value = xValue;
    chartTotalSalesM.update();
  });
  
  ctxM.canvas.addEventListener("mouseover", () => {
    const line = chartTotalSalesM.options.plugins.annotation.annotations.line1
    line.display = true
    chartTotalSalesM.update();
  });
  
  ctxM.canvas.addEventListener("mouseleave", () => {
    const line = chartTotalSalesM.options.plugins.annotation.annotations.line1
    line.display = false
    chartTotalSalesM.update();
  });

  const monthConversion = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };

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
        
        responsive: true,
        plugins: {
          tooltip: {
            backgroundColor: "white",
            bodyColor: "#010101",
            titleColor: "#010101",    
  titleFont: {
    weight: "200" ,
    fontFamily: "Poppins",
  },
  
            callbacks:{
              labelColor: (item) => {
              return {
              borderColor: 'none',
              backgroundColor: 'white',
              borderWidth: 0,
              borderDash: [0],
              borderRadius: 0,
                      };
                    },
              label: (context) => {
                return `${context[0].label}, ${context[0].parsed}`
              }
              },
            enabled: true,
            intersect: false,
            mode: "index",
            displayColors: false,
            callbacks: {
              label: function () {
                return "";
              },
              title: (tooltipItem) => {
                const month = chartTotalSalesM.data.labels[0].split(" ")[0];
                return `${monthConversion[month]}: ${tooltipItem[0].formattedValue}`;
              },
              
            },
          },
          legend: {
            display: false,
          },
          annotation: {
            annotations: {
              line1: {
                display: false,
                type: "line",
                mode: "x",
                scaleID: "x",
                value: "", // Debes establecer el valor de x al hacer hover
                borderColor: "rgb(189,199,209)",
                borderWidth: 2,
                borderDash: [5, 5],
              },
            },
          },
        },
  
        animation: {
          duration: 0
        },
        scales: {
          y: {
            
            border: {
              dash: [5, 5],
              display: false,
              drawBorder: false
            },
          type: 'linear', 
          min: 0, 
          max: 150,
            ticks: {
              stepSize: 30,
              color: 'rgb(189,199,209)' 
          },
          
            grid: {
                display: true,
                color: 'rgb(189,199,209)',
                drawBorder: false,
                drawOnChartArea: true,
                tickBorderDash: [5],
                tickBorderDashOffset: 4,
                tickLength: 8, 
            },
        },
        x: {
          border:{
            display: false,
            drawBorder: false
          },
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
  
document.getElementById("optionsButtonTopProducts").addEventListener("click", function() {
  const dropdownMenuTopProducts = document.querySelector(".dropdownMenuTopProducts")
  dropdownMenuTopProducts.style.display = (dropdownMenuTopProducts.style.display === "none") ? "block" : "none";
})

const topProductsChart = document.getElementById("mainTopProductsGraph")

new Chart(topProductsChart, {
type: 'bar',
data: {
  labels: ["Boots4", "Reign Pro", "Slick","Falcon", "Sparrow", "Hideaway", "Freya"],
  datasets: [{
        label: '2019',
        data: [43, 83, 86, 72, 80, 50, 80],
        backgroundColor: ['rgba(44, 123, 229, 1)'],
        borderRadius: 50,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
    },
    {
        label: '2018',
        data: [85, 73, 62, 53, 50, 70, 90],
        backgroundColor: ['rgba(216, 226, 239, 1)'],
        borderRadius: 50,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
    }]
},
options: {
    responsive: true,
    scales: {
        y: {
            
            border: {
                dash: [5, 5],
                display: false,
                drawBorder: false
            },
            type: 'linear',
            beginAtZero: true,
            max: 100,
            ticks: {
                color: 'rgb(189,199,209)' 
            },
            grid: {
                display: true,
                color: 'rgb(189,199,209)',
                drawBorder: false,
                drawOnChartArea: true,
                tickBorderDash: [5],
                tickBorderDashOffset: 4,
                tickLength: 8, 
            },
        },
        x: {
        border:{
            display: false,
            drawBorder: false
        },
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
    },
    plugins: {
        legend: {
            align: 'start',
            labels : {
                boxWidth: 12,
                useBorderRadius: true,
                borderRadius: 6
            }
        },
    }
}
});
