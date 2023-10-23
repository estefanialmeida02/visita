function verificaNumero() {
    let numeroAleatorio = Math.random()
    let inputDigitado = document.getElementById('number').value;

    if (numeroAleatorio == numeroDigitado) {
        alert('Parabéns. você acertou o número');
    } else {
        alert(' Que pena, você errou tente novamente');
    }

}