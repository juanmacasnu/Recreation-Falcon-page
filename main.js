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
