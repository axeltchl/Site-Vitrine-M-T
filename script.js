const track = document.getElementById('carouselTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
  const cardWidth = track.querySelector('.produit-card').clientWidth;
  track.scrollLeft += (cardWidth + 32);
});

prevBtn.addEventListener('click', () => {
  const cardWidth = track.querySelector('.produit-card').clientWidth;
  track.scrollLeft -= (cardWidth + 32);
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    // Si on a scrollé plus de 50px, on ajoute la classe 'scrolled'
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        // Sinon, on l'enlève
        header.classList.remove('scrolled');
    }
});