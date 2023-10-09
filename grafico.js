function atualizarGrafico(historicoTransacoes) {
    const labels = transacoes.map(historicoTransacoes => transacao.numero);
    const data = transacoes.map(historicoTransacoes => transacao.saldoAtual);
  
    const config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Saldo',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Exemplo de Gráfico de Linhas'
                }
            }
        }
    };
  
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, config);
  }
  atualizarGrafico(transacoes);
  