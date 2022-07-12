
document.getElementById('submit').addEventListener('click', function() {
    const inputUser = document.getElementById('inputWord').value;
    console.log('Type of inputUser' + typeof inputUser);
    const check = palindromeCheck(inputUser);
    console.log('valore vero o falso della funzione palindromeCheck' + check);
    if (check == true) {
        alert(`La parola ${inputUser} è un palindromo`);
    } else { 
        alert(`La parola ${inputUser} non è un palindromo`);
    }
})

// FUNCTIONS

function palindromeCheck(word) {
    const wordArraySplit = word.split('');
    console.log('wordArraySplit: ', wordArraySplit);
    const wordArraySplitReversed = wordArraySplit.reverse();
    console.log('wordArraySplitReversed: ', wordArraySplitReversed);
    const wordArrayToString = wordArraySplitReversed.join('');
    console.log('wordArrayToString: ', wordArrayToString);
    if (word == wordArrayToString) {
        return true;
    } else {
        return false;
    }
}