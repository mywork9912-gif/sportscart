/* ============ Stores page ============ */
document.addEventListener('DOMContentLoaded', ()=>{
  const grid = document.getElementById('storesGrid');
  if(!grid) return;
  grid.innerHTML = STORES.map(s => {
    const count = PRODUCTS.filter(p => p.store.toLowerCase() === s.name.toLowerCase()).length;
    return `<a class="store-card" href="${s.url}" target="_blank" rel="noopener">
      <span class="emoji">${s.emoji}</span>
      <h3>${s.name}</h3>
      <p>${count} products listed</p>
      <span class="mini-btn">Visit Store →</span>
    </a>`;
  }).join('');
});
