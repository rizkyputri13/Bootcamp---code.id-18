/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){

    let [y, m, d] = s.split("/");
    //let stDate = new Date(y, m, d);

    let stDate = new Date (s);
    if(isNaN(stDate)) {
        return `${s} is bad format date`;
    } 
    return stDate.toString();
}
    

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date