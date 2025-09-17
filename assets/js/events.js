
(async function(){
  const el = document.getElementById('eventsRoot');
  if (!el) return;
  try{
    const res = await fetch('data/events.json');
    const events = await res.json();
    const grid = document.createElement('div');
    grid.className = 'events-grid';
    events.forEach(ev => {
      const card = document.createElement('article');
      card.className = 'event-card';
      const cover = document.createElement('img');
      cover.src = ev.cover || 'assets/img/events/womeninscience/photo1.png';
      cover.alt = ev.title;
      card.appendChild(cover);
      const body = document.createElement('div');
      body.className = 'body';
      body.innerHTML = `
        <div class="meta">${ev.date} • ${ev.location || 'Groningen'}</div>
        <h3>${ev.title}</h3>
        <p class="muted">${ev.description || ''}</p>
      `;
      if (ev.photos && ev.photos.length){
        const gal = document.createElement('div');
        gal.className = 'gallery';
        ev.photos.forEach(src => {
          const img = document.createElement('img');
          img.src = src; img.alt = ev.title;
          img.addEventListener('click', () => openLightbox(src));
          gal.appendChild(img);
        });
        body.appendChild(gal);
      }
      card.appendChild(body);
      grid.appendChild(card);
    });
    el.appendChild(grid);
  }catch(err){
    el.innerHTML = '<p class="muted">Could not load events yet. Add data/events.json.</p>';
    console.error(err);
  }
})();
