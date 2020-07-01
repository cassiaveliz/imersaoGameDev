class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(5, 3);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 100, 30, 110, 135, 220, 270);

    const inimigoRasteiro = new Objeto(matrizInimigoRasteiro, imagemInimigoRasteiro, width - 52, 30, 52, 52, 104, 104, 10, 200);
    const inimigoVoador = new Objeto(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 200);
    const inimigoGrande = new Objeto(matrizInimigoGrande, imagemInimigoGrande, width - 200, 0, 200, 200, 400, 400, 10, 500);

    magia = new Objeto(matrizMagia, imagemMagia, width - 60, 200, 60, 60, 200, 200, 10, 2000);

    inimigos.push(inimigoRasteiro);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

    grama = new Cenario(imagemGrama, 5);
  }

  draw() {

    if (keyIsDown(LEFT_ARROW)) {
      personagem.andar(0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      personagem.andar(1);
    }

    cenario.exibe();
    cenario.move();

    vida.exibe();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++
      if (this.inimigoAtual > 2) {
        this.inimigoAtual = 0
      }
      inimigo.alteraVelocidade(parseInt(random(10, 40)))
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      somColisao.play();
      personagem.tornarInvencivel();
      personagem.imagem.filter(INVERT);
      setTimeout(() => {
        personagem.imagem.filter(INVERT)
      }, 100);      
    }
    if (vida.vidas === 0) {
      personagem._gameOver()
    }

    magia.exibe();
    magia.move();

    magia.alteraVelocidade(parseInt(random(10, 40)));

    if (personagem.estaColidindo(magia)) {
      vida.ganhaVida();
      somMagia.play();
    }

    grama.exibe();
    grama.move();

  }

}