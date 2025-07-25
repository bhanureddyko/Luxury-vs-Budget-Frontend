// Price Trend Line Chart
const priceTrendCtx = document.getElementById("priceTrendChart").getContext("2d");
const priceTrendChart = new Chart(priceTrendCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Luxury Products",
        data: [1200, 1250, 1300, 1280, 1400],
        borderColor: "gold",
        backgroundColor: "rgba(255,215,0,0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Budget Products",
        data: [200, 220, 210, 215, 230],
        borderColor: "dodgerblue",
        backgroundColor: "rgba(30,144,255,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Price Trends Over Time",
        font: {
          size: 18,
        },
      },
    },
  },
});

// Market Share Pie Chart
const marketShareCtx = document.getElementById("marketShareChart").getContext("2d");
const marketShareChart = new Chart(marketShareCtx, {
  type: "pie",
  data: {
    labels: ["Luxury Market", "Budget Market"],
    datasets: [
      {
        label: "Market Share",
        data: [35, 65],
        backgroundColor: ["gold", "dodgerblue"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Luxury vs Budget Market Share",
        font: {
          size: 18,
        },
      },
    },
  },
});