/// <reference path="produto.ts" />

document.addEventListener("DOMContentLoaded", () => {
    let produto = new loja.Produto("Notebook", 2500);

    let nomeProduto = document.getElementById("nomeProduto");
    let precoProduto = document.getElementById("precoProduto");
    let inputImposto = document.getElementById("inputImposto") as HTMLInputElement;
    let btnCalcular = document.getElementById("btnCalcular");
    let resultado = document.getElementById("resultado");

    if (nomeProduto && precoProduto) {
        nomeProduto.textContent = Nome: ${produto.nome};
        precoProduto.textContent = Preço: R$ ${produto.preco.toFixed(2)};
    }

    if (btnCalcular && inputImposto && resultado) {
        btnCalcular.addEventListener("click", () => {
            let imposto = parseFloat(inputImposto.value);
            if (!isNaN(imposto)) {
                resultado.textContent = `Preço final: R$ ${produto.calcularPrecoFinal(imposto).toFixed(2)}`;
            } else {
                resultado.textContent = "Coloque um valor válido para o imposto.";
            }
        });
    }
});
