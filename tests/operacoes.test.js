const { calcularDesconto, verificarAprovacao, validarCadastro, calcularFrete, converterCelsiusParaFahrenheit, calcularTotal, validarSenha, verificarEstoque, calcularMedia } = require("../src/operacoes");

// Questão 1 
describe("Testes da função calcularDesconto", () => {
    test("deve calcular o desconto de 10%", () => {
        expect(calcularDesconto(100, 10)).toBe(90);
    });

    test("deve calcular o desconto de 50%", () => {
        expect(calcularDesconto(200, 50)).toBe(100);
    });

    test("deve retornar erro para percentual inválido", () => {
        expect(() => calcularDesconto(100, 150)).toThrow("Dados inválidos");
    });
});

// Questão 2 
describe("Testes da função verificarAprovacao", () => {
    test("deve aprovar aluno com nota acima de 7", () => {
        expect(verificarAprovacao(8)).toBe("Aprovado");
    });

    test("deve reprovar aluno com nota abaixo de 7", () => {
        expect(verificarAprovacao(6)).toBe("Reprovado");
    });

    test("deve retornar erro para nota negativa", () => {
        expect(() => verificarAprovacao(-7)).toThrow("Nota inválida");
    });

    test("deve retornar erro para nota acima de 10", () => {
        expect(() => verificarAprovacao(11)).toThrow("Nota inválida");
    });
});

//Questão 3
describe("Testes da função validarCadastro", () => {
    test("Todos os dados são válidos.", () => {
        expect(validarCadastro("Maria", 20, "fulado@email.com")).toBe(true);
    });

    test("Todos os dados são inválidos", () => {
        expect(validarCadastro("", 15, "fulano.email.com")).toBe(false);
    });

    test("O nome está vazio", () => {
        expect(validarCadastro("", 20, "fulano@email.com")).toBe(false);
    });

    test("O nome contém apenas espaços", () => {
        expect(validarCadastro("   ", 20, "fulano@email.com")).toBe(false);
    })

    test("A idade está vazia.", () => {
        expect(validarCadastro("Maria", "maria@email.com")).toBe(false);
    });

    test("A idade está abaixo do limite permitido.", () => {
        expect(validarCadastro("Maria", 15, "maria@email.com")).toBe(false);
    });

    test("A idade está acima do limite permitido.", () => {
        expect(validarCadastro("Maria", 101, "maria@email.com")).toBe(false);
    });

    test("O e-mail está vazio", () => {
        expect(validarCadastro("Maria", 18, "")).toBe(false);
    });

    test("O e-mail não contém o caractere @", () => {
        expect(validarCadastro("Maria", 18, "maria.email.com")).toBe(false);
    });
});

// Questão 4 
describe("Testes da função calcularFrete", () => {
    test("deve retornar frete grátis para compras acima de 200", () => {
        expect(calcularFrete(250, 10)).toBe(0);
    });

    test("deve retornar valor do frete para comprar abaixo de 200", () => {
        expect(calcularFrete(100, 10)).toBe(20);
    });

    test("deve retornar frete grátis para compras acima de 200", () => {
        expect(calcularFrete(200, 10)).toBe(0);
    });

    test("deve retornar valor do frete para comprar abaixo de 200", () => {
        expect(calcularFrete(0, 10)).toBe(20);
    });

    test("deve retornar erro para compras de valor negativo", () => {
        expect(() => calcularFrete(-50, 10)).toThrow("Valores inválidos");
    });

    test("deve retornar erro para frete de valor negativo", () => {
        expect(() => calcularFrete(100, -5)).toThrow("Valores inválidos");
    });

});

// Questão 5
describe("Testes da Função converterCelsiusParaFahrenheit()", () => {

    test("Caso 1: a entrada é 0°C e o resultado esperado é 32", () => {
        expect(converterCelsiusParaFahrenheit(0)).toBe(32);
    });

    test("Caso 2: a entrada é 100°C e o resultado esperado é 212", () => {
        expect(converterCelsiusParaFahrenheit(100)).toBe(212);
    });

    test("Caso 3: a entrada é -40°C e o resultado esperado é -40", () => {
        expect(converterCelsiusParaFahrenheit(-40)).toBe(-40);
    });

    test("Caso 4: a entrada é 25°C e o resultado esperado é 77", () => {
        expect(converterCelsiusParaFahrenheit(25)).toBe(77);
    });

    test("Caso 5: a entrada é '25' e o resultado esperado é um erro", () => {
        expect(() => converterCelsiusParaFahrenheit("25"))
            .toThrow("A temperatura deve ser numérica");
    });

    test("Caso 6: a entrada é 'abc' e o resultado esperado é um erro", () => {
        expect(() => converterCelsiusParaFahrenheit("abc"))
            .toThrow("A temperatura deve ser numérica");
    });

});
// Questão 6 
describe("Testes da função calcularTotal", () => {
    test("deve calcular o total corretamente", () => {
        expect(calcularTotal(3, 10)).toBe(30);
    });

    test("deve retornar zero quando a quantidade for zero", () => {
        expect(calcularTotal(0, 10)).toBe(0);
    });

    test("deve lançar erro quando a quantidade for negativa", () => {
        expect(() => calcularTotal(-2, 10)).toThrow("Valores inválidos");
    });

    test("deve calcular o total com preço negativo", () => {
        expect(calcularTotal(2, -5)).toBe(-10);
    });
});

// Questão 7
describe("Testes da função validarSenha", () => {
    test("deve aceitar senha com 8 caracteres", () => {
        expect(validarSenha("abc12345")).toBe(true);
    });

    test("deve rejeitar senha com menos de 8 caracteres", () => {
        expect(validarSenha("abc123")).toBe(false);
    });

    test("deve rejeitar senha com 10 caracteres", () => {
        expect(validarSenha("abc1234567")).toBe(false);
    });

    test("deve aceitar senha com 12 caracteres", () => {
        expect(validarSenha("abc123456789")).toBe(true);
    });

});

// Questão 8 
describe("Testes da função verificarEstoque", () => {
    test("deve aprovar pedido quando há estoque suficiente", () => {
        expect(verificarEstoque(20, 5)).toBe("Pedido aprovado");
    });

    test("deve informar estoque insuficiente", () => {
        expect(verificarEstoque(5, 10)).toBe("Estoque insuficiente");
    });

    test("deve aprovar pedido com quantidade igual ao estoque", () => {
        expect(verificarEstoque(10, 10)).toBe("Pedido aprovado");
    });

    test("deve retornar estoque insuficiente para quantidade zero", () => {
        expect(verificarEstoque(10, 0)).toBe("Estoque insuficiente");
    });

    test("deve lançar erro para quantidade negativa", () => {
        expect(() => verificarEstoque(10, -2))
            .toThrow("Quantidade inválida");
    });
});

// Questão 9
describe("Testes da função", () => {
    test("Teste 1", () => {
        expect(calcularMedia(8, 6)).toBe(7);
    });

    test("Teste 2", () => {
        expect(calcularMedia(10, 10)).toBe(10);
    });

    test("Teste 3", () => {
        expect(calcularMedia(0, 8)).toBe(4);
    });
    test("Teste 4", () => {
        expect(calcularMedia(-1, 8)).toBe(3.5);
    });

    test("Teste 5", () => {
        expect(calcularMedia(5, 15)).toBe(10);
    });
});

module.exports = {
    calcularDesconto, verificarAprovacao, validarCadastro, calcularFrete, converterCelsiusParaFahrenheit,
    calcularTotal, validarSenha, verificarEstoque, calcularMedia
};