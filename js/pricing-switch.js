const toggleBtn = document.getElementById('billingToggle');
const priceValue = document.getElementById('priceValue');
const monthlyLabel = document.getElementById('monthlyLabel');
const annualLabel = document.getElementById('annualLabel');

let isAnnual = false;

toggleBtn.addEventListener('click', () => {
  isAnnual = !isAnnual;
  toggleBtn.classList.toggle('annual', isAnnual);
  
  if (isAnnual) {
    priceValue.innerText = '39'; // 20% Discounted Rate
    annualLabel.classList.add('active');
    monthlyLabel.classList.remove('active');
  } else {
    priceValue.innerText = '49';
    monthlyLabel.classList.add('active');
    annualLabel.classList.remove('active');
  }
});