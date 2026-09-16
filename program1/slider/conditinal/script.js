function checkMarks() {
  let marks = document.getElementById("marksInput").value;
  let resultText;

  if (marks >= 50) {
    resultText = "You Passed!";
  } else {
    resultText = "You Failed!";
  }

  document.getElementById("result").innerText = resultText;
}
