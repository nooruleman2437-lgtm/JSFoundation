const button = document.getElementById("calcAge");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const dob = document.getElementById("dob").value;
  if (!dob) {
    resultDiv.textContent = "Please select your date of birth!";
    return;
  }

  const dobDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - dobDate.getFullYear();
  let months = today.getMonth() - dobDate.getMonth();
  let days = today.getDate() - dobDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});
