const pupils = document.querySelectorAll('.pupil');
const ghost = document.getElementById('ghost');
const scareBtn = document.getElementById('scareBtn');

// Pupils follow cursor positioning dynamically
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  pupils.forEach((pupil) => {
    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Trigger jump-scared state
scareBtn.addEventListener('click', () => {
  ghost.classList.add('scared');
  scareBtn.innerText = "AAAHHH! 😱";
  
  setTimeout(() => {
    ghost.classList.remove('scared');
    scareBtn.innerText = "BOO! 👻";
  }, 2000);
});