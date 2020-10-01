// recuperation de mes variables //
let inputCalculette = document.querySelector('input');
let buttonCalculette = document.querySelectorAll('button');
let buttonEgal = document.getElementsByClassName('egal')[0];
let tableauButton = Array.from(buttonCalculette);

// debut du fonctionnement // 
tableauButton.forEach(element => {
    element.addEventListener('click', () => {
        if (element.innerText == 'c') {
            inputCalculette.value = ''
        } else {
            inputCalculette.value += element.innerText
        }
    })
})

// recuperation de mes variable +, -, /, * //
let buttonPlus = document.getElementsByClassName('plus')[0];
let buttonMoins = document.getElementsByClassName('min')[0];
let buttonMulti = document.getElementsByClassName('multi')[0];
let buttonDivi = document.getElementsByClassName('divi')[0];
let result;
let stock1 = 0;
let stock2 = 0;


// creation des actions de mes buttons // 
buttonPlus.addEventListener('click', () => {
    stock1 = inputCalculette.value
});

buttonMoins.addEventListener('click', () => {
    stock1 = inputCalculette.value
});

buttonMulti.addEventListener('click', () => {
    stock1 = inputCalculette.value
});

buttonDivi.addEventListener('click', () => {
    stock1 = inputCalculette.value
})


// fonctionement du button egal //
buttonEgal.addEventListener('click', () => {
    if (inputCalculette.value.includes('+')) {
        let indexPlus = inputCalculette.value.indexOf('+');
        stock2 = inputCalculette.value.slice(indexPlus + 1, inputCalculette.value.length);
        inputCalculette.value += buttonEgal.innerText;
        inputCalculette.value = parseInt(stock1) + parseInt(stock2)
    } else if (inputCalculette.value.includes('-')) {
        let indexMoins = inputCalculette.value.indexOf('-');
        stock2 = inputCalculette.value.slice(indexMoins + 1, inputCalculette.value.length);
        inputCalculette.value += buttonEgal.innerText;
        inputCalculette.value = parseInt(stock1) - parseInt(stock2)
    } else if (inputCalculette.value.includes('*')) {
        let indexMulti = inputCalculette.value.indexOf('*');
        stock2 = inputCalculette.value.slice(indexMulti + 1, inputCalculette.value.length);
        inputCalculette.value += buttonEgal.innerText;
        inputCalculette.value = parseInt(stock1) * parseInt(stock2)
    } else if (inputCalculette.value.includes('/')){
        let indexDivi = inputCalculette.value.indexOf('/');
        stock2 = inputCalculette.value.slice(indexDivi + 1, inputCalculette.value.length);
        inputCalculette.value += buttonEgal.innerText;
        inputCalculette.value = parseInt(stock1) / parseInt(stock2)
    }
})