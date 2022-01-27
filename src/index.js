
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortedArr=[];
  if (matrix === undefined) return [];
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[i].length; j++) {   
      if (i%2===0) {
         var col=j;
        sortedArr.push(matrix[i][col]);
      }
      else if (i%2 !==0) {
        col=(matrix[i].length-1-j);
        sortedArr.push(matrix[i][col]) ;
      }
    }
  }
  return sortedArr;

}