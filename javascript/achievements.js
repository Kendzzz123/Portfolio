 //src="javascript/achievements.js"

function expandNavbar() {
  if (window.innerWidth > 768) {
    setTimeout(() => {
      document.getElementById("navbar").classList.add("expanded");
    }, 300);
  }
}

//website display
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('header, section, footer, .hidden');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});

//image choices
const certImages = [
  'img/cert1.jpg',
  'img/cert2.jpg',
  'img/cert3.jpg',
  'img/cert4.jpg',
  'img/cert5.jpg'
];
let currentImg = 0;

function showImage(index) {
  const image = document.getElementById("certImage");
  const counter = document.getElementById("imageCounter");
  if (index < 0) index = certImages.length - 1;
  if (index >= certImages.length) index = 0;
  currentImg = index;
  image.src = certImages[currentImg];
  counter.textContent = `${currentImg + 1} / ${certImages.length}`;
}

function nextImage() {
  showImage(currentImg + 1);
}

function prevImage() {
  showImage(currentImg - 1);
}

// Show the first image on page load
document.addEventListener("DOMContentLoaded", () => {
  showImage(0);
});

function toggleMenu() {
const navList = document.querySelector("nav ul");
navList.classList.toggle("show-menu");
}
