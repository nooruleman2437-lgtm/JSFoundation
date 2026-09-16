document.getElementById("CTB").addEventListener("click",function(){
    let paragraph=document.getElementById("my paragraph");
    paragraph.textContent="DATA IS CHANGED";
});

//Quiz 2 Hightlight first city button
 document.getElementById("highlightfirstcity").addEventListener("click",function(){
    const firstcity = document.querySelector('#citylist ul li');//first <li>
    firstcity.classList.add("highlight");//Adds highlight style
 });

 //quiz 3 remove dom element
 document.getElementById('removeLastTask').addEventListener("click",function(){
    const taskList=document.getElementById('taskList');
    const lastTask=taskList.lastElementChild;//Get the last <li>
    if(lastTask){
        taskList.removeChild(lastTask);//remove it
    }
 });

 //Quiz 4 Event Handling
// Select the button
const btn = document.getElementById("myButton");
// Add click event listener
btn.addEventListener("click", function () {
  // What happens when button is clicked
  document.getElementById("message").textContent =
    "You clicked this button and i am event handling example :) ";
});

//Quiz 5 event delegation
// Event delegation on the parent <ul>
document
  .querySelector("#nameList ul")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      // Optional: Remove highlight from all
      const allItems = document.querySelectorAll("#nameList li");
      allItems.forEach((item) => (item.style.backgroundColor = ""));

      // Highlight the clicked one
      event.target.style.backgroundColor = "lightblue";
      console.log("Selected name:", event.target.textContent);
    }
  });
  //Quiz 6 Form Handling(Feedback Form)
// Ensure this runs after the DOM is fully loaded

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");
  const feedbackInput = document.getElementById("feedbackInput");
  const feedbackDisplay = document.getElementById("FeedbackDisplay");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const feedback = feedbackInput.value.trim();

    if (feedback === "") {
      alert("Please enter your feedback");
      return;
    }
    feedbackDisplay.textContent = "Your feedback: " + feedback;
    feedbackInput.value = ""; // optional: clears the input after submit
  });
});

//Quiz 7 DOM Content loaded
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM FULLY LOADED";
});

//Quiz 8 Toggle button highlights
document.getElementById("THL").addEventListener("click", function () {
  let descriptiontext = document.getElementById("descriptiontext");
  descriptiontext.classList.add("highlight");
});