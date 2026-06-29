/* ============ Live Search ============ */
function setupSearch(){
  const input = document.getElementById('navSearch');
  const box   = document.getElementById('searchResults');
  if(!input || !box) return;

  const base = document.getElementById('navbarMount')?.dataset.base || '';

  const handle = debounce(()=>{
    const q = input.value.trim().toLowerCase();
    if(!q){ box.classList.remove('open'); box.innerHTML=''; return; }
    const hits = PRODUCTS.filter(p =>
      [p.name, p.brand, p.category, p.store].join(' ').toLowerCase().includes(q)
    ).slice(0, 7);
    if(!hits.length){
      box.innerHTML = `<div class="search-result"><div class="sr-info"><div class="sr-name">No results</div></div></div>`;
    } else {
      box.innerHTML = hits.map(p => `
        <a class="search-result" href="${base}pages/product.html?id=${p.id}">
          <img src="${p.image}" alt="" loading="lazy" />
          <div class="sr-info">
            <div class="sr-name">${p.name}</div>
            <div class="sr-meta">${p.brand} · ${p.store} · ${fmtPrice(p.price)}</div>
          </div>
        </a>`).join('') +
        `<a class="search-result" href="${base}pages/search.html?q=${encodeURIComponent(q)}" style="justify-content:center;font-weight:600;color:var(--primary)">See all results →</a>`;
    }
    box.classList.add('open');
  }, 150);

  input.addEventListener('input', handle);
  input.addEventListener('focus', handle);
  document.addEventListener('click', e=>{
    if(!e.target.closest('.search-wrap')) box.classList.remove('open');
  });
  input.addEventListener('keydown', e=>{
    if(e.key==='Enter'){
      const q = input.value.trim();
      if(q) location.href = `${base}pages/search.html?q=${encodeURIComponent(q)}`;
    }
  });
}
document.addEventListener('DOMContentLoaded', setupSearch);
