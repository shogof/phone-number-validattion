document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('user-input');
  const checkBtn = document.getElementById('check-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultsDiv = document.getElementById('results-div');

  const selectedOption = document.getElementById('select-area');
  checkBtn.addEventListener('click', () => {
    const phoneNumber = userInput.value.trim();
    if (phoneNumber === '') {
      alert('Please provide a phone number');
      return;
    }

    function validateUSPhoneNumber(phoneNumber) {
      const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
      return regex.test(phoneNumber);
    }

    function validateIranhoneNumber(phoneNumber) {
      const regex = /^(?:\+98|0)?9\d{9}$/;
      return regex.test(phoneNumber);
    }

    function validateAFPhoneNumber(phoneNumber) {
      const regex = /^((\+*)93|0093)?0?(7[0-9]{8})$/;
      return regex.test(phoneNumber);
    }
    if (selectedOption.selectedIndex === 2) {
      const isValid = validateUSPhoneNumber(phoneNumber);

      if (isValid) {
        resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
      } else {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
      }
    } else if (selectedOption.selectedIndex === 0) {
      const isValid = validateAFPhoneNumber(phoneNumber);

      if (isValid) {
        resultsDiv.textContent = `Valid Afghan number: ${phoneNumber}`;
      } else {
        resultsDiv.textContent = `Invalid Afghan number: ${phoneNumber}`;
      }
    } else {
      const isValid = validateIranhoneNumber(phoneNumber);

      if (isValid) {
        resultsDiv.textContent = `Valid Iran number: ${phoneNumber}`;
      } else {
        resultsDiv.textContent = `Invalid Iran number: ${phoneNumber}`;
      }
    }
  });

  clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
  });
});
