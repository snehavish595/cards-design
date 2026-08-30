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

function toggleBlueprintDraft(button) {
  const card = button.closest('.blueprint-card');
  const tag = card.querySelector('.blueprint-tag');
  
  if (button.innerText === 'COMPILE SPEC') {
    button.innerText = 'SPEC COMPILED ✓';
    button.style.background = '#33ee88';
    button.style.color = '#003366';
    button.style.borderColor = '#33ee88';
    tag.innerText = 'CAD // APPROVED';
  } else {
    button.innerText = 'COMPILE SPEC';
    button.style.background = 'transparent';
    button.style.color = '#ffffff';
    button.style.borderColor = '#66b2ff';
    tag.innerText = 'CAD // REV 2.4';
  }
}

function triggerChromeShimmer(button) {
  const originalText = button.innerText;
  button.innerText = 'MINTED ✓';
  button.style.background = 'linear-gradient(135deg, #38bdf8, #818cf8)';
  button.style.color = '#ffffff';

  setTimeout(() => {
    button.innerText = originalText;
    button.style.background = 'linear-gradient(135deg, #ffffff 0%, #d4d4d8 100%)';
    button.style.color = '#090a0f';
  }, 2000);
}