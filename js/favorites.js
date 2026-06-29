/* ============ Favorites (LocalStorage) ============ */
const FAV_KEY = 'sc_favorites';

function getFavorites(){ return lsGet(FAV_KEY, []); }
function isFavorite(id){ return getFavorites().includes(id); }
function toggleFavorite(id){
  const arr = getFavorites();
  const i = arr.indexOf(id);
  if(i >= 0) arr.splice(i,1); else arr.push(id);
  lsSet(FAV_KEY, arr);
  updateFavBadge();
}
function updateFavBadge(){
  const el = document.getElementById('favBadge');
  if(!el) return;
  const n = getFavorites().length;
  el.textContent = n;
  el.style.display = n ? 'grid' : 'none';
}

/** Render favorites page */
function renderFavoritesPage(gridId, emptyId, base){
  const favs = getFavorites();
  const items = PRODUCTS.filter(p => favs.includes(p.id));
  const grid = document.getElementById(gridId);
  const empty = document.getElementById(emptyId);
  if(!items.length){ grid.innerHTML=''; empty.hidden=false; return; }
  empty.hidden = true;
  grid.innerHTML = items.map(p => renderProductCard(p, base || '')).join('');
}
