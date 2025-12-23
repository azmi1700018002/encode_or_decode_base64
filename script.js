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

result.addEventListener('click', () => {
    if (result.value) {
        navigator.clipboard.writeText(result.value)
            .then(() => {
                const originalValue = result.value;
                result.value = 'Copied to clipboard!';
                setTimeout(() => {
                    result.value = originalValue;
                }, 1500);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    }
});