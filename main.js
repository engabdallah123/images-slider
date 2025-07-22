let images = Array.from(document.querySelectorAll('.slider img'));

let slideCount = images.length;
let currentIndex = 1;

let slideNumber = document.querySelector('.slid-number');
let nextButton = document.querySelector('.next');   
let prevButton = document.querySelector('.prev');

// create pagination
let pagination = document.createElement(`ul`);
pagination.setAttribute(`id`, `pagi`);

for (let i = 0; i < slideCount; i++) {
    let li = document.createElement('li');
    li.classList.add('pagination-item');
    li.setAttribute('data-index', i);
    li.innerText = i + 1;
    pagination.appendChild(li);
}
document.querySelector('.pagination').appendChild(pagination);

// next button functionality
nextButton.addEventListener('click', nextFunction);
// previous button functionality
prevButton.addEventListener('click', prevFunction);


// next function
function nextFunction() {
     currentIndex++;
     
     if(nextButton.classList.contains('disabled')) {
         return;
     }else {
            checker();
     }

}

// previous function
function prevFunction() {
    currentIndex--;
    
    if(prevButton.classList.contains('disabled')) {
        return;
    }else {
        checker();
    }
}

let paginationItems = Array.from(document.querySelectorAll('.pagination-item'));
// pagination item click functionality
paginationItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index')) + 1;
        checker();
    });
});


// checker function
function checker() {
    // add text to the slide number
    slideNumber.textContent = `Slide #${currentIndex} of ${slideCount}`;
    // remove active class from all images and pagination items
    removeActive();

    // add active class to the current image and pagination item
    images[currentIndex - 1].classList.add('active');
    paginationItems[currentIndex - 1].classList.add('active');

    // disable next button if at last slide
    if (currentIndex === slideCount) {
        nextButton.classList.add('disabled');
    }
    // enable next button if not at last slide
    else {
        nextButton.classList.remove('disabled');
    }
    // disable previous button if at first slide
    if (currentIndex === 1) {
        prevButton.classList.add('disabled');
    }
    // enable previous button if not at first slide
    else {
        prevButton.classList.remove('disabled');
    }
    
}

// remove active class from all pagination items
function removeActive() {
    images.forEach((image) => {
        image.classList.remove('active');
    });
    paginationItems.forEach((item) => {
        item.classList.remove('active');
    });
}