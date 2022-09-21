function isArraysEqual(arrayA, arrayB) {
    // if (arrayA === arrayB) {
    //     return true;
    // } else if (arrayA !== arrayB){
    //     return false;
    // }

    if (arrayA.length != arrayB.length){
        return false;
    }

    arrayA = arrayA.sort();
    arrayB = arrayB.sort();
    for (let i = 0; i< arrayA.length; i++) {
        if(arrayA[i] !== arrayB[i]){
            return false;
        }
        return true;
    }
}

const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
