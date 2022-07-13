getValue = document.getElementById('btn');

getValue.addEventListener('click', function() {
    const number = document.getElementById('number').value;
    console.log(`number: ${number}`);
    const pariDispari = document.getElementById('pariDispari').value;
    console.log(`pariDispari: ${pariDispari}`);
    const randomNumber = generateRandomNumber(1, 5);
    console.log('Il numero random è ' + randomNumber);
    const sum = parseInt(number) + randomNumber;
    const result = oddOrEven(sum);
    alert('La somma è: ' + sum + '. Il numero è ' + result + '.');
    if (result == pariDispari) {
        alert('Hai vinto')     
    } else { 
        alert('Hai perso')
    }
})

// FUNCTIONS

//function to generate a random number
function generateRandomNumber(min, max) {
    if (typeof min == 'number' && typeof max == 'number') {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return false;
    }
}

//function to check if a number is odd or even
function oddOrEven(number) {
    if (number % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

