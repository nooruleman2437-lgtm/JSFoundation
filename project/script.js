function checkNumber() {
  let num = document.getElementById("numInput").value;
  let card = document.getElementById("resultCard");
  let title = document.getElementById("resultTitle");
  let text = document.getElementById("resultText");
  let image = document.getElementById("cardImage");

  if (num > 0) {
    title.innerText = "Positive Number";
    text.innerText = num + " is greater than zero.";
    image.src = "https://tse4.mm.bing.net/th/id/OIP.5I-KDH7kdnmENkRM8JmFqwAAAA?r=0&pid=Api&h=220&P=0";
  } else if (num < 0) {
    title.innerText = "Negative Number";
    text.innerText = num + " is less than zero.";
    image.src = "https://o.quizlet.com/R4Nbtguz8rH.VcAQB6JHuA.png";
  } else {
    title.innerText = "Zero";
    text.innerText = "The number is exactly zero.";
    image.src = "https://static.scientificamerican.com/dam/m/16bc5481963c5d8b/original/Blue-neon-number-zero-with-reflection.jpg?m=1729265182.251&w=1200";
  }

  card.style.display = "block";
}