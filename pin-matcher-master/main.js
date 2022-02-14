document.getElementById('generate-btn').addEventListener('click', function () {
    const generatePin = Math.round(Math.random() * 10000)
    const generateInput = document.getElementById('generate-input')
    if (generatePin > 1000) {
        generateInput.value = generatePin;

    }
})
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'c') {
            calcInput.value = ''
        }
    }
    else {
        const prevNumber = calcInput.value;
        const newNumber = prevNumber + number;
        calcInput.value = newNumber;
    }
})