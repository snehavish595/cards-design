const glassCard = document.getElementById('glassCard');

glassCard.addEventListener('mousemove', (e) => {
  const rect = glassCard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  glassCard.style.setProperty('--mouse-x', `${x}px`);
  glassCard.style.setProperty('--mouse-y', `${y}px`);
});