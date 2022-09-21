/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
    const percenGaji1 = taxGaji(gaji1) * 100
    const percenGaji2 = taxGaji(gaji2) * 100
    const percenGaji3 = taxGaji(gaji3) * 100
    const newgaji1 = gaji1 + (gaji1 * taxGaji(gaji1))
    const newgaji2 = gaji2 + (gaji2 * taxGaji(gaji2))
    const newgaji3 = gaji3 + (gaji3 * taxGaji(gaji3))
    const total = newgaji1 + newgaji2 + newgaji3
    
    return `
    Total gaji yang harus dibayar :  
    Emp1 : Rp.${gaji1} + Pajak(${percenGaji1}%)=Rp.${newgaji1}
    Emp1 : Rp.${gaji2} + Pajak(${percenGaji2}%)=Rp.${newgaji2}
    Emp1 : Rp.${gaji3} + Pajak($${percenGaji3}%)=Rp.${newgaji3}
    Total : Rp.${total}
    `
}

function taxGaji(gaji) {
    if (gaji >= 10000) {
        return (10 / 100).toFixed(2)
    } else if (gaji >= 1000 && gaji < 10000) {
        return (5 / 100).toFixed(2)
    } else if (gaji >= 100 && gaji < 1000) {
        return (2 / 100).toFixed(2)
    }
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */