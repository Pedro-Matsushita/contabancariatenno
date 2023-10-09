const data2 = {
    labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'],
    datasets: [{
        label: 'Exemplo de Dados',
        data: [20, 15, 25, 30, 10],
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
  };
  
  const config2 = {
    type: 'doughnut',
    data: data2, // Corrigido para usar data2
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Exemplo de Gráfico de Rosca'
            }
        }
    },
  };
  
  const ctx2 = document.getElementById('myDoughnutChart').getContext('2d');
  new Chart(ctx2, config2);
  