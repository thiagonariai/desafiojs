window.onload = function () {

    let frutas = [
        { nome: 'Limão', preco: 1.98 },
        { nome: 'Manga', preco: 2.99 },
        { nome: 'Banana Prata', preco: 6.50 },
        { nome: 'Maçã Fujii', preco: 5.50 },
        { nome: 'Melancia', preco: 2.29 },
    ];


    let listaProdutos = document.querySelector("#produtos");
    let listaProdutosCesta = document.querySelector("#cestaDoCliente");
    let totalCompra = document.getElementById('mostraTotalCompra');

    //início da função para carregar as frutas
    function inserir(frutas) {
        for (let objeto of frutas) {
            let filhoLi = document.createElement('li');
            for (let propriedade in objeto) {
                if (propriedade == "nome") {
                    listaProdutos.appendChild(filhoLi).textContent = `${objeto[propriedade]}`;
                } else {
                    listaProdutos.appendChild(filhoLi).setAttribute('data-PrecoFruta', `${objeto[propriedade]}`);
                }
            }
        }
    }//fim da função inserir
    inserir(frutas);

    //função para adicionar item a cesta
    function addCesta(idAdd) {
        const listaAdd = document.querySelectorAll(`#${idAdd} > li`);
        let produtosAdicionados = [];
        let soma = 0;
        for (let produto of listaAdd) {
            produto.addEventListener('click', function () {
                if (!produtosAdicionados.includes(produto.innerHTML)) {
                    produtosAdicionados.push(produto.innerHTML);
                    let liCesta = document.createElement('li');
                    listaProdutosCesta.appendChild(liCesta).textContent = produto.innerHTML;
                    let valor = Number(produto.getAttribute('data-PrecoFruta'));
                    soma += valor;
                    totalCompra.value = soma;
                } else {
                    alert(`A fruta ${produto.innerHTML} já consta na sua cesta`);
                }
            }
            )
        }
    }//fim da função addCesta
    addCesta('produtos');

}//fim do window.onload