let averageTemp = [];
averageTemp[0] = [21, 18, 25, 23, 19, 20];
averageTemp[1] = [24, 20, 19, 20, 22, 18];

console.log('averageTemp: ', averageTemp);

function printMatrix(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			console.table(matrix[i][j]);
		}
	}
}

printMatrix(averageTemp);

/* ***********************************  divider  *********************************** */

const matrix3 = [];
for (let i = 0; i < 3; i++) {
	matrix3[i] = [];
	for (let j = 0; j < 3; j++) {
		matrix3[i][j] = [];
		for (let k = 0; k < 3; k++) {
			matrix3[i][j][k] = i + j + k;
		}
	}
}
console.log('matrix3: ', matrix3);
