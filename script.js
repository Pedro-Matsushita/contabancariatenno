function contaBancaria() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    let historicoTransacoes = [];

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const agencia = form.querySelector('.agencia').value;
        const numero = form.querySelector('.numero').value;
        const tipo = form.querySelector('.tipo').value;
        const valorSaque = parseFloat(form.querySelector('.valorSaque').value) || 0;
        const valorDeposito = parseFloat(form.querySelector('.valorDeposito').value) || 0;

        const transacao = {
            agencia,
            numero,
            tipo,
            valorSaque,
            valorDeposito,
            saldoAnterior: historicoTransacoes.length > 0 ? historicoTransacoes[historicoTransacoes.length - 1].saldoAtual : 0
        };

        // Atualiza o saldo
        transacao.saldoAtual = transacao.saldoAnterior - transacao.valorSaque + transacao.valorDeposito;

        // Adiciona a transação ao histórico
        historicoTransacoes.push(transacao);

        // Limpa o conteúdo anterior
        resultado.innerHTML = '';

        // Adiciona as informações da transação ao resultado
        resultado.innerHTML += `
            <p>Agência: ${transacao.agencia}</p>
            <p>Número: ${transacao.numero}</p>
            <p>Tipo de conta: ${transacao.tipo}</p>
            <p>Saque: R$ ${transacao.valorSaque.toFixed(2)}</p>
            <p>Depósito: R$ ${transacao.valorDeposito.toFixed(2)}</p>
            <p>Saldo Anterior: R$ ${transacao.saldoAnterior.toFixed(2)}</p>
            <p>Saldo Atual: R$ ${transacao.saldoAtual.toFixed(2)}</p>
        `;
        function atualizarGrafico(transacoes) {
            const labels = transacoes.map(transacao => transacao.numero);
            const data = transacoes.map(transacao => transacao.saldoAtual);
        }
        // Atualizar o gráfico
        atualizarGrafico(historicoTransacoes);
    });
}
contaBancaria();