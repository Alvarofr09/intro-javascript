const { number } = require("yargs");

var prompt = require("prompt-sync")();

const mapUser = [];
const mapComp = [];
const rows = 10;
const cols = 10;

function generateMaps() {
	for (let i = 0; i < rows; i++) {
		mapUser[i] = [i];
		mapComp[i] = [i];
		for (let j = 0; j < cols; j++) {
			mapUser[i][j] = "---";
			mapComp[i][j] = "---";
		}
	}
}

function printMap(mapa) {
	let mapPrint = "\n";
	for (let i = 0; i < mapa.length; i++) {
		for (let j = 0; j < mapa[i].length; j++) {
			mapPrint += "[" + mapa[i][j] + "]";
		}
		mapPrint += "\n";
	}

	console.log(mapPrint);
}

function placeShipsUser() {
	let startRow;
	let startCol;
	for (let i = 1; i < 3; i++) {
		let placed = false;
		while (!placed) {
			const horizontal = parseInt(
				prompt(
					`Dime la orientación que va a tener tu barco numero ${i} (0 = horizontal, 1 = vertical): `
				)
			);
			do {
				startRow = parseInt(
					prompt(
						`Dime la fila donde va a empezar tu barco número ${i} (Entre el 1 y el 10): `
					)
				);
			} while (!correctPosNumber(startRow));
			do {
				startCol = parseInt(
					prompt(
						`Dime la fila donde va a empezar tu barco número ${i} (Entre el 1 y el 10): `
					)
				);
			} while (!correctPosNumber(startCol));
			const shipSize = parseInt(
				prompt(
					`Dime la longitud que va a tener tu barco número ${i} (Entre el 1 y el 4): `
				)
			);

			const esHorizontal = horizontal === 0 ? true : false;

			if (canPlaceShip(mapUser, startRow, startCol, shipSize, esHorizontal)) {
				placeShip(mapUser, startRow, startCol, shipSize, esHorizontal);
				placed = true;
			} else {
				console.log("Te has equivocado en un dato");
			}
		}
	}
}

function placeShipsComp() {
	for (let i = 0; i < 10; i++) {
		let placed = false;
		while (!placed) {
			const horizontal = Math.round(Math.random()) === 0 ? true : false;
			const startRow = Math.floor(Math.random() * rows);
			const startCol = Math.floor(Math.random() * cols);
			const shipSize = Math.floor(Math.random() * 4);
			if (canPlaceShip(mapComp, startRow, startCol, shipSize, horizontal)) {
				placeShip(mapComp, startRow, startCol, shipSize, horizontal);
				placed = true;
			}
		}
	}
}

function canPlaceShip(board, row, col, size, orientation) {
	if (orientation) {
		if (col + size > cols) {
			return false;
		}
		for (let i = 0; i < size; i++) {
			if (board[row][col + i] !== "---") {
				return false;
			}
		}
	} else {
		if (row + size > rows) {
			return false;
		}
		for (let i = 0; i < size; i++) {
			if (board[row + i][col] !== "---") {
				return false;
			}
		}
	}

	return true;
}

function correctPosNumber(number) {
	if (number > 0 && number < 11) {
		console.log("Te has equivocado el numero tiene que ser entre 1 y 10");
		return true;
	}
	return false;
}

// function correctOrientationNumber(number) {
// 	if (number > 0 && number < 2) {
// 		console.log("Te has equivocado el numero tiene que ser entre 1 y 10");
// 		return true;
// 	}
// 	return false;
// }

// function correcSizetNumber(number) {
// 	if (number > 0 && number < 11) {
// 		console.log("Te has equivocado el numero tiene que ser entre 1 y 10");
// 		return true;
// 	}
// 	return false;
// }

function placeShip(map, row, col, size, orientation) {
	if (orientation) {
		for (let i = 0; i < size; i++) {
			map[row][col + i] = "-#-";
		}
	} else {
		for (let i = 0; i < size; i++) {
			map[row + i][col] = "-#-";
		}
	}
}

function situation() {
	console.log("==================================================");
	console.log("Tu mapa con los barcos");
	console.log("==================================================");
	printMap(mapUser);

	console.log(
		"\n" + "--------------------------------------------------" + "\n"
	);

	console.log("==================================================");
	console.log("Intenta atacar al enemigo");
	console.log("==================================================");
	printMap(mapComp);
}

function attack() {
	const agua = "///";
	const golpe = "***";
	let posX = 0;
	let posY = 0;
	let turn = 1;
	let mapToAttack;

	while (!areAllUsersShipsSunks() && !areAllCompsShipsSunks()) {
		if (turn % 2 !== 0) {
			mapToAttack = mapComp;
			console.log("=====================================");

			console.log("Tu turno");
			console.log("Donde vas a atacar?");
			posX = parseInt(prompt(`    -La posicion X (Entre el 1 y el 10): `));
			posY = parseInt(prompt(`    -La posicion Y (Entre el 1 y el 10): `));
			posX--;
			posY--;
		} else {
			mapToAttack = mapUser;
			posX = Math.floor(Math.random() * rows);
			posY = Math.floor(Math.random() * cols);

			console.log("=====================================");
			console.log("Turno de la maquina");
		}

		if (mapToAttack[posX][posY] !== "---") {
			mapToAttack[posX][posY] = golpe;
			console.log("Le has dado a un barco enemigo");
			console.log("=====================================");
		} else {
			mapToAttack[posX][posY] = agua;
			console.log("Has fallado el golpe");
			console.log("=====================================");
		}
		turn++;
	}

	if (areAllUsersShipsSunks()) {
		console.log("Ha ganado la maquina");
		printMap(mapUser);
	}

	if (areAllCompsShipsSunks()) {
		console.log("Has ganado tu");
		printMap(mapComp);
	}
}

function areAllUsersShipsSunks() {
	for (let i = 0; i < mapUser.length; i++) {
		for (let j = 0; j < mapUser[i].length; j++) {
			if (mapUser[i][j] === "-#-") {
				return false;
			}
		}
	}
	return true;
}

function areAllCompsShipsSunks() {
	for (let i = 0; i < mapComp.length; i++) {
		for (let j = 0; j < mapComp[i].length; j++) {
			if (mapComp[i][j] === "-#-") {
				return false;
			}
		}
	}
	return true;
}
generateMaps();
placeShipsComp();
placeShipsUser();

situation();
attack();
