let images = [
    "https://designmodo.com/wp-content/uploads/2015/06/10-Cloudforce.jpg",
    "https://depicter.com/wp-content/uploads/2024/05/Crafting-Beautiful-WordPress-Sliders-min.jpg",
    "https://static.vecteezy.com/system/resources/previews/040/327/179/non_2x/professional-multipurpose-business-presentation-slider-layout-design-with-step-and-data-overview-infographic-vector.jpg"
];

let index = 0;

function next() {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    document.getElementById("slide").src = images[index];
}

function previous() {
    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    document.getElementById("slide").src = images[index];
}
