const A = [6,6,6,4,4,3]
const B = [3,3,3,3,3]
 solution = (A, B) => {
    if(Math.max(...A) > A.length |Math.min(...A) < 1 | Math.max(...B) >30 | Math.min(...A) < 1 ) {
        return "invalid input "
    }

    let tab = new Array(A.length+1);
    tab[1] = 1;
    tab[2] = 2;
    
    

    for (let i = 3; i < tab.length; ++i) {
        tab[i] = tab[i-1] + tab[i-2];
        
    }
console.log(tab)
 var output = new Array(A.length);

  for (let i = 0; i < A.length; ++i) {
      if(!B[i] ){
          B[i] = 0
      }
      output[i] = tab[A[i]] % Math.pow(2,B[i]);
  }

    return output;
}
result = solution(A, B)
console.log(result)
