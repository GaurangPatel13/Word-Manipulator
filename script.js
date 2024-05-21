function toUpperCase(){
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.toUpperCase()
    document.getElementById('outputText').value = outputText
}

function toLowerCase(){
    const inputText = document.getElementById('inputText').value
    const outputText = inputText.toLowerCase()
    document.getElementById('outputText').value = outputText
}

function reverseText(){
    const inputText = document.getElementById('inputText').value
    const outputText = inputText.split('').reverse().join('')
    document.getElementById('outputText').value = outputText
}

function removeSpace(){
    const inputText = document.getElementById('inputText').value
    const outputText = inputText.replace(/\s+/g, "")
    document.getElementById('outputText').value = outputText
}

function removeDigit(){
    const inputText = document.getElementById('inputText').value
    const outputText = inputText.replace(/\d+/g, "")
    document.getElementById('outputText').value = outputText
}

function removeSpecial(){
    const inputText = document.getElementById('inputText').value
    const outputText = inputText.replace(/[^\w\s]/gi, "")
    document.getElementById('outputText').value = outputText
}