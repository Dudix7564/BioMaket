// Seleção de elementos
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const totalImages = images.length;

// Atualiza o tamanho dinamicamente
function updateSlidePosition() {
  const size = images[0].clientWidth;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

// Atualiza a posição ao redimensionar a janela
window.addEventListener('resize', updateSlidePosition);

// Botão próximo
nextBtn.addEventListener('click', () => {
  if (counter < totalImages - 1) {
    counter++;
  } else {
    counter = 0; // Volta para o início
  }
  updateSlidePosition();
  resetInterval();
});

// Botão anterior
prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = totalImages - 1; // Vai para o último slide
  }
  updateSlidePosition();
  resetInterval();
});

// Intervalo automático
let autoSlide = setInterval(() => {
  counter = (counter + 1) % totalImages;
  updateSlidePosition();
}, 5000);

// Reseta o intervalo automático
function resetInterval() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    counter = (counter + 1) % totalImages;
    updateSlidePosition();
  }, 5000);
}

// Inicializa o carrossel na posição inicial
updateSlidePosition();
