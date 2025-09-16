
(function(){
  const track = document.getElementById('track');
  if (!track) return;
  const slides = Array.from(track.children);
  const dots = document.getElementById('dots');
  let idx = 0;
  slides.forEach((_,i)=>{
    const d=document.createElement('span');
    d.className='dot'+(i===0?' active':'');
    d.addEventListener('click', ()=>go(i));
    dots.appendChild(d);
  });
  function go(n){
    idx = (n+slides.length)%slides.length;
    track.style.transform = `translateX(-${idx*100}%)`;
    dots.querySelectorAll('.dot').forEach((d,j)=>d.classList.toggle('active', j===idx));
  }
  setInterval(()=>go(idx+1), 3500);
})();
