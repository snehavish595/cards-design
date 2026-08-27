const nukeToggle = document.getElementById('nukeToggle');
const boomCard = document.getElementById('boomCard');
const warningLight = document.getElementById('warningLight');
const boomText = document.getElementById('boomText');

nukeToggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    warningLight.classList.add('active');
    boomText.innerText = "CRITICAL OVERLOAD! Self-destructing in 3... 2... 1...";
    
    setTimeout(() => {
      boomCard.classList.add('detonated');
    }, 2000);

    setTimeout(() => {
      // Reset card after destruction sequence
      boomCard.classList.remove('detonated');
      warningLight.classList.remove('active');
      nukeToggle.checked = false;
      boomText.innerText = "This card contains sensitive elements. Pressing the nuclear toggle initiates chaos.";
    }, 4500);
  }
});