// DOM selector

const images = Array.from(document.querySelectorAll(".img-container img"));
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Event Listener

prev.addEventListener("click",prevSlide);
next.addEventListener("click",nextSlide);

let index = 0;


// // prev Slide

function prevSlide(){

    images[index].classList.remove("active");

    if(index === 0){
        index = images.length - 1;
        images[index].classList.add("active");
    }
    else{
        index--;
        images[index].classList.add("active");
    }
}

// setInterval(nextSlide,2000);

// next Slide

function nextSlide(){
    images[index].classList.remove("active");

    if(index === images.length - 1){
        index = 0;
        images[index].classList.add("active");
    }
    else{
        index++;
        images[index].classList.add("active");
    }
}
