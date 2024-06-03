document.addEventListener('DOMContentLoaded', function () {
    // Array of image URLs and captions
    const slides = [
        { imgSrc: "static/images/img1.jpg" },
        { imgSrc: "static/images/img2.jpg" },
        { imgSrc: "static/images/img3.jpg" }
    ];

    // Function to create a slide
    function createSlide(slideData) {
        const slide = document.createElement("div");
        slide.className = "mySlides fade";
        slide.innerHTML = `
            <img src="${slideData.imgSrc}" style="width:100%">
        `;
        return slide;
    }

    // Initialize slideshow
    const slideshowContainer = document.querySelector(".slideshow-container");
    let slideIndex = 0;

    slides.forEach(slide => {
        slideshowContainer.appendChild(createSlide(slide));
    });

    // Automatic slideshow
    function showSlides() {
        const slides = document.querySelectorAll('.mySlides');

        slides.forEach(slide => slide.style.opacity = 0); // Set opacity to 0 for all slides

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }

        slides[slideIndex - 1].style.opacity = 1; // Set opacity to 1 for the current slide

        setTimeout(showSlides, 4000); // Change slide every 2 seconds
    }

    showSlides(); // Initial call to start the slideshow
});


document.addEventListener('DOMContentLoaded', function () {
    // Your existing JavaScript code

    // Show the overlay when the page loads
    const overlay = document.getElementById('overlay');
    const overlay2 = document.getElementById('overlay2');
    overlay.classList.remove('hidden');
    const smallScreenMediaQuery = window.matchMedia('(max-width: 600px)');
    const delay = smallScreenMediaQuery.matches ? 200 : 3000;

    // Hide the overlay after a certain delay (e.g., 2 seconds)
    setTimeout(function () {
        overlay.classList.add('hidden');
        overlay2.classList.add('shown');
    }, delay); // Adjust the delay as needed

    var bodyElement = document.body;
    bodyElement.style.overflow = "hidden";
    setTimeout(function () {
        bodyElement.style.overflowY = "auto"
    }, 3000);
    setTimeout(function () {
        elementOne = document.getElementById('one')
        elementTwo = document.getElementById('onetwo')
        elementOne.style.position = 'absolute';
        elementTwo.style.position = 'absolute';
        elementOne.style.transform = 'translateX(-550px)';
        elementTwo.style.transform = 'translateX(70px)';
        elementOne.innerHTML = '1er en innovation';
        elementTwo.innerHTML = '1er en excellence';
    }, 2000);
    setTimeout(function () {
        document.getElementById('prod').innerHTML = '    ';
    }, 1000);
});


window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', 3 * window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
})


const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const morph = KUTE.fromTo (
    '#blob1',
    {path: '#blob1'},
    {path: '#blob2'},
    {repeat:999, duration: 1500, yoyo: true}
)

morph.start()