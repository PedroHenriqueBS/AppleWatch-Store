let imagemVisualizacao = document.getElementById('imagem-visualizacao');
let opcaoImagem0 = document.getElementById('0-imagem-miniatura');
let opcaoImagem1 = document.getElementById('1-imagem-miniatura');
let opcaoImagem2 = document.getElementById('2-imagem-miniatura');

let idBag = document.getElementById('bag');

let tituloProduto = document.getElementById('titulo');
let spanCores = document.getElementById('span-cores');

const verdeCipreste = {
    nome: "Verde-cipreste",
    nomePastaImagens: "imagens-verde-cipreste",
    preco: "499,90",
};

const azulInverno = {
    nome: "Azul-Inverno",
    nomePastaImagens: "imagens-azul-inverno",
    preco: "549,90",
};

const meiaNoite = {
    nome: "Meia-noite",
    nomePastaImagens: "imagens-meia-noite",
    preco: "899,90",
};

const estelar = {
    nome: "Estelar",
    nomePastaImagens: "imagens-estelar",
    preco: "499,90",
};

const rosaClaro = {
    nome: "Rosa-claro",
    nomePastaImagens: "imagens-rosa-claro",
    preco: "519,19",
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45 mm"];


// ATUALIZANDO A IMAGEM SELECIONADA
let imagemSelecionada = 1;
function atualizarImagemSelecionada() {
    const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);
    imagemSelecionada = opcaoImagemSelecionada;

    imagemVisualizacao.src = `assets/images/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
}

//ATUALIZANDO A COR SELECIONADA
let corSelecionada = 2;
function atualizarCorSelecionada(){
    const opcaoCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
    corSelecionada = opcaoCorSelecionada;

    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;

    // ATUALIZANDO MINIATURA
    opcaoImagem0.src = imagemVisualizacao.src = `assets/images/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-0.jpeg`;
    opcaoImagem1.src = imagemVisualizacao.src = `assets/images/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-1.jpeg`;
    opcaoImagem2.src = imagemVisualizacao.src = `assets/images/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-2.jpeg`;

    // ATUALIZANDO NOME DA COR SELECIONADA
    spanCores.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`

    imagemVisualizacao.src = `assets/images/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;

    // ATUALIZANDO O PREÇO
    let idPreco = document.getElementById('precos');
    idPreco.innerText = `R$ ${opcoesCores[corSelecionada].preco}`
    let idPrecoCartao = document.getElementById('precos-cartao');
    idPrecoCartao.innerText = `Em até 12x de R$ ${opcoesCores[corSelecionada].preco}`
}

//ATUALIZANDO TAMANHO
let tamanhoSelecionado = 1;
function atualizarTamanho(){
    const opcaoTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);
    tamanhoSelecionado = opcaoTamanhoSelecionado;

    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;

    if (opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena')
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}

// ATUALIZANDO BAG
let contador = 0;
idBag.innerHTML = contador;
function atualizarBag(){
    if (contador >= 0){
        contador ++;
        idBag.innerHTML = contador;
    }
}
