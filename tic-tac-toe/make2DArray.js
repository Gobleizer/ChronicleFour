export default function make2DArray(numberOfRows, numberOfCols, value) {
    return Array(numberOfRows).fill(null).map(() => Array(numberOfCols).fill(value));
} 
