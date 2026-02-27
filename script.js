// Smooth scroll & year
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

// Theme toggle (persist)
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) document.body.className = saved;
if (toggle){
  toggle.addEventListener('click', ()=>{
    const light = document.body.classList.contains('theme-light');
    document.body.classList.toggle('theme-light', !light);
    document.body.classList.toggle('theme-dark', light);
    localStorage.setItem('theme', document.body.className);
  });
}

// Robust download handling for local file:// context
const link = document.getElementById('resumeLink');
if (link){
  link.addEventListener('click', (e)=>{
    const href = link.getAttribute('href');
    // If running from file:// some browsers ignore download attr; open in new tab
    if (location.protocol === 'file:'){
      link.setAttribute('target','_blank');
    }
  });
}
