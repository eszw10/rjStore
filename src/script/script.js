// Slider Carousel & card
let defaultTransform = 0;
let carouselSlider = document.getElementById('slider');
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

let cardSlider = document.getElementById('card-slider');
let nextCard = document.getElementById('next-card');
let prevCard = document.getElementById('prev-card');

function goNext(slider) {
    defaultTransform = defaultTransform - 398;
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

function goPrev(slider) {
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

nextButton.addEventListener("click", () => goNext(carouselSlider));
prevButton.addEventListener("click", () => goPrev(carouselSlider));

nextCard.addEventListener("click", () => goNext(cardSlider));
prevCard.addEventListener("click", () => goPrev(cardSlider));

//notifikasi
function showNotification() {
  const notification = document.getElementById('notification');
  notification.classList.add('fade-in');
  notification.classList.remove('hidden');
  notification.classList.add('md:flex');
  // Menghilangkan notifikasi setelah beberapa detik (misalnya, 5 detik)
  setTimeout(() => {
      notification.classList.add('hidden');
      notification.classList.remove('fade-in');
  }, 5000); // Menghilangkan notifikasi setelah 5 detik
}

// Memanggil fungsi showNotification setiap 10 detik
setInterval(showNotification, 7000); 
