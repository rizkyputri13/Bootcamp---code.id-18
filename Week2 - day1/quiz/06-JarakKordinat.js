/**
 * Menghitung jarak kordinat
 * 𝑑 = √(𝑥1 − 𝑥2)^2 + (𝑦1 −𝑦2)^2
 */

function getCordinat(x1,y1,x2,y2) {
   if(isNaN(x1,y1,x2,y2)) {
       return "Input kordinat dalam angka"
   } 

   let a = (x1-x2);
   let b = (y1-y2);
   let c = (Math.pow(a,2));
   let d = (Math.pow(b,2));
   return Math.sqrt(c+d);
  
}

//return d = (Math.sqrt(x1-x2))*(Math.pow(Math.sqrt(x1-x2),2))+(Math.sqrt(y1-y2))*(Math.pow(Math.sqrt(y1-y2),2));

console.log(getCordinat(3,4,-4,-5)); //9
console.log(getCordinat("1","2","-1","-2")); //1
console.log(getCordinat("x","2","-y","-2")); //input kordinat dalam angka
console.log(getCordinat(3.2,4.5,-4.4,-5)); //13.695801445917125