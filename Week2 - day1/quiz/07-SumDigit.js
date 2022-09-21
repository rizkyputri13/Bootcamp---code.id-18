/**
 * input 4 digit integer lalu hitung jumlahnya
 */

/*function sumDigit(n){
    if (toString.call(n) == "[object Array]")
    return true;
      var total =  0;
        for(var i=0;i<n.length;i++)
            {                  
             if(isNaN(n[i])){
            continue;
              }
                 total += Number(n[i]);
            }
    return total;        
}*/

function sumDigit(n){
  if(n > 10000) return `${n} harus lebih kecil dari 10000`
  if (isNaN(n)) return `${n} is not number, try again...`
  let digit1 = n.toString().split('');
  let digit2 = digit1.map(Number)
  return digit2.reduce((partialSum, acc) => partialSum + acc, 0);
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...