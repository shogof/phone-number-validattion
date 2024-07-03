document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("num");
  const checkBtn = document.getElementById("valid");
  const clearBtn = document.getElementById("reset");
  const resultsDiv = document.getElementById("para");
  const usa = document.getElementById("select-area");
  checkBtn.addEventListener("click", function () {
    if (usa.selectedIndex == 2) {
      const phoneNumber = userInput.value.trim();
      if (phoneNumber === "") {
        alert("Please provide a phone number");
        return;
      }

      const isValid = validateUSPhoneNumber(phoneNumber);

      if (isValid) {
        resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
      } else {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
      }
    }
  });

  clearBtn.addEventListener("click", function () {
    resultsDiv.textContent = "";
  });

  function validateUSPhoneNumber(phoneNumber) {
    const regex = /^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})[- )]?\d{3}[- ]?\d{4}$/;
    return regex.test(phoneNumber);
  }
});
