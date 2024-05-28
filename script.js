
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var allElems = document.querySelectorAll(".elem");
var fixed = document.querySelector(".fixed-image");
allElems.forEach(function(elem){
    elem.addEventListener("mouseenter", function() {
        var image = elem.getAttribute("data-img");
        fixed.style.display = "block";
        fixed.style.backgroundImage = `url(${image})`;
    });
    elem.addEventListener("mouseleave", function(){
        fixed.style.display = "none";
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var allHeadings = document.querySelectorAll("#headings");
// console.log(imageContainer);
let previousDiv = null;

allHeadings.forEach(function(heading){
    heading.addEventListener("click", function(){
         // Reset the previous div's color if it exists
         if (previousDiv) {
            previousDiv.classList.remove('clicked');
        }
        // Set the clicked div's color to white
        heading.classList.add('clicked');
        // Update the previous div to the current one
        previousDiv = heading;
        // Retreiving the data
        let image1 = heading.getAttribute("data-img");

        let imageContainer = document.querySelector("#right"); //Be aware of using querySelectorAll

        imageContainer.style.backgroundImage = `url(${image1})`;
        
    })
})