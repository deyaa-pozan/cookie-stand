// Get Slider Items
var sliderImage = Array.from(document.querySelectorAll(".slider-container img"))

//Get Number Of Slider
var sliderCount = sliderImage.length;

// Set Current Slides
var currentSlide = 1;

// Slide Number Element 
var slideNumberElement = document.getElementById("slider-number");

// Previous and Next Buttons 
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element 
var pagintionElement = document.createElement("ul");

// Set ID on Created UL Element 
pagintionElement.setAttribute("id", "pagintion-ul");

// Create list item based on slides count
for (let i = 1; i <= sliderCount; i++) {

    // Create the li 
    var paginationItem = document.createElement("li");
    // Set item attribute
    paginationItem.setAttribute("data-index", i);
    // Set item content
    paginationItem.appendChild(document.createTextNode(i));
    //Set item to the main ul list
    pagintionElement.appendChild(paginationItem);


}


// Add the create ul element to the page
document.getElementById("indicators").appendChild(pagintionElement);

// Get the new created ul 
var paginationCreatedUL = document.getElementById("pagintion-ul");

// Get pagination item
var paginationBullets = Array.from(document.querySelectorAll("#pagintion-ul li"));

// slide on click
for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function() {
        document.querySelector("#pagintion-ul li.active").classList.remove("active");
        document.querySelector(".slider-container img.active").classList.remove("active");
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }

}
theChecker();


// Function checker
function theChecker() {

    if (currentSlide == 1) {
        prevButton.classList.add("disabled");
        prevButton.onclick = '';
    } else if (currentSlide == sliderCount) {
        nextButton.classList.add("disabled");
        nextButton.onclick = '';
    } else {
        prevButton.classList.remove("disabled");
        nextButton.classList.remove("disabled");
        nextButton.onclick = nextSlide;
        prevButton.onclick = prevSlide;

    }
    //Set the slide number 
    slideNumberElement.textContent = "Slide " + currentSlide + " of " + sliderCount;

    // Set active class on current slide
    sliderImage[currentSlide - 1].classList.add("active");

    // Set active class on current pagination item 
    paginationCreatedUL.children[currentSlide - 1].classList.add("active");



}

// Next Slide Function 
function nextSlide() {
    document.querySelector("#pagintion-ul li.active").classList.remove("active");
    document.querySelector(".slider-container img.active").classList.remove("active");
    currentSlide++;
    theChecker();

}

// Next Slide Function 
function prevSlide() {
    document.querySelector("#pagintion-ul li.active").classList.remove("active");
    document.querySelector(".slider-container img.active").classList.remove("active");
    currentSlide--;
    theChecker();
}