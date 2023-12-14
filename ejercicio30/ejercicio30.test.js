const {
	trianguloConsola,
	trianguloConsolaB,
	trianguloConsolaC,
} = require("./ejercicio30");

describe("retorna un triangulo con un numero especifico de filas", () => {
	test("section A", () => {
		const expectedOutput = "1\n" + "12\n" + "123\n";
		expect(trianguloConsola(3)).toBe(expectedOutput);
	});

	test("section B", () => {
		const expectedOutput = "1\n" + "22\n" + "333\n";
		expect(trianguloConsolaB(3)).toBe(expectedOutput);
	});
	test("section C", () => {
		const expectedOutput = "0 \n" + "1 2 \n" + "3 4 5 \n";
		expect(trianguloConsolaC(3)).toBe(expectedOutput);
	});
});
