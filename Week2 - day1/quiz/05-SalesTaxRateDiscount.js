 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

 function getSalesDiscount(price,tax,discount){
    let totalSales = price;
    let diskon = price*(discount/100);
    let setelahDiskon = totalSales-diskon;
    let pajak = setelahDiskon*(tax/100);
    let totalPayment = setelahDiskon+pajak;
    
    if(isNaN(price) && isNaN(tax) && isNaN(discount)) {
    return "Price, tax, discount harus dalam angka";
    } else if(isNaN(tax)) {
        return "Pajak harus dalam angka";
    } else if(isNaN(price)){
        return "Price harus dalam angka";
    }
    //totalHargaPajak = parseInt(totalSales+pajak);

    let a = `Total Sales : Rp. ${totalSales}`;
    let b =  `Discount : Rp. ${diskon}`;
    let c = `Price After Discount : Rp. ${totalSales-diskon}`;
    let d = `Pajak : Rp. ${pajak}`;
    let e = `Total Payment : Rp. ${totalPayment}`;
    
    return a + "\n" + b + "\n" + c + "\n" + d + "\n" + e + "\n";
 }

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */