
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = [];
    if (matrix === undefined) return newMatrix;
    if (matrix.length !== 0) {
        for (let j = 0; j < matrix.length; j++) {
            if (j !== 0  && j % 2 !== 0) {
                matrix[j] = matrix[j].reverse();
            }
            for(let n = 0; n < matrix[j].length; n++) {
                if (matrix[j][n] !== null && matrix[j][n] !== undefined) {
                    newMatrix.push(matrix[j][n]);
                }
            }
        }
    }

  return newMatrix;
}
