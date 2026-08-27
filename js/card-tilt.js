const tiltCard = document.getElementById('tiltCard');
const tiltLayer = tiltCard.querySelector('.tilt-layer');

tiltCard.addEventListener('mousemove', (e) => {
  const rect = tiltCard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Calculates smooth 3D angles based on cursor offset from center
  const rotateX = ((y - centerY) / centerY) * -16;
  const rotateY = ((x - centerX) / centerX) * 16;

  tiltLayer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

tiltCard.addEventListener('mouseleave', () => {
  tiltLayer.style.transform = 'rotateX(0deg) rotateY(0deg)';
});