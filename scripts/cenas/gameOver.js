class GameOver {
  constructor() {}

  setup() {
    personagemGameOver = new Personagem(matrizPersonagemGameOver, imagemPersonagemGameOver, width / 2 - 75, height/2-75, 150, 150, 200, 200)
  }

  draw() {
    image(imagemTelaGameOver, 0, 0, width, height);
    personagemGameOver.exibe()
    image(imagemGameOver, width / 2 - 200, height / 7);
    this._texto();
    this._creditos();
  }

  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    fill('#C83E3E');
    textSize(width / 25);
    text(`Você fez ${parseInt(pontuacao.pontos)} pontoS`, width / 2, height / 7 *5);
    text('precione ENTER para tentar novamente', width / 2, height / 7 * 6);
  }

  _creditos() {
    textFont('Helvetica');
    fill('#fff');
    strokeWeight(0);
    textSize(10);
    text('Feito na #ImersãoGameDev Alura - por Cássia Aveliz - julho.2020', width / 2, height - 20)
  }

}
