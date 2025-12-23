const textInput = document.getElementById('text-input');
const encodeBtn = document.getElementById('encode-btn');
const decodeBtn = document.getElementById('decode-btn');
const result = document.getElementById('result');

encodeBtn.addEventListener('click', () => {
    try {
        const inputText = textInput.value;
        const encodedText = btoa(inputText);
        result.value = encodedText;
    } catch (error) {
        result.value = 'Error encoding text: ' + error.message;
    }
});

decodeBtn.addEventListener('click', () => {
    try {
        const inputText = textInput.value;
        const decodedText = atob(inputText);
        result.value = decodedText;
    } catch (error) {
        result.value = 'Error decoding text: Invalid Base64 string';
    }
});
