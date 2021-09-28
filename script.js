var cartas = [

    {
    nome: "Reinhardt",
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYfR33c4lKIAQcR7qo7wUoYAoNQaOGBG8Z2Q&usqp=CAU',
    atributos: {
    Ataque: 7,
    Defesa: 10,    
    Mobilidade: 3}
    }, 
    {
    nome: "Zarya",
    imagem: 'https://i.ytimg.com/vi/aYb54PnxRL8/maxresdefault.jpg',
    atributos: {
      Ataque: 8,
      Defesa: 9,
      Mobilidade: 2}
    },
    {
      nome: "D.va",
      imagem: 'https://s2.glbimg.com/q4NeAhAg5oL_cnTTW9WgxRLzFHI=/0x0:700x396/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2016/07/15/dva-gameplay.jpg',
      atributos: {
      Ataque: 6,
      Defesa: 9,      
      Mobilidade: 8}
    },
    {
    nome: "Sigma",
    imagem: 'https://s2.glbimg.com/XdO8l3TN0zWC27HHG-T0fokvudg=/0x0:4202x2364/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/2/z/bKPyTCS6avJx28e0XhTA/ovr-h31-web-sigmaheroshot-jpa-003b.jpg',
    atributos: {
      Ataque: 7,
      Defesa: 9,      
      Mobilidade: 2}
    },
    {
    nome: "Genji",
    imagem: 'https://www.wallpaperkiss.com/wimg/b/106-1060972_big.jpg',
    atributos: {
      Ataque: 8,
      Defesa: 4,      
      Mobilidade: 10}
    },
    {
    nome: "Tracer",
    imagem: 'https://i1.wp.com/gamehall.com.br/wp-content/uploads/2015/05/overwatch-tracer.jpg',
    atributos: {
      Ataque: 7,
      Defesa: 2,      
      Mobilidade: 8}
    },
    {
    nome: "Junkrat",
    imagem: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f2ecedd38a48a40de5da89d%2FOverwatch-hero-Junkrat%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D5120%26cropY1%3D79%26cropY2%3D2959',
    atributos: {
      Ataque: 10,
      Defesa: 2,      
      Mobilidade: 5}
    },
    {
    nome: "McCree",
    imagem: 'https://static1-br.millenium.gg/articles/1/74/61/@/104878-overwatch-mccree-amp_main_media_schema-1.jpg',
    atributos: {
      Ataque: 9,
      Defesa: 2,      
      Mobilidade: 2}
    },
    {
    nome: "Doomfist",
    imagem: 'https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blteaa0e1b882291a8d/5cef2273425980470abca5b9/doomfist-screenshot-001.jpg?auto=webp',
    atributos: {
      Ataque: 10,
      Defesa: 5,      
      Mobilidade: 8}
    },
    {
    nome: "Soldado: 76",
    imagem: 'https://uploads.jovemnerd.com.br/wp-content/uploads/Overwatch-Soldado-76.jpg',
    atributos: {
      Ataque: 8,
      Defesa: 3,      
      Mobilidade: 6}
    },
    {
    nome: "Ana",
    imagem:'https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt88adc11ef82b2f88/5cef225a7b48be290a7f87dc/ana-screenshot-004.jpg?auto=webp',
    atributos: {
      Ataque: 7,
      Defesa: 4,      
      Mobilidade: 1}
    },
    {
    nome: "Mercy",
    imagem: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2018/04/overwatch-mercy.png',
    atributos: {
      Ataque: 3,
      Defesa: 2,      
      Mobilidade: 8}
    },
    {
    nome: "Lúcio",
    imagem: 'https://cdn1.dotesports.com/wp-content/uploads/2018/08/11174512/e40d2d95-b509-411f-8f4c-bf7f69e14bff.jpg',
    atributos: {
      Ataque: 5,
      Defesa: 6,      
      Mobilidade: 10}
    },
    {
    nome: "Zenyatta",
    imagem: 'https://cdn1.dotesports.com/wp-content/uploads/2018/08/11171853/f63d9158-60d0-4191-bde6-deb783c3ef86.jpg',
    atributos: {
      Ataque: 9,
      Defesa: 4,      
      Mobilidade: 3}
    }    
    
];


var cartaMaquina;
var cartaJogador;
var pontosJogador = 0;
var pontosMaquina = 0;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];  
  
  var numeroCartaJogador = parseInt(Math.random() * cartas.length);  

  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
 }
  cartaJogador = cartas[numeroCartaJogador];
  
  
  

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;  
  
  
  exibirOpcoes();
  exibirCartaJogador();
  exibirPlacar();
  
}


function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = ""

  opcoesTexto += "<h2>Escolha o seu atributo</h2>"

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' id='"+ atributo +"' value='"+ atributo +"'> <label for='"+ atributo +"'>"
    opcoesTexto += atributo + "</label>"
  }

  opcoes.innerHTML = opcoesTexto;

}

function proximaRodada() {
  exibirPlacar();
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnProxima").disabled = true;

  var divCartaJogador = document.getElementById("carta-jogador");
  var htmlCartaJogador = ""
  divCartaJogador.innerHTML = htmlCartaJogador;

  var divCartaMaquina = document.getElementById("carta-maquina");
  var htmlCartaMaquina = ""
  divCartaMaquina.innerHTML = htmlCartaMaquina;

  var elementoResultado = document.getElementById("resultado")
  var htmlResultado = ""
  elementoResultado.innerHTML = htmlResultado;

  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = ""
  opcoes.innerHTML = opcoesTexto;

  var divResultadoRodada = document.getElementById("resultadoRodada");
  divResultadoRodada.innerHTML = ""
  
}

function exibirPlacar() {
  var placar = document.getElementById("placares")
  var htmlPlacares = ""
  htmlPlacares += `
  <div id="placarJogador">
       <h2>Você: ${pontosJogador} </h2>     
  </div>
  <div id="placarMaquina">
      <h2>Computador: ${pontosMaquina} </h2>
  </div>`

  placar.innerHTML = htmlPlacares;
  
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var htmlCartaJogador = ""

  htmlCartaJogador +=`<div id="carta">
  <div id='nomeCarta'>${cartaJogador.nome}</div>
  <div class="imgCarta">
 <img src="${cartaJogador.imagem}" alt="${cartaJogador.nome}">
  </div>
  <div class="atributos">
  <div class="atributo"><span >Ataque</span> <span>${cartaJogador.atributos.Ataque}</span></div>
  <div class="atributoD"><span>Defesa</span> <span>${cartaJogador.atributos.Defesa}</span></div>
  <div class="atributo"><span>Mobilidade</span> <span> ${cartaJogador.atributos.Mobilidade}</span></div>
</div>
</div>`

divCartaJogador.innerHTML = htmlCartaJogador;
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  var htmlCartaMaquina = ""

  htmlCartaMaquina +=`<div id="carta">
  <div id='nomeCarta'>${cartaMaquina.nome}</div>
  <div class="imgCarta">
 <img src="${cartaMaquina.imagem}" alt="${cartaMaquina.nome}">
  </div>
  <div class="atributos">
  <div class="atributo"><span >Ataque</span> <span>${cartaMaquina.atributos.Ataque}</span></div>
  <div class="atributoD"><span>Defesa</span> <span>${cartaMaquina.atributos.Defesa}</span></div>
  <div class="atributo"><span>Mobilidade</span> <span> ${cartaMaquina.atributos.Mobilidade}</span></div>
</div>

</div>`

divCartaMaquina.innerHTML = htmlCartaMaquina;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i =0; i < radioAtributos.length; i++){
    if(radioAtributos[i].checked) {
      return radioAtributos[i].value;
    } 
  }

}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado")
  var divResultadoRodada = document.getElementById("resultadoRodada")
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
  
    
  if (valorCartaMaquina < valorCartaJogador) {
    pontosJogador++  
    divResultadoRodada.innerHTML = "Você ganhou 1 ponto."
    
    document.getElementById("btnProxima").disabled = false;  
    exibirCartaMaquina();
    exibirPlacar();
    
  }else if (valorCartaMaquina > valorCartaJogador) {
    pontosMaquina++
    divResultadoRodada.innerHTML = "Computador ganhou 1 ponto."
       
    document.getElementById("btnProxima").disabled = false;
    exibirCartaMaquina();
    exibirPlacar();
  }  else {
     pontosJogador + 0;
    pontosMaquina + 0;
    divResultadoRodada.innerHTML = "Ninguém ganha ponto."
    
    document.getElementById("btnProxima").disabled = false;
    exibirCartaMaquina();
    exibirPlacar();
   }

    var divCartaJogador = document.getElementById("carta-jogador");
    

    var divCartaMaquina = document.getElementById("carta-maquina");
    

    var opcoes = document.getElementById("opcoes");
    

    var placar = document.getElementById("placares")
    
    var divResultadoRodada = document.getElementById("resultadoRodada");
    

    
   if(pontosJogador == 5){
    elementoResultado.innerHTML = "O jogo acabou. Parabéns, você ganhou!";

    document.getElementById("btnProxima").disabled = true;
    document.getElementById("btnNovoJogo").disabled = false;

    
    divCartaJogador.innerHTML = "";  
    divCartaMaquina.innerHTML = "";  
    opcoes.innerHTML= "";
    placar.innerHTML = "";
    divResultadoRodada.innerHTML = "";
     
  } else if(pontosMaquina == 5){
    elementoResultado.innerHTML = "O jogo acabou. O computador ganhou!";

    document.getElementById("btnProxima").disabled = true;
    document.getElementById("btnNovoJogo").disabled = false;
    
    divCartaJogador.innerHTML = "";  
    divCartaMaquina.innerHTML = "";
    opcoes.innerHTML= "";
    placar.innerHTML = "";
    divResultadoRodada.innerHTML = "";
    
  } else {
    elementoResultado.innerHTML =""
  }


  document.getElementById("btnJogar").disabled = true;   
  
}  
  
function novoJogo() {
  pontosJogador = 0;
  pontosMaquina = 0;

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnNovoJogo").disabled = true;

  var divCartaJogador = document.getElementById("carta-jogador");  
  divCartaJogador.innerHTML = "";

  var divCartaMaquina = document.getElementById("carta-maquina");  
  divCartaMaquina.innerHTML = "";

  var elementoResultado = document.getElementById("resultado");  
  elementoResultado.innerHTML = "";

  var divResultadoRodada = document.getElementById("resultadoRodada");
  divResultadoRodada.innerHTML = "";

  exibirPlacar();

}




 

