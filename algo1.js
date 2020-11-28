  const N = 5
  const A = [3,4,4, 7]
 
 solution = (N, A) =>  {
    let output = [];
    for( let i = 0 ; i<N ; i ++) {
           output.push(0)
    }
    for (let i =0 ; i < A.length ; i++)
    {
        if( A[i] > N+1 | A[i] < 1 | N > 100000 | N<1){
           return "invalid input "
       }
        else if( A[i] > N ) {
        for( let i = 0 ; i<N ; i ++) 
        {
            output[i] = (Math.max(...output))
        }
      }
        else 
        output[A[i] - 1] ++
    }
  return output
 }

 console.log('resultat ' , solution(N , A) )