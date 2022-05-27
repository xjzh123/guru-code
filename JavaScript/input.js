function input_encode() {
    text = document.forms.textform.textinput.value;
    console.log(`input_encode(${text})`)
    text2 = encode(text)
    document.getElementById("textoutput").innerHTML = text2
}

function input_decode() {
    text = document.forms.textform.textinput.value;
    console.log(`input_decode(${text})`)
    text2 = decode(text)
    document.getElementById("textoutput").innerHTML = text2
}