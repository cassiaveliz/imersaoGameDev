function preload() {
  
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemGrama = loadImage('imagens/cenario/grama.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemTelaGameOver = loadImage('imagens/cenario/telaGameOver.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemMagia = loadImage('imagens/personagem/pontos.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');

  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemPersonagemGameOver = loadImage('imagens/personagem/gameOver.png');

  imagemInimigoRasteiro = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');

  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somColisao = loadSound('sons/somColisao.mp3');
  somMagia = loadSound('sons/somPontos.mp3');
  somGameOver = loadSound('sons/somGameOver.mp3');
}