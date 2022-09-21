/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1,year2){
    kabisat = 0;
    notKabisat = 0;

    while (year1 <= year2){
        if (year1 == isKabisat(year1)){
            kabisat +=1;
        } else {
            notKabisat +=1;
        }

        year1++;
    }

    return `Total Kabisat : ${kabisat} \nNot Kabisat : ${notKabisat}`;
}

function isKabisat(year){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return year;
    } else {
        return false;
    }
}

console.log(howManyKabisat(1997,2021));