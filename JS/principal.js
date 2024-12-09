function navigateToPage(page) {
    window.location.href = page; 
  }
  const carouselSlide = document.querySelector('.carousel-slide');
  const images = document.querySelectorAll('.carousel-slide img');
  
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let counter = 0;
  const size = images[0].clientWidth;

  // Botão próximo
  nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    carouselSlide.style.transform = `translateX(${-size * ++counter}px)`;
  });

  // Botão anterior
  prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transform = `translateX(${-size * --counter}px)`;
  });

  // Loop automático (opcional)
  setInterval(() => {
    if (counter < images.length - 1) {
      carouselSlide.style.transform = `translateX(${-size * ++counter}px)`;
    } else {
      counter = 0;
      carouselSlide.style.transform = `translateX(${0}px)`;
    }
  }, 5000); // Altere o tempo de 5000 ms conforme necessário.

  
  