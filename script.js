function calcularMedia() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        const media = (num1 + num2 + num3) / 3;
        document.getElementById('mediaResultado').textContent = 'Média: ' + media.toFixed(2);
    } else {
        document.getElementById('mediaResultado').textContent = 'Por favor, insira números válidos.';
    }
}

function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    
    if (!isNaN(idade)) {
        const resultado = idade < 18 ? 'Você é menor de idade.' : 'Você não é menor de idade.';
        document.getElementById('idadeResultado').textContent = resultado;
    } else {
        document.getElementById('idadeResultado').textContent = 'Por favor, insira uma idade válida.';
    }
}

function definirMes() {
    const mesNumero = parseInt(document.getElementById('mesNumero').value);
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    if (mesNumero >= 1 && mesNumero <= 12) {
        document.getElementById('mesResultado').textContent = 'Mês: ' + meses[mesNumero - 1];
    } else {
        document.getElementById('mesResultado').textContent = 'Número inválido. Por favor, insira um número entre 1 e 12.';
    }
}