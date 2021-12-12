window.onload = function(){

  //mapear o DOM
  const btnBuscar = document.querySelector("#buscar");
  const numCep = document.querySelector("#numeroCEP");

  btnBuscar.addEventListener('click', function(){ //chama a função dadosCEP e passa como parâmetro o CEP digitado ao dar um clique no botão buscar
      dadosCEP(numCep.value);
  })

  //função que faz a requisição para receber os dados do viaCEP
  let dadosCEP = async function (cep){ //variável cep recebe o parâmetro passado no evento do botão

    let url = `http://viacep.com.br/ws/${cep}/json/`;//carega a url com o template string já com a variável cep

    try {
        let dadosFetch = await fetch(url);//faz a requisição no viacep
        let dadosJson = await dadosFetch.json();//recebe o json do viacep
        resultadoCep(dadosJson);//chama a função pra adicionar os dados no input  
    } catch (error) {
        alert(error);//faz um alerta no navegador para mostrar o erro (se houver)
    }//fim do try catch

  }//fim da função dadosCEP

  //função para varrer os dados recebidos do viacep(json) e adicioná-los no HTML conforme os campos
  function resultadoCep(dados){
    for(let campo in dados){//for in para varrer as propriedades do json recebido
        if(document.querySelector(`#${campo}`)){//se o campo for igual ao buscado nos dados
            document.querySelector(`#${campo}`).value = dados[campo];//adiciona os dados no campos correspondentes
        }//fm do if
    }//fim do for in
  
}//fim da function resultadoCep


}//fim do window.onload
