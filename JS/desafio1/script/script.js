import { inserir, addCesta } from './util.js'

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

    inserir(frutas, listaProdutos);
    addCesta('produtos', listaProdutosCesta, totalCompra);
}