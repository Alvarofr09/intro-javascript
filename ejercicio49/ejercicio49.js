/**
 * Ejercicio 49
 * Se tienen los costes de produccion de tres departamentos (dulces,bebidas y conservas)
 * correspondientes a los 12 meses del ano anterior. Construir algoritmos que proporcionen:
 *
 * a) En que mes se registro el mayor coste de produccion de dulces?
 * b) Promedio anual de los costes de produccion de bebidas
 * c) En que mes se registro el mayor coste de produccion en bebidas, y en que mes el menor coste?
 * d) Cual fue el que tuvo menor coste de produccion en diciembre?
 *
 */

const { array } = require("yargs");

const cakes = [55, 40, 78, 45, 67, 21, 30, 90, 85, 73, 58, 25];
const drinks = [45, 67, 21, 30, 55, 40, 78, 45, 80, 66, 39, 74];
const preservedFood = [78, 45, 80, 66, 39, 74, 67, 21, 30, 90, 85, 73];

function getMaxCost(array) {
	let max = 0;
	let month;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
			month = i + 1;
		}
	}

	return { max, month };
}

function getMinCost(array) {
	let min = 99999;
	let month;
	for (let i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
			month = i + 1;
		}
	}

	return { min, month };
}

function getAverageCost(array) {
	let contador = array.length;
	let total = 0;

	for (let i = 0; i < array.length; i++) {
		total = total + array[i];
	}

	return total / contador;
}

function getLastCost(array) {
	for (let i = 0; i < array.length; i++) {
		if (i == array.length - 1) {
			return array[i];
		}
	}
}

function getPriceDecember(cakes, drinks, preserved) {
	for (let i = 0; i < cakes.length; i++) {
		if (i == cakes.length - 1) {
			return [cakes[i], drinks[i], preserved[i]];
		}
	}
}

function getMinPriceDecember(cakes, drinks, preserved) {
	let pricesDecember = getPriceDecember(cakes, drinks, preserved);
	let min = 99999;
	for (let i = 0; i < pricesDecember.length; i++) {
		if (pricesDecember[i] < min) {
			min = pricesDecember[i];
		}
	}

	return min;
}

module.exports = {
	getAverageCost,
	getLastCost,
	getMaxCost,
	getMinCost,
	getMinPriceDecember,
};
