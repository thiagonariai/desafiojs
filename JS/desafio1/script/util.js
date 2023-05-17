//início da função para carregar as frutas
function inserir(frutas, listaProdutos) {
    for (let objeto of frutas) {
        let filhoLi = document.createElement('li');
        for (let propriedade in objeto) {
            if (propriedade == "nome") {
                listaProdutos.appendChild(filhoLi).textContent = `${objeto[propriedade]}`;
            } else {
                listaProdutos.appendChild(filhoLi).setAttribute('data-PrecoFruta', `${objeto[propriedade]}`);//Criei este dataAttribute para armazenar e poder somar o preço das frutas no total
            }
        }
    }
}//fim da função inserir


//função para adicionar item a cesta
function addCesta(idAdd, listaProdutosCesta, totalCompra) {
    const listaAdd = document.querySelectorAll(`#${idAdd} > li`); //selectorAll dentro da function para mapear todos as frutas listadas
    let produtosAdicionados = []; //criei um array adicional apenas para controlar se o item já está na cesta
    let soma = 0;
    listaAdd.forEach((produto)=>{    
        produto.addEventListener('click', function () {
            if (produtosAdicionados.indexOf(produto.textContent) === -1) {
                produtosAdicionados.push(produto.textContent);
                let liCesta = document.createElement('li');//declarado dentro do forEach para criar a quantidade correta de li dentro da cesta
                listaProdutosCesta.appendChild(liCesta).textContent = produto.textContent;
                soma += Number(produto.getAttribute('data-PrecoFruta'));
                totalCompra.value = soma.toFixed(2);//toFixed adicionado pois em algumas somas apareceram várias casas decimais
            } else {
                alert(`A fruta ${produto.textContent} já consta na sua cesta`);
            }
        }
        )
    });
}//fim da função addCesta
export { inserir, addCesta };