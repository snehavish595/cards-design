const spotlightCard = document.getElementById('spotlightCard');

spotlightCard.addEventListener('mousemove', (e) => {
  const rect = spotlightCard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  spotlightCard.style.setProperty('--mouse-x', `${x}px`);
  spotlightCard.style.setProperty('--mouse-y', `${y}px`);
});