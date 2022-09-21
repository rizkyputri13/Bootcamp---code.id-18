const checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false

    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)


    /*let char1 = stringOne.split(' ');
    let char2 = stringTwo.split(' ');
    char1.sort();
    char2.sort();

    for (let i = 0; i < stringOne.length; i++) {
      if(char1[i] != char2[i]){
        return false;
      } 
    }
    return true;*/

    if (stringOne.length !== stringTwo.length) 
    return false;

    return stringOne.split('').sort().join() === 
            stringTwo.split('').sort().join()
    
  }
  

  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false;