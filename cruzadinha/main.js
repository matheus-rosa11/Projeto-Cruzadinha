var itens = [
    "ula",
    "registradores",
    "eprom",
    "quadcore",
    "cpu",
    "cs",
    "ram",
    "rom",
    "dma",
    "dualcore",
    "databus",
    "memoria",
    "addressbus",
    "flash",
    "i5",
    "i7",
  ];

  var verdadeiro = false;

  function responder() {
    var resposta = ipt_resposta.value;
    if (itens.includes(resposta)) {
      fillFactory(resposta);
    } else {
      alert("Essa palavra não existe");
    }

  }

  function fillFactory(resposta) {
    var palavra = document.querySelector("." + resposta);
    var nodePalavra = palavra.querySelectorAll("input");
    nodePalavra.forEach((v, i) => {
      // console.log(i);
      v.value = resposta[i];
      v.style.backgroundColor = 'rgb(161, 220, 161)';
      console.log(v)
      verdadeiro = true
    });
  }