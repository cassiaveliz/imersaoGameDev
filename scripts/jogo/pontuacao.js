class Pontuacao {
  constructor() {
    this.pontos = 0
  }

  exibe() {
    textFont(fonteTelaInicial);
    textAlign(RIGHT)
    fill('#fff')
    textSize(height / 10)
    text(parseInt(this.pontos), width - 50, 60)
  }

  adicionarPonto() {
    this.pontos = this.pontos + .1
  }
  
  reduzirPonto() {
    this.pontos = this.pontos - 1
  }

}