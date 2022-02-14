document.getElementById('error').style.display = 'none';
document.getElementById('success').style.display = 'none';
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
});
document.getElementById('submit-btn').addEventListener('click', function varifyPin() {
    const generatePin = document.getElementById('generate-input').value;
    const myPin = document.getElementById('calc-input').value
    document.getElementById('calc-input').value = ''

    if (generatePin == myPin) {
        document.getElementById('error').style.display = 'none';
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
})