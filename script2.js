function validateUSPhoneNumber(phoneNumber) {
  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;
  return regex.test(phoneNumber);
}

function validateIranPhoneNumber(phoneNumber) {
  const regex = /^(?:\+98|0)?9\d{9}$/;
  return regex.test(phoneNumber);
}

function validateAFPhoneNumber(phoneNumber) {
  const regex = /^((\+*)93|0093)?0?(7[0-9]{8})$/;
  return regex.test(phoneNumber);
}

document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("user-input");
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const resultsDiv = document.getElementById("results-div");
  const selectedOption = document.getElementById("select-area");

  checkBtn.addEventListener("click", () => {
    const phoneNumber = userInput.value.trim();

    if (phoneNumber === "") {
      resultsDiv.textContent = "Please provide a phone number";
      return;
    }

    let isValid;
    let country = "";
    switch (selectedOption.selectedIndex) {
      case 2:
        isValid = validateUSPhoneNumber(phoneNumber);
        country = "US";
        break;
      case 0:
        isValid = validateAFPhoneNumber(phoneNumber);
        country = "Afghanistan";
        break;
      default:
        isValid = validateIranPhoneNumber(phoneNumber);
        country = "Iran";
    }

    if (isValid) {
      resultsDiv.textContent = `Valid ${country} number: ${phoneNumber}`;
    } else {
      resultsDiv.textContent = `Invalid ${country} number: ${phoneNumber}`;
    }
  });

  clearBtn.addEventListener("click", () => {
    userInput.value = "";
    resultsDiv.textContent = "";
  });
});
