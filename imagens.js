let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
    imagemDaEstrada = loadImage("/assets/material/estrada.png");
    imagemDoAtor = loadImage("/assets/material/ator-1.png");
    imagemDoCarro1 = loadImage("/assets/material/carro-1.png");
    imagemDoCarro2 = loadImage("/assets/material/carro-2.png");
    imagemDoCarro3 = loadImage("/assets/material/carro-3.png");
    imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3]

    somDaTrilha = loadSound("/sons/trilha.mp3");
    somDaColisao = loadSound("/sons/colidiu.mp3");
    somDoPonto = loadSound("/sons/pontos.wav")
}
