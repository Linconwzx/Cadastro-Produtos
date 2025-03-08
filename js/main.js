/// <reference path="produto.js" />
document.addEventListener("DOMContentLoaded", function () {
    var produto = new loja.Produto("Notebook", 2500);
    var nomeProduto = document.getElementById("nomeProduto");
    var precoProduto = document.getElementById("precoProduto");
    var inputImposto = document.getElementById("inputImposto");
    var btnCalcular = document.getElementById("btnCalcular");
    var resultado = document.getElementById("resultado");
    if (nomeProduto && precoProduto) {
        nomeProduto.textContent = "Nome: ".concat(produto.nome);
        precoProduto.textContent = "Pre\u00E7o: R$ ".concat(produto.preco.toFixed(2));
    }
    if (btnCalcular && inputImposto && resultado) {
        btnCalcular.addEventListener("click", function () {
            var imposto = parseFloat(inputImposto.value);
            if (!isNaN(imposto)) {
                resultado.textContent = "Pre\u00E7o final: R$ ".concat(produto.calcularPrecoFinal(imposto).toFixed(2));
            }
            else {
                resultado.textContent = "Por favor, insira um valor válido para o imposto.";
            }
        });
    }
});
