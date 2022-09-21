/** buat segitiga  */ 


for (let i = 0; i < 6; i++) 
      {let draw = " "
            for (let j=1; j<5-i; j++){
        draw += j +" ";
      }
     console.log(draw);
      }

// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

for (let i = 0; i < 6; i++) {
    {let draw2 =" "
        for (let j=1; j<6-i; j++){
    draw2 += 5 - j - i + 1 + " ";
}
    console.log(draw2);
}
}  

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

