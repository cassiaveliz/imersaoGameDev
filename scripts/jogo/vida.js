class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial

    this.largura = height / 25;
    this.altura = this.largura;
    this.xInicial = 20;
    this.y = 20;
  }

  exibe() {
    for (let i = 0; i < this.vidas; i++) {
      const margem = i * 15
      const posicao = this.xInicial * (1 + i)

      image(imagemVida, posicao + margem, this.y, this.largura, this.altura)
    }

  }

  ganhaVida() {
    if (this.vidas < this.total) {
      this.vidas++;
    }
  }
  
  perdeVida() {
    this.vidas--;
  }

  
}