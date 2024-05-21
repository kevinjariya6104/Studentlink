// script.js
const textInput = document.getElementById('myText');
const submitButton = document.getElementById('submitButton');
const output = document.getElementById('output');

submitButton.addEventListener('click', function () {
    const enteredText = textInput.value;
    output.textContent = `You entered: ${enteredText}`;
});
