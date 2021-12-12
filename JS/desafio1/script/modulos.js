window.onload = function(){

    //Array de produtos já definidos
    let frutas = [
        {fruta: 'Limão', preco: 1.98},
        {fruta: 'Manga', preco: 2.99},
        {fruta: 'Banana Prata', preco: 3.50},
        {fruta: 'Maçã Fujii', preco: 3.98},
        {fruta: 'Melancia', preco: 1.29},
    ];

    //mapear os elementos
    let listaProdutos = document.querySelector("#produtos");
    let listaProdutosCesta = document.querySelector("#cestaDoCliente")

    //função que carrega as frutas juntamente com o HTML
    function inserir(frutas){

        //for of para percorrer o array produtos
        for(let pro of frutas){

            //criado dentro do for of p/ ter a mesma quantidade de elementos já definidos no array
            let filhoLi = document.createElement('li');

            //for in para percorrer as propriedades do array
            for(listaP in pro){

                if(listaP == 'preco'){//se a variável for igual a preço

                    //adiciona o data attibutes preço no li do produto
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP]);
                
                } else {

                    //caso não seja preço, no caso aqui é o nome do produto, será adicionado no HTML
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`

                }//fim do if/else
            }//fim do for in

        }//fim do for of
    }//fim da função inserir

    inserir(frutas);//chama a função inserir e passa como parâmetro o array das frutas

    
        
    //função para adicionar item a cesta
    function addCesta(idAdd){
           
        const listaAdd = document.querySelectorAll(`#${idAdd} > li`)

        for(let prod of listaAdd){

            prod.addEventListener('click', function(){
                let liCesta = document.createElement('li');
                listaProdutosCesta.appendChild(liCesta).textContent = prod.innerHTML;
                
            })//fim do addEvent

        }//fim do for of   
    }//fim do addCesta

    addCesta('produtos');

    //função para remover o item da lista
    function remover(idDel){

        const listaDel = document.querySelectorAll(`#${idDel} > li`)
        for(let prodDel of listaDel){

            prodDel.addEventListener('click', function(){
                prodDel.remove();
            })//fim do addEvent

        }//fim do for of   

    }//fim da função remover

    remover('cestaDoCliente');   

}//fim do window.onload