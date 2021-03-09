module.exports = function towelSort(matrix) {
    if (!matrix || matrix === 0 || matrix.length === 0) {
        return [];
    } else {
        let n = matrix.length;
        let a = 0;
        let k = 0;
        let arr = new Array();
        for (let i = 0; i < n; i++) {
            k = 0;
            while (matrix[i][k]) {
                k++;
            }
            if (i % 2 === 0) {
                for (let j = 0; j < k; j++) {
                    arr[a] = matrix[i][j];
                    a++;
                }
            } else {
                for (let j = k - 1; j >= 0; j--) {
                    arr[a] = matrix[i][j];
                    a++;
                }
            }
        }
        return arr;
    }
};
