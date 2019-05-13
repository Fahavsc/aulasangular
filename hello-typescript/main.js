var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
var num = 1;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (a, b) {
        return a + b;
    };
    return Matematica;
}());
