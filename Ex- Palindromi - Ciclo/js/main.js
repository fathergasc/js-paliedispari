document.getElementById("submit").addEventListener("click", function () {
  const inputUser = document.getElementById("inputWord").value;
  console.log("Type of inputUser: " + typeof inputUser);
  const check = palindromeCheck(inputUser);
  console.log("valore vero o falso della funzione palindromeCheck: " + check);
  if (check == true) {
    alert(`La parola ${inputUser} è un palindromo`);
  } else {
    alert(`La parola ${inputUser} non è un palindromo`);
  }
});

// FUNCTIONS

function palindromeCheck(string) {
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
}


