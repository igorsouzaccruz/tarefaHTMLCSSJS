let inputNomeQuestao01;
// let nomeq1Length = nomeq1.length;

function conversaoABNT(nomeCompleto) {
  let nomeConvertido =  "";
  let nomesNoArray = nomeCompleto.trim().split(/\s+/);
  let primeiroNome = nomesNoArray[0];
  let ultimoNome = nomesNoArray[nomesNoArray.length - 1];
  let primeiraLetraDosNomesNoArray = [];

  if(nomesNoArray.length > 1){
    nomeConvertido = ultimoNome + ", " + primeiroNome;
  }else{
    nomeConvertido = ultimoNome;
  }
  

  for (let nome = 1; nome < nomesNoArray.length - 1; nome++) {
    primeiraLetraDosNomesNoArray.push(nomesNoArray[nome].charAt(0));
  }

  primeiraLetraDosNomesNoArray.forEach(nome => {
    nomeConvertido += " " + nome;
  });

  return nomeConvertido;
}

const getValueInput = () => {
  inputNomeQuestao01 = document.getElementById("nomeq1").value;
  let respostaQuestao01 = conversaoABNT(inputNomeQuestao01);
  document.getElementById("resposta01").innerHTML = respostaQuestao01;
  document.getElementById("resposta01").style.background = 'white';
  document.getElementById("resposta01").style.color = '#006400';
};