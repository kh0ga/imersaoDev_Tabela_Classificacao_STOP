

var jogadores = [];
var rodada = 1;
var letrasJaSorteadas = [];
var letras = ['A', 'B', 'C','D', 'E', 'F','G', 'H', 'I','J', 'K', 'L','M', 'N', 'O','P', 'Q', 'R','S', 'T', 'U','V', 'X', 'W', 'Y', 'Z'];


function exibeJogadoresNaTela(jogadores){

  let elemento = "";

  classificarJogadores();

  for(let i = 0; i < jogadores.length; i++){


    if( i == 0){
      elemento += '<img class="trofeu" src="img/trofeu.png">'
    }

  elemento += '<tr><td>' + jogadores[i].foto;
  elemento +=  jogadores[i].nome;
  elemento += '</td><td><button id="btn10Pontos" class="btnPontos" onClick=palavraUnica('+ i +')>+10</button></td>';
  elemento += '<td><button id="btn5Pontos" class="btnPontos" onClick=palavraRepetida('+ i +')>+5</button></td>';
  elemento += '<td>' + jogadores[i].pontosRodada + '</td>';
  elemento += '<td>' + jogadores[i].pontosTotal + '</td>';

  }

  let tabelaJogadores = document.getElementById('tabelaJogadores');

  tabelaJogadores.innerHTML = elemento;

}

function palavraUnica(i){

  let jogador = jogadores[i]
  jogador.pontosRodada += 10;
  jogador.pontosTotal += 10 ;

  exibeJogadoresNaTela(jogadores);
  
}

function palavraRepetida(i){

  let jogador = jogadores[i]
  jogador.pontosRodada += 5;
  jogador.pontosTotal += 5 ;
  
  exibeJogadoresNaTela(jogadores);

}

function adicionarJogador(){
  
  let nomeNovoJogador = document.getElementById('inputAdicionarJogador').value;
  let inputFoto = document.getElementById('inputFoto').value;
  let jogador = {};

  jogador.foto =  '<img class="profile-img" src="' + inputFoto + '">'
  jogador.nome = nomeNovoJogador;
  jogador.pontosRodada = 0;
  jogador.pontosTotal = 0;

  jogadores.push(jogador);
  exibeJogadoresNaTela(jogadores);
  limparInput();


}

function limparInput(){

  document.getElementById('inputAdicionarJogador').value = "";
  document.getElementById('inputFoto').value = "";

}

function novaRodada(){
  
  for(let i = 0; i < jogadores.length; i++){
    jogadores[i].pontosRodada = 0;
  }

  rodada++
  document.getElementById('rodada').innerHTML = rodada;

  exibeJogadoresNaTela(jogadores);
  sortearLetra();

}

function sortearLetra(){

  let  letraSorteada = letras[Math.floor((Math.random()*letras.length))];

  verificarLetrasJaSorteadas(letraSorteada);
  
  document.getElementById('letraSorteada').innerHTML = letraSorteada;
  
}

function verificarLetrasJaSorteadas(letraSorteada){

   //verifica se a letra sorteada consta na lista de letras que já foram sorteadas
  let jaFoiSorteada  = letrasJaSorteadas.includes(letraSorteada);

  if(jaFoiSorteada == false){

    letrasJaSorteadas.push(letraSorteada);
  
  } else{

    while(jaFoiSorteada == true){

      letraSorteada = letras[Math.floor((Math.random()*letras.length))];
      jaFoiSorteada  = letrasJaSorteadas.includes(letraSorteada)

      if(jaFoiSorteada == false){

        letrasJaSorteadas.push(letraSorteada);

      } 

    }

  }

}

function classificarJogadores(){

  jogadores.sort(function(a,b){
    if(a.pontosTotal > b.pontosTotal){
      return -1;
    } else{
      return true;
    }
  });

}
