const matrix = [
    ['X', 'O', 'O', 'O', 'O'], // 0 -> array
    ['O', 'O', 'O', 'O', 'O'], // 1 -> array
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
];

const displayMatrix = () => {
    for(let row of matrix) {
        // ['X', 'O', 'O', 'O', 'O'] -> 'X | O | O | O | O'
        console.log(row.join(" | "));
    }

    console.log('\n'); // a new line to be printed after matrix has been printed
}

const position = [0, 0]; // maintains the current position of X
// [row, column]

const moveRight = () => {
    // check if the position is on last column
    if(position[1] === 4) return; 
    // stop the execution of this function if column is 4

    const [row, column] = position; 
    // DESTRUCTURING --> 
    // from position extract the value at index 0 and put it in row
    // from position extract the value at index 1 and put it in column

    matrix[row][column] = 'O'; // overwriting the current position with O
    matrix[row][column + 1] = 'X';

    position[1] += 1; // updating the current position
}

const moveLeft = () => {
    if(position[1] === 0) return; 

    const [row, column] = position; 

    matrix[row][column] = 'O'; 
    matrix[row][column - 1] = 'X';

    position[1] -= 1;
}

const moveUp = () => {
    if(position[0] === 0) return; 

    const [row, column] = position; 

    matrix[row][column] = 'O'; 
    matrix[row - 1][column] = 'X';

    position[0] -= 1;
}

const moveDown = () => {
    if(position[0] === 4) return; 

    const [row, column] = position; 

    matrix[row][column] = 'O'; 
    matrix[row + 1][column] = 'X';

    position[0] += 1;
}


displayMatrix();

// node.org --> download the LTS version
// node & npm are going to be installed automatically.
// restart vs code

moveRight();
displayMatrix();

moveRight();
displayMatrix();

moveRight();
displayMatrix();

moveDown();
displayMatrix();

moveDown();
displayMatrix();


// CODE HAS A LOT OF DUPLICATE CODE.
// CODE HAS A LOT OF SCOPE FOR IMPROVEMENT
// DRY --> Dont Repeat Yourself
// we want to write GENERIC code
// to write clean code!!!!