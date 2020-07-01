function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  gameOver = new GameOver();
  jogo.setup();
  gameOver.setup();
  cenas = {
    jogo,
    telaInicial,
    gameOver
  };
  botaoIniciar = new BotaoGerenciador('Iniciar', width / 2, height / 2);
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula();
    somDoPulo.play();
  } else if (key === 'Enter') {
    window.location.reload()
  }
}

function draw() {
  cenas[cenaAtual].draw();
}