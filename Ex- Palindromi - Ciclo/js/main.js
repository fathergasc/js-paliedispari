document.getElementById("submit").addEventListener("click", function () {
  inputUser = document.getElementById("inputWord").value;
  inputUser = inputUser.toLowerCase();  
  console.log("Type of inputUser: " + typeof inputUser);
  const check = palindromeCheck(inputUser);
  console.log("valore vero o falso della funzione palindromeCheck: " + check);
  if (check == inputUser) {
    alert(`La parola ${inputUser} è un palindromo`);
  } else {
    alert(`La parola ${inputUser} non è un palindromo`);
  }
});

// FUNCTIONS

/*function palindromeCheck(string) {
  let stringArraySplit = string.split("");
  console.log("stringArraySplit: ", stringArraySplit);
  console.log('stringArraySplit.length: ', stringArraySplit.length);
  const stringArraySplitReversed = [];
  for (let i = stringArraySplit.length - 1; i >= 0; i--) {
    stringArraySplitReversed.push(stringArraySplit[i]); 
  }
  const stringReversed = stringArraySplitReversed.join("");
  console.log('stringReversed: ', stringReversed);
  
  console.log('log di array invertito dopo il ciclo: ' + stringReversed);

  if (stringReversed == string) {
    return true;
  } else {
    return false;
  }
} */

// function to check if a word is a palindrome

function palindromeCheck(string) {
  let stringReversed = [];

  for (let i = string.length - 1; i >= 0; i--) {
    stringReversed += string[i];
  }
  return stringReversed;
}

//to check if a sentence is a palindrome, remove spaces between words with .replaceAll()
//inputUser = inputUser.replaceAll(' ', ''); //       // first value to be replaced by the second value, in this case it's replacing a space with an empty string


