
(function(){
  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.innerHTML = '<img alt="Preview">';
  lb.addEventListener('click', ()=>lb.classList.remove('show'));
  document.body.appendChild(lb);
  window.openLightbox = function(src){
    lb.querySelector('img').src = src;
    lb.classList.add('show');
  }
})();
