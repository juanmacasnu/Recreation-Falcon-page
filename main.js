const chartMarketShareM = document.getElementById('canvas-market-share-m');

new Chart(chartMarketShareM, {
  type: "doughnut",
  data:  {
    labels: [
      'Samsung', 'Huawei', 'Apple'
   ],
    datasets: [{
      data: [58, 21, 22],
      borderWidth: 0, 
      cutout: 280, 
      spacing: 10,
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
        backgorundColor: 'white',
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
});





/*const API_URL_Weather_m = "https://www.meteosource.com/api/v1/free/point?lat=40.8N%20&lon=73.9W&sections=current%2Cdaily&timezone=America%2FNew_York&language=en&units=metric&key=idkbwvbq0d15zfa2g25qex829rhawgiwapizocky"

fetch(${API_URL_Weather_m})
  .then(response => response.json())
  .then()
*/
  /*curl -X 'GET' \
  'https://www.meteosource.com/api/v1/free/point?lat=40.8N%20&lon=73.9W&sections=current%2Cdaily&timezone=America%2FNew_York&language=en&units=metric&key=idkbwvbq0d15zfa2g25qex829rhawgiwapizocky' \
  -H 'accept: application/json'*/

  //https://www.meteosource.com/api/v1/free/point?lat=40.8N%20&lon=73.9W&sections=current%2Cdaily&timezone=America%2FNew_York&language=en&units=metric&key=idkbwvbq0d15zfa2g25qex829rhawgiwapizocky    that is the Request URL
  