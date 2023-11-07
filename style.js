
let pontuacao = 0;

function checkAnswer(resposta) {
    const respostaCorreta1 = 'cachorro';
    const respostaCorreta2 = 'leão';
    const respostaCorreta3 = 'gaivota';
    const respostaCorreta4 = 'gato';
    const respostaCorreta5 = 'garfanhoto';

    if (resposta.toLowerCase() === respostaCorreta1) {
        pontuacao++;
        document.getElementById('pontuacao').textContent = pontuacao;
        alert('Resposta correta para a Pergunta 1!');
    } else if (resposta.toLowerCase() === respostaCorreta2) {
        pontuacao++;
        document.getElementById('pontuacao').textContent = pontuacao;
        alert('Resposta correta para a Pergunta 2!');
    } else if (resposta.toLowerCase() === respostaCorreta3) {
        pontuacao++;
        document.getElementById('pontuacao').textContent = pontuacao;
        alert('Resposta correta para a Pergunta 3!');
    } else if (resposta.toLowerCase() === respostaCorreta4) {
        pontuacao++;
        document.getElementById('pontuacao').textContent = pontuacao;
        alert('Resposta correta para a Pergunta 4!');
    } else if (resposta.toLowerCase() === respostaCorreta5) {
        pontuacao++;
        document.getElementById('pontuacao').textContent = pontuacao;
        alert('Resposta correta para a Pergunta 5!');
    } else {
        alert('Resposta errada. Tente novamente.');
    }
}
function nextQuestion() {
    const question0 = document.getElementById('question0');
    const question1 = document.getElementById('question1');
    const question2 = document.getElementById('question2');
    const question3 = document.getElementById('question3');
    const question4 = document.getElementById('question4');
    const question5 = document.getElementById('question5');
    const question6 = document.getElementById('question6');
    const finalMessage = document.querySelector('.questionh1'); // Seleciona o elemento com a mensagem final

    if (question0.style.display === 'block') {
        question0.style.display = 'none';
        question1.style.display = 'block';
    } else if (question1.style.display === 'block') {
        question1.style.display = 'none';
        question2.style.display = 'block';
    } else if (question2.style.display === 'block') {
        question2.style.display = 'none';
        question3.style.display = 'block';
    } else if (question3.style.display === 'block') {
        question3.style.display = 'none';
        question4.style.display = 'block';
    } else if (question4.style.display === 'block') {
        question4.style.display = 'none';
        question5.style.display = 'block';
    } else if (question5.style.display === 'block') {
        question5.style.display = 'none';
        question6.style.display = 'block';
    } else if (question6.style.display === 'block') {
        question6.style.display = 'none';
       finalMessage.style.display = 'block';
    }

    else {

        alert('Quiz concluído! Pontuação final: ' + pontuacao);
    }
}


// Exibe a primeira pergunta
document.getElementById('question0').style.display = 'block';

