const textField = document.getElementById('textField');
const calculateBtn = document.getElementById('calculateBtn');
const display = document.getElementById('display');
const emailField = document.getElementById('emailField');
const verifyBtn = document.getElementById('verifyBtn');
const emailDisplay = document.getElementById('emailDisplay');

calculateBtn.onclick = function() {
    const value = textField.value;
    display.textContent = value.length;
};

verifyBtn.onclick = function() {
    const emailValue = emailField.value;
    
    if (emailValue === '') {
        emailDisplay.textContent = '-';
        emailDisplay.style.color = '#00b894';
        return;
    }
    
    if (emailValue.includes('@')) {
        emailDisplay.textContent = 'Valid';
        emailDisplay.style.color = '#0a7e3e';
    } else {
        emailDisplay.textContent = 'Invalid';
        emailDisplay.style.color = '#c41e3a';
    }
};

textField.onkeydown = function(e) {
    if (e.key === 'Enter') {
        calculateBtn.click();
    }
};

emailField.onkeydown = function(e) {
    if (e.key === 'Enter') {
        verifyBtn.click();
    }
};
