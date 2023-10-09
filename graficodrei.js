// Código para o gráfico de barras
const ctxBar = document.getElementById('myBarChart').getContext('2d');

new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Nordeste', 'Norte', 'Sul', 'Sudeste', 'Centro-Oeste'],
    datasets: [
      {
        label: 'Saques',
        data: [12, 5, 14, 16, 6],
        borderWidth: 1,
        backgroundColor: ['rgba(255, 99, 71, 1)', 'rgba(255, 99, 71, 1)', 'rgba(255, 99, 71, 1)', 'rgba(255, 99, 71, 1)', 'rgba(255, 99, 71, 1)']
      },
      {
        label: 'Depósitos',
        data: [17, 10, 19.5, 8.9, 7],
        borderWidth: 1,
        backgroundColor: ['rgba(255, 160, 122, 1)', 'rgba(255, 160, 122, 1)', 'rgba(255, 160, 122, 1)', 'rgba(255, 160, 122, 1)', 'rgba(255, 160, 122, 1)']
      }
    ]
  },    
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

