const prompt = require("prompt-sync")();

const mapUser = [];
const mapComp = [];
const rows = 10;
const cols = 10;
const shipsUser = [];
const shipsComp = [];

function Ship(row, col, size, orientation) {
	this.row = row;
	this.col = col;
	this.size = size;
	this.orientation = orientation;
	this.hits = 0;
}

function hit(ship) {
	ship.hits++;
	if (ship.hits === ship.size) {
		console.log(
			`¡Barco hundido en [${ship.row + 1},${ship.col + 1}] de longitud ${
				ship.size
			}!`
		);
	} else {
		console.log(`¡Barco tocado en [${ship.row + 1},${ship.col + 1}]!`);
	}
}

function generateMaps() {
	for (let i = 0; i < rows; i++) {
		mapUser[i] = new Array(cols).fill("---");
		mapComp[i] = new Array(cols).fill("---");
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
	for (let i = 1; i < 3; i++) {
		let placed = false;
		while (!placed) {
			const horizontal = parseInt(
				prompt(
					`\nDime la orientación que va a tener tu barco numero ${i} (0 = horizontal, 1 = vertical): `
				)
			);
			const startRow = parseInt(
				prompt(
					`\nDime la fila donde va a empezar tu barco número ${i} (Entre el 1 y el 10): `
				)
			);
			const startCol = parseInt(
				prompt(
					`\nDime la columna donde va a empezar tu barco número ${i} (Entre el 1 y el 10): `
				)
			);
			const shipSize = parseInt(
				prompt(
					`\nDime la longitud que va a tener tu barco número ${i} (Entre el 1 y el 4): `
				)
			);

			const esHorizontal = horizontal === 0 ? true : false;

			if (canPlaceShip(mapUser, startRow, startCol, shipSize, esHorizontal)) {
				placeShip(mapUser, startRow, startCol, shipSize, esHorizontal);

				const newShip = new Ship(startRow, startCol, shipSize, esHorizontal);
				shipsUser.push(newShip);

				placed = true;
			} else {
				console.log("Te has equivocado en un dato!!!");
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

				const newShip = new Ship(startRow, startCol, shipSize, horizontal);
				shipsComp.push(newShip);

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

	while (!areAllUsersShipsSunks() && !areAllCompsShipsSunks()) {
		const mapToAttack = turn % 2 !== 0 ? mapComp : mapUser;

		console.log("=====================================");

		if (turn % 2 !== 0) {
			console.log("¡Tu turno!");
			console.log("¿Dónde vas a atacar?");
			posX = parseInt(prompt(`    -La posición X (Entre el 1 y el 10): `));
			posY = parseInt(prompt(`    -La posición Y (Entre el 1 y el 10): `));
			posX--;
			posY--;
		} else {
			console.log("¡Turno de la máquina!");
			posX = Math.floor(Math.random() * rows);
			posY = Math.floor(Math.random() * cols);
		}

		const cell = mapToAttack[posX][posY];

		if (cell !== "---") {
			const ship = shipsComp.find(
				(ship) => ship.row === posX && ship.col === posY
			);

			if (ship) {
				hit(ship);

				if (ship.hits === ship.size) {
					console.log(
						`¡Barco hundido en [${ship.row + 1},${ship.col + 1}] de longitud ${
							ship.size
						}!`
					);
				} else {
					console.log(
						`¡Barco tocado en [${ship.row + 1},${ship.col + 1}] de longitud ${
							ship.size
						}!`
					);
				}
			}

			mapToAttack[posX][posY] = golpe;
			printMap(mapToAttack);
		} else {
			mapToAttack[posX][posY] = agua;
			console.log("¡Golpe Fallido!");
			console.log("=====================================");
		}

		turn++;
	}

	if (areAllUsersShipsSunks()) {
		console.log("¡¡¡Ha ganado la máquina!!!");
		printMap(mapUser);
	}

	if (areAllCompsShipsSunks()) {
		console.log("¡¡¡Has ganado tú!!!");
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
