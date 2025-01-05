
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let slide = document.querySelector(".slide");
let cird = document.querySelectorAll(".slider__cird");

let slidernumber = 1;

const length = cird.length;


const nextslider = () => {
    slide.style.transform = `translateX(-${slidernumber * 223}px)`;
    slidernumber++;
}

const prevslider = () => {
    slide.style.transform = `translateX(-${(slidernumber - 2) * 223}px)`;
    slidernumber--;
}

const getfristslide = () => {
    slide.style.transform = `translateX(0px)`;
    slidernumber = 1;
}

const getlastslide = () => {
    slide.style.transform = `translateX(-${(length - 6) * 223}px)`;
    slidernumber = length;
}
left.addEventListener("click", () => {
        slidernumber > 1 ? prevslider() : getlastslide();
    });


right.addEventListener("click", () => {
        slidernumber < length ? nextslider() : getfristslide();
    });
