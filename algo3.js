//cet algorithme n'a pas la bonne solution mais malgré cela 
//je vous ai envoyé pour voir la manière dont j'ai réfléchi
solution = (A) => {
      
    if(A.length == 0 ){
        return 0
    }
   let somme = A.reduce((T,x) => T + x ,0)
   let output = []

   if(somme == 0 )
   {
    for(let i = 0; i < A.length; ++i)
    {
        output[i] = 1
    }
    return output
   }
   let max = Math.max(...A)
   let pos = []
   let neg = []
   for (let i = 0; i < A.length; ++i) 
   {
    
    if(A[i] < 0)
    {
        neg.push(A[i])
    }
    else pos.push(A[i])
    }

    let somme1 = pos.reduce((T,x) => T + x ,0)
    let somme2 = neg.reduce((T,x) => T + x ,0)
    
     if(somme1 != Math.abs(somme2)){
        for (let i = 0; i < A.length; ++i) 
        {
         
         if(A[i] < 0)
         {
             output[A.indexOf(A[i])] =1
         }
         else output[A.indexOf(A[i])] = -1
         }
         return output
     
     }
}
A =[1,8,-1,-8,5]
console.log(solution(A))