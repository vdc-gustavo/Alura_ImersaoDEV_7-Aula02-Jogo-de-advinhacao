let numeroSecreto = parseInt(Math.random() * 1001);
let tentativas = 15;
let chute;
let startApp = confirm(
  "Bem vindo ao jogo de advinhação, aqui você deve tentar advinhar um número entre 1 e 1000, neste modo mais difícil você tem 15 tentativas para advinhar, caso as tentativas acabarem, você perde!\nPara começar clique em 'Ok', para finalizar o programa clique em 'Cancelar'"
);

const conversor = () => {
  if (startApp == false) {
    alert("Programa finalizado.\nAtualize a página para recomeçar.");
    return;
  } else {
    while (chute != numeroSecreto && tentativas >= 0) {
      let chute = Number(
        prompt("Digite um número entre 1 e 1000:" + numeroSecreto)
      );
      tentativas--;
      if (chute == 0) {
        alert("Valor inválido! Insira um valor maior que 0.");
      } else if (tentativas < 0) {
        alert(
          "Você gastou todas as suas tentativas e perdeu. Boa sorte na próxima!"
        );
        return;
      } else if (chute == numeroSecreto) {
        alert(`Acertou! O Número era ${numeroSecreto}.`);
        return;
      } else if (chute > numeroSecreto || chute < numeroSecreto) {
        alert(`Errou... Você ainda tem ${tentativas} tentativas.`);
      }
    }
  }
};

conversor();
