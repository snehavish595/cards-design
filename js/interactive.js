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


function triggerOrganicPulse(button) {
  const card = button.closest('.organic-card');
  const bubble = card.querySelector('.liquid-bubble');
  
  button.innerText = 'MUTATED 🧬';
  button.style.background = '#a855f7';
  button.style.color = '#ffffff';
  button.style.borderColor = '#a855f7';
  
  bubble.style.background = 'linear-gradient(135deg, #a855f7, #ec4899)';
  bubble.style.transform = 'scale(1.25) rotate(180deg)';

  setTimeout(() => {
    button.innerText = 'MUTATE STATE';
    button.style.background = 'rgba(52, 211, 153, 0.15)';
    button.style.color = '#34d399';
    button.style.borderColor = 'rgba(52, 211, 153, 0.4)';
    
    bubble.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';
    bubble.style.transform = 'none';
  }, 2500);
}