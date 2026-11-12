module.exports = { calcularDesconto, verificarAprovacao, validarCadastro, calcularFrete, converterCelsiusParaFahrenheit, calcularTotal, validarSenha, verificarEstoque, calcularMedia };

//Questão 1
function calcularDesconto(valor, percentual) {
    if (valor <= 0 || percentual < 0 || percentual > 100) {
        throw new Error("Dados inválidos");
    }
    const desconto = valor * (percentual / 100);
    return valor - desconto;
}

//Questão 2
function verificarAprovacao(nota) {
    if (nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }
    if (nota >= 7) {
        return "Aprovado";
    }
    return "Reprovado";
}

//Questão 3
function validarCadastro(nome, idade, email) {
    if (!nome || nome.trim() === "") {
        return false;
    }
    if (!idade || idade < 18 || idade > 100) {
        return false;
    }
    if (!email || !email.includes("@")) {
        return false;
    }
    return true;
}

//Questão 4
function calcularFrete(valorCompra, distancia) {
    if (valorCompra < 0 || distancia < 0) {
        throw new Error("Valores inválidos");
    }
    if (valorCompra >= 200) {
        return 0;
    }
    return distancia * 2;
}

//Questão 5
function converterCelsiusParaFahrenheit(celsius) {
    if (typeof celsius !== "number") {
        throw new Error("A temperatura deve ser numérica");
    }
    return (celsius * 9 / 5) + 32;
}

//Questão 6
function calcularTotal(quantidade, precoUnitario) {
    if (quantidade < 0 || precoUnitario < 0) {
        throw new Error("Valores inválidos");
    }
    return quantidade * precoUnitario;
}
//Questão 7
function validarSenha(senha) {
    return senha.length >= 8 && senha.length <= 12 && senha.length !== 10;
}

//Questão 8
function verificarEstoque(estoque, quantidadeSolicitada) {
    if (quantidadeSolicitada < 0) {
        throw new Error("Quantidade inválida");
    }
    if (quantidadeSolicitada > estoque || quantidadeSolicitada === 0) {
        return "Estoque insuficiente";
    }
    return "Pedido aprovado";
}

//Questão 9
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}