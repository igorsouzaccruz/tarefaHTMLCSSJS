let nomeq1;
// let nomeq1Length = nomeq1.length;



const getValueInput = () =>{
    nomeq1 = document.getElementById("nomeq1").value; 
    document.getElementById("resposta01").innerHTML = nomeq1;
    let nomes = nomeq1.trim().split(/\s+/);
    console.log(nomes);
  }
  