const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Function to handle checking and displaying validity
function checkValidNumber(input) {
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );
  const isValid = phoneRegex.test(input);
  
  // Update resultsDiv based on validity
  resultsDiv.style.color = isValid ? '#066637' : '#af0f0f';
  resultsDiv.innerHTML = `${isValid ? 'Valid' : 'Invalid'} US number: ${input}`;
}

// Event listener for checking on button click
checkBtn.addEventListener('click', () => {
  const input = userInput.value;
  if (input.length === 0) {
    resultsDiv.style.color = '#af0f0f'; // Update color for error message
    resultsDiv.innerHTML = 'Please provide a phone number'; // Update error message
  } else {
    checkValidNumber(input); // Call function to check validity
    userInput.value = ''; // Clear input after checking
  }
});

// Event listener for checking on Enter key press
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const input = userInput.value;
    checkValidNumber(input); // Call function to check validity
    userInput.value = ''; // Clear input after checking
  }
});

// Event listener to clear results
clearBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = ''; // Clear resultsDiv
});
