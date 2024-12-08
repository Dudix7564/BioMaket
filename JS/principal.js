function navigateToPage(page) {
  window.location.href = page; 
}

const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
let size = images[0].clientWidth;

// Função para atualizar o tamanho do slide ao redimensionar a janela
function updateSize() {
  size = images[0].clientWidth;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

window.addEventListener('resize', updateSize);

// Navegação para o próximo slide
nextBtn.addEventListener('click', () => {
  if (counter < images.length - 1) {
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  } else {
    counter = 0; // Volta ao início
    carouselSlide.style.transform = `translateX(${0}px)`;
  }
  resetInterval(); // Reseta o loop automático
});

// Navegação para o slide anterior
prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  } else {
    counter = images.length - 1; // Vai para o último slide
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
  resetInterval(); // Reseta o loop automático
});

// Loop automático
let autoSlide = setInterval(() => {
  if (counter < images.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}, 5000);

// Reseta o loop automático ao usar os botões
function resetInterval() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    if (counter < images.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }, 5000);
}
