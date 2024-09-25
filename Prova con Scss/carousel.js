const carouselContainer1 = document.querySelector("#slider1");
const prevBtn1 = document.getElementById("prev-btn1");
const nextBtn1 = document.getElementById("next-btn1");
const firstCol1 = document.querySelector("#slider1 > .col");

let firstCol1Width = firstCol1.offsetWidth + parseInt(getComputedStyle(firstCol1).marginRight);

console.log(firstCol1);

carouselContainer1.addEventListener("wheel", (e) => {
  e.preventDefault();
});
carouselContainer1.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
  },
  { passive: false }
);

prevBtn1.addEventListener("click", () => {
  carouselContainer1.scrollLeft -= firstCol1Width;
});

nextBtn1.addEventListener("click", () => {
  carouselContainer1.scrollLeft += firstCol1Width;
});

//row2
const carouselContainer2 = document.querySelector("#slider2");
const prevBtn2 = document.getElementById("prev-btn2");
const nextBtn2 = document.getElementById("next-btn2");
const firstCol2 = document.querySelector("#slider2 > .col");

let firstCol2Width = firstCol2.offsetWidth + parseInt(getComputedStyle(firstCol2).marginRight);

console.log(firstCol2);

carouselContainer2.addEventListener("wheel", (e) => {
  e.preventDefault();
});
carouselContainer2.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
  },
  { passive: false }
);

prevBtn2.addEventListener("click", () => {
  carouselContainer2.scrollLeft -= firstCol2Width;
});

nextBtn2.addEventListener("click", () => {
  carouselContainer2.scrollLeft += firstCol2Width;
});

//row3
const carouselContainer3 = document.querySelector("#slider3");
const prevBtn3 = document.getElementById("prev-btn3");
const nextBtn3 = document.getElementById("next-btn3");
const firstCol3 = document.querySelector("#slider3 > .col");

let firstCol3Width = firstCol3.offsetWidth + parseInt(getComputedStyle(firstCol3).marginRight);

console.log(firstCol3);

carouselContainer3.addEventListener("wheel", (e) => {
  e.preventDefault();
});
carouselContainer3.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
  },
  { passive: false }
);

prevBtn3.addEventListener("click", () => {
  carouselContainer3.scrollLeft -= firstCol3Width;
});

nextBtn3.addEventListener("click", () => {
  carouselContainer3.scrollLeft += firstCol3Width;
});
