let inputText = '';
let outputText = '';

showImage();

function checkValidString(inputText) {
    let regex = /[áàâãéèêíïóôõöúçñ]|[A-Z]/;

    if (!(regex.test(inputText)) && (inputText != '')) {
        return true;
    } else {
        return false;
    }
}

function encrypt() {
    inputText = document.querySelector('#input-text').value;

    if (checkValidString(inputText)) {
        outputText = inputText.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        document.querySelector('#output-text').value = outputText;
        showResult();
    } else {
        showImage();
        const placeHolder = document.querySelector('#input-text');
        placeHolder.value = '';
        placeHolder.placeholder = 'Apenas letras minúsculas e sem acento.';
    }
}

function decrypt() {
    inputText = document.querySelector('#input-text').value;

    if (checkValidString(inputText)) {
        outputText = inputText.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        document.querySelector('#output-text').value = outputText;
    } else {
        const placeHolder = document.querySelector('#input-text');
        placeHolder.value = '';
        placeHolder.placeholder = 'Apenas letras minúsculas e sem acento.';
    }
}

function showImage() {
    document.getElementById('empty-text-alert').style.display = 'flex';
    document.getElementById('secondary-btn-div').style.display = 'none';
    document.getElementById('secondary-text-field').style.display = 'none';
}

function showResult() {
    document.getElementById('empty-text-alert').style.display = 'none';
    document.getElementById('secondary-btn-div').style.display = 'flex';
    document.getElementById('secondary-text-field').style.display = 'flex';
}

function copyText() {
    const inputTest = document.querySelector('#output-text');
    inputTest.select();
    document.execCommand('copy');
}
