//creating a sudoku puzzle in string format
var str="0 9 0 0 4 2 1 3 6\n0 0 0 9 6 0 4 8 5\n0 0 0 5 8 1 0 0 0\n0 0 4 0 0 0 0 0 0\n5 1 7 2 0 0 9 0 0\n6 0 2 0 0 0 3 7 0\n1 0 0 8 0 4 0 2 0\n7 0 6 0 0 0 8 1 0\n3 0 0 0 9 0 0 0 0";
//converting string to 2D array
var arr=str.split("\n");
var arr1=[]
arr.map(function(str){
    var i=str.split(" ")
    var j=[];
    i.map(function(a){
j.push(parseInt(a));
    })
  
    arr1.push(j);
})
_board=arr1;


sodokoSolver(_board);
console.log(_board);

function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        //creating grid of 3x3
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}


function sodokoSolver(data) {
    //checking values row and column wise
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        //checking if the value is 0
      if (data[i][j] == 0) {
        for (let k = 1; k <= 9; k++) {
            //check whether value is present in grid
          if (isValid(data, i, j, k)) {
            data[i][j] = k;
          if (sodokoSolver(data)) {
           return true;
          } else {
           data[i][j] = 0;
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}