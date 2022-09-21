
function isPalindrome(word){
    let re;
    word = word.toLowerCase().replace(re,'');
    const len = word.length;
    for (let i = 0; i<len/2; i++){
        if (word[i] !== word[len - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('kasur ini rUsak'));//true
console.log(isPalindrome('racecar'));//true
console.log(isPalindrome('halo'));//false