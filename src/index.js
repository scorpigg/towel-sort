
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined || matrix.length === 0){
        return [];
    }
    matrix.forEach((arr, i) => {
        if((i + 1) % 2 == 0){
            arr.reverse();
        }
    });
    return matrix.flat();
}
