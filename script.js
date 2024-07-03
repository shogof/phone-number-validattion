const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

function checkValidNumber(input) {
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);
  const isValid = phoneRegex.test(input);

  resultsDiv.style.color = isValid ? '#066637' : '#af0f0f';
  resultsDiv.innerHTML = `${isValid ? 'Valid' : 'Invalid'} US number: ${input}`;
}

checkBtn.addEventListener('click', () => {
  const input = userInput.value;
  if (input.length === 0) {
    resultsDiv.style.color = '#af0f0f';
    resultsDiv.innerHTML = 'Please provide a phone number';
  } else {
    checkValidNumber(input);
    userInput.value = '';
  }
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const input = userInput.value;
    checkValidNumber(input);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = '';
});
