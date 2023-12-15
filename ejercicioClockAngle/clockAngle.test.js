const { simpleClockAngle } = require("./clockAngle");

describe("retorna el angulo entre el la 12 aguja del reloj y el numero introducido", () => {
	test("retorna que el angulo entre la aguja en la posicion de hora 6 y 12 es 36", () => {
		expect(simpleClockAngle(6)).toBe(36);
	});

	test("retorna que el angulo entre la aguja en la posicion de hora 5 y 12 es 30", () => {
		expect(simpleClockAngle(5)).toBe(30);
	});
	test("lanza un error al haber introducido un numero incorrecto", () => {
		expect(simpleClockAngle(60)).toBe("El numero introducido es incorrecto");
	});
});
