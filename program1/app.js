//select elements
let button = document.getElementById("btn");
let heading = document.getElementById("heading");
let paragraph =document.getElementById("paragraph");

//Add click event
button.addEventListener("click",function (){
    heading.innerText="javascript is working!"
    paragraph.innerText=
     "In JavaScript, you can manage a paragraph element";
     paragraph.classList.add("active");
});