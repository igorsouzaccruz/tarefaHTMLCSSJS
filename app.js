let nomeq1;
// let nomeq1Length = nomeq1.length;



const getValueInput = () =>{
    nomeq1 = document.getElementById("nomeq1").value; 
    document.getElementById("resposta01").innerHTML = nomeq1;
    let nomes = nomeq1.trim().split(/\s+/);
    let ultimoNome = nomes[nomes.length -1];
    console.log(nomes);
    let primeiraLetraNomeNoArray = [];
    for (let nome = 0; nome < nomes.length - 1; nome++) {
      primeiraLetraNomeNoArray.push(nomes[nome].charAt(0)); 
    }
    console.log(ultimoNome);
    console.log(primeiraLetraNomeNoArray);
  }
  