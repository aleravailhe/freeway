//ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;


function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (podeSeMoverY()) {
            yAtor += 2;
        }
    }
    if (keyIsDown(LEFT_ARROW)) {
        if (podeSeMoverXZero()) {
            xAtor -= 2;
        }
    }
    if (keyIsDown(RIGHT_ARROW)) {
        if (podeSeMoverXQuinhentos()) {
            xAtor += 2;
        }
    }
}

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
        if (colisao) {
            voltaAtorParaPosicaoInicial();
            somDaColisao.play();
            if (pontosMaiorQueZero()) {
                meusPontos -= 1;
            }
        }
    }
}

function voltaAtorParaPosicaoInicial() {
    yAtor = 366;
}

function pontuacao() {
    fill(255, 240, 60)
    textAlign(CENTER)
    textSize(25);
    text(meusPontos, width / 5, 27);
}

function marcaPonto() {
    if (yAtor < 10) {
        meusPontos += 1;
        voltaAtorParaPosicaoInicial();
        somDoPonto.play();
    }
}

function pontosMaiorQueZero() {
    return meusPontos > 0
}

function podeSeMoverY() {
    return yAtor < 366;
}
function podeSeMoverXZero() {
    return xAtor > 0;
}
function podeSeMoverXQuinhentos() {
    return xAtor < 470;
}