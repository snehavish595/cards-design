const copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', () => {
  const codeText = `npm i @system/core\nimport { Client } from '@system';\nconst app = new Client({ api: 'v2' });`;

  navigator.clipboard.writeText(codeText).then(() => {
    copyBtn.style.color = 'var(--accent-green)';
    
    setTimeout(() => {
      copyBtn.style.color = 'var(--text-secondary)';
    }, 1500);
  });
});