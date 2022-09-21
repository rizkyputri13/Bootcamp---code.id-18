function isCharsUnique(string){

    let char = string.split('');
    let unique = true;

    for (let i = 0; i < char.length; i++) {
        for (let j= 0; j < char.length; j++){
            if(i == j) continue
            if(char[i] === char[j]) unique = false;
        }
    }

    return unique;

    

}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false