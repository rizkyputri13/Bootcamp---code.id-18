function maxWordLength(params) {
    let string1 = params.split(" ");

    let params1 = string1.sort((one, two) => one.length - two.length);
    return params1[params1.length - 1 ];

}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp