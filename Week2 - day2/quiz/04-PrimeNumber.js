
function showPrimeNumber(n){
    
    let draw = " ";
    const number = [];
    for (let i = 0; i<=n; i++){
        number.push(i);
        
    }
    const prime = [];
    for (let j = 0; j < number.length; j++) {  
         if(isPrime(number[j])) 
         prime.push(number[j]);

    }
    return prime;
 }
 
 function isPrime(n){
    /*if (n > 1) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }  */

    for (let i = 2, re = Math.sqrt(n); i <= re; i++) 
         if (n % i === 0) 
          return false;
         return n>1;
 }
     
 console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */


