// Cyberpunk Glitch Trigger Effect
function triggerGlitch(button) {
  const originalText = button.innerText;
  button.innerText = '[ EXECUTING... ]';
  button.style.background = '#ff0055';
  button.style.color = '#fff';
  button.style.borderColor = '#ff0055';

  setTimeout(() => {
    button.innerText = '[ SUCCESS ]';
    button.style.background = '#00ffcc';
    button.style.color = '#0d0f18';
    button.style.borderColor = '#00ffcc';
  }, 1200);

  setTimeout(() => {
    button.innerText = originalText;
    button.style.background = 'transparent';
    button.style.color = '#00ffcc';
  }, 3000);
}