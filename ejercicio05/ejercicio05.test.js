const { determinarTipoNumero } = require("./ejercicio05");

describe("retorna un string indicando si el numero introducido es positivo, negativo, nulo o si no es un numero", () => {
	test("retorna un string indicando que el numero introducido es positovo", () => {
		expect(determinarTipoNumero(1)).toBe("El numero es positivo");
	});

	test("retorna un string indicando que el numero introducido no es un numero", () => {
		expect(determinarTipoNumero("a")).toBe("No has introducido un numero");
	});

	test("retorna un string indicando que el numero introducido es negativo", () => {
		expect(determinarTipoNumero(-1)).toBe("El numero es negativo");
	});

	test("retorna un string indicando que el numero introducido es nulo", () => {
		expect(determinarTipoNumero(null)).toBe("El numero es nulo");
	});
});
