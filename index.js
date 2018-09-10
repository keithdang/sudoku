//sudoku solver
const make = require("./makeSudoku");
const printSud = require("./printSudoku");
var puzzle = make.start();
console.log("filled");
printSud.start(puzzle);
console.log("unfilled");
printSud.partial(puzzle);
