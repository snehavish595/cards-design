const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];
const spinBtn = document.getElementById('spinBtn');
const slotTitle = document.getElementById('slotTitle');
const slotText = document.getElementById('slotText');

const icons = ['💥', '🔥', '💎', '🚀', '🍕', '🎉', '🤡'];

spinBtn.addEventListener('click', () => {
  spinBtn.disabled = true;
  slotTitle.innerText = "Spinning...";

  reels.forEach(reel => reel.classList.add('spin-blur'));

  setTimeout(() => {
    let results = [];
    reels.forEach((reel) => {
      reel.classList.remove('spin-blur');
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      reel.innerText = randomIcon;
      results.push(randomIcon);
    });

    if (results[0] === results[1] && results[1] === results[2]) {
      slotTitle.innerText = "JACKPOT! 🎉";
      slotText.innerText = "You won supreme cosmic luck!";
    } else {
      slotTitle.innerText = "Try Again! 🤡";
      slotText.innerText = "Close, but no match. Give it another spin!";
    }

    spinBtn.disabled = false;
  }, 1000);
});