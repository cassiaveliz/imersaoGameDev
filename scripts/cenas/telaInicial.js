class TelaInicial {
  constructor() {}

  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    fill('#000');
    textSize(width / 15);
    text('As aventuras de', width / 2, height / 3);
    textSize(width / 10);
    text('Hipsta', width / 2, height / 2);
    textSize(width/40);
    fill('#fff')
    text('use as setas para mover',width / 2, height / 8*7) 
  }

  _botao() {
    botaoIniciar.y = height / 8 * 5
    botaoIniciar.draw();
  }

}