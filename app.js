window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 800) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// slides
const images = document.querySelectorAll('.im');
let currentIndex = 3;

function updateImages() {
  const imgclass = ['im1', 'im2', 'im3', 'im4', 'im5', 'im6', 'im7'];

  images.forEach(function (img) {
    img.className = 'im'; 
  });

  for (let i = 0; i < 7; i++) {
    let imgIndex = (currentIndex - 3 + i + images.length) % images.length;
    images[imgIndex].classList.add(imgclass[i]);
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImages();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImages();
}


setInterval(nextSlide, 5000);

updateImages();

//popup

function popup(){
  alert("The phone number is :+91-9847886885")
}

const nav =document.getElementById("navlink");
function showmenu(){
  nav.style.right="0";
}
function hidemenu(){
  nav.style.right="-340px";
}

window.addEventListener("scroll", function () {
  const art = document.querySelector(".art");
  if (window.scrollY > 15) {
    art.classList.add("scrolled");
  } else {
    art.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar2");
  if (window.scrollY > 15) {
    navbar2.classList.add("scroll");
  } else {
    navbar2.classList.remove("scroll");
  }
});