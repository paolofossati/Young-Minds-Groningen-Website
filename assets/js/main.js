
// Common JS for all pages
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Highlight active nav link
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.menu a').forEach(a => {
    const target = a.getAttribute('href');
    if (target && target.endsWith(here)) a.style.textDecoration = 'underline';
  });
});
