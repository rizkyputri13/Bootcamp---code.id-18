/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
    let totalSales = price;
    let pajak = tax;

    if(isNaN(price) && isNaN(tax)) {
    return "Price & pajak harus dalam angka";
    } else if(isNaN(tax)){
        return "Pajak harus dalam angka";
    } else if(isNaN(price)) {
        return "Price harus dalam angka";

    }
    totalHargaPajak = parseInt(totalSales+pajak);
    let a = `Total Sales : Rp. ${totalSales}`;
    let b = `Pajak : ${pajak}`;
    let c = `TotalHarga+Pajak : Rp. ${price + tax}`;

    return a + "\n" + b + "\n" + c + "\n" ;
}
  
console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
