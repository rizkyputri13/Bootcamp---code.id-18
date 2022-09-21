/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
    if (isNaN(start) || isNaN(end)) return "harus dalam angka"
    const gaji = end - start
    const rasio = gaji / start
    const persenNaik = rasio * 100
  
    if (persenNaik < 0) {
      return `Total penurunan income ${Math.floor(persenNaik)}%`
    }
    return `Total kenaikan income ${Math.ceil(persenNaik)}%`
  }

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%


