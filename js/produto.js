var loja;
(function (loja) {
    var Produto = /** @class */ (function () {
        function Produto(nome, preco) {
            this._nome = nome;
            this._preco = preco;
        }
        Object.defineProperty(Produto.prototype, "nome", {
            get: function () {
                return this._nome;
            },
            set: function (nome) {
                this._nome = nome;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Produto.prototype, "preco", {
            get: function () {
                return this._preco;
            },
            set: function (preco) {
                this._preco = preco;
            },
            enumerable: false,
            configurable: true
        });
        Produto.prototype.calcularPrecoFinal = function (imposto) {
            return this._preco + (this._preco * (imposto / 100));
        };
        return Produto;
    }());
    loja.Produto = Produto;
})(loja || (loja = {}));
