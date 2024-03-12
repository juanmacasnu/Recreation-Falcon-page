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
