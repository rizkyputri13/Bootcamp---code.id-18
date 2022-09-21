/**
 * Convert rupiah to other currency
 */

 function convertToRupiah(money,type){
    const ctype = ['yen','usd','euro']
    const isType = ctype.find(str => str === type)
    if (type === 'yen') {
      exchange = money * 130.12
    }
  
    if (type === 'usd') {
      exchange = money * 14382.5
    }
  
    if (type === 'euro') {
      exchange = money * 16000.0
    }
    
    if (!isType) return 'no match type currency'
    return new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(exchange)
  }

//let yen = new Intl.NumberFormat()

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency