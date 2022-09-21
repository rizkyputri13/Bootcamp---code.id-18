/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


 function getPeriodTimes(seconds) {
    if (isNaN(seconds)) return seconds + ' is not number'
    
    seconds = Number(seconds);
    
    let day = Math.floor(seconds / (3600 * 24));
    let hour = Math.floor(seconds % (3600 * 24) / 3600);
    let minute = Math.floor(seconds % 3600 / 60);
    let second = Math.floor(seconds % 60);
  
    let day1 = day > 0 ? day + (day == 1 ? " day, " : " hari ") : "";
    let hour1 = hour > 0 ? hour + (hour == 1 ? " hour, " : " jam ") : "";
    let minute1 = minute > 0 ? minute + (minute == 1 ? " minute, " : " menit ") : "";
    let second1 = second > 0 ? second + (second == 1 ? " second" : " detik") : "";
    return day1 + hour1 + minute1 + second1;
  }

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik