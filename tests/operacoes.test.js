// Questão 1 
describe("", () => {
    test("calcula desconto de 10%", () => {
        expect(calcularDesconto(100, 10)).toBe(90);
    });

    test("calcula desconto de 50%", () => {
        expect(calcularDesconto(200, 50)).toBe(100);
    });

    test("retorna erro para percentual inválido", () => {
        expect(() => calcularDesconto(100, 150)).toThrow("Dados inválidos");
    });
});

// Questão 2 
describe("", () => {
    test("deve aprovar aluno com nota acima de 7", () => {
        expect(verificarAprovacao(8).toBe("Aprovado"));
    });

    test("deve aprovar aluno com nota igual a 7", () => {
        expect(verificarAprovacao(7).toBe("Aprovado"));
    });

    test("deve reprovar aluno com nota abaixo de 7", () =>{
        expect(verificarAprovacao(6).toBe("Reprovado"));
    });

    test("deve retornar erro para nota negativa", () =>{
        expect(verificarAprovacao(-7).toThrow("Nota inválida"));
    });

    test("deve retornar erro para nota acima de 10", () => {
        expect(verificarAprovacao(11).toThrow("Nota inválida"));
    });
});

// Questão 3 
//test('deve retornar false se o nome estiver vazio', () => {});
//test('deve retornar false se o nome tiver apenas espaços', () => {});
//test('deve retornar false se a idade for menor que 18', () => {});
//test('deve retornar false se a idade for maior que 100', () => {});
//test('deve retornar false se o email não possuir @', () => {});
//test('deve retornar true se todos os dados forem válidos', () => {});

describe("", () => {
    test("deve retornar erro se estiver campo de nome vazio", () => {
        expect(validarCadastro("", 20, "fulado@email.com").toBe(false));
    });

    test("deve retornar ")
});

// Questão 4 
describe("", () => {

});

// Questão 5 
describe("", () => {

});

// Questão 6 
describe("", () => {
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
describe("", () => {
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
describe("", () => {
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
describe("", () => {
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

