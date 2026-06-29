/* ============ Utils ============ */
/** Format INR price */
function fmtPrice(n){ return '₹' + Number(n).toLocaleString('en-IN'); }

/** Render star string from rating 0–5 */
function starString(r){
  const full = Math.round(r);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

/** Read/write localStorage safely */
function lsGet(key, fallback){
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch(e){ return fallback; }
}
function lsSet(key, val){
  try { localStorage.setItem(key, JSON.stringify(val)); } catch(e){}
}

/** Debounce */
function debounce(fn, ms){
  let t; return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn(...args), ms); };
}

/** Render a reusable product card. base = relative prefix to root ('' or '../') */
function renderProductCard(p, base){
  base = base || '';
  const isFav = isFavorite(p.id);
  const isCmp = isCompared(p.id);
  const old = p.oldPrice ? `<span class="pc-old">${fmtPrice(p.oldPrice)}</span>` : '';
  const deal = p.deal ? `<span class="pc-deal">DEAL</span>` : '';
  return `
    <article class="product-card fade-up">
      <a href="${base}pages/product.html?id=${p.id}" class="pc-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="pc-store">${p.store}</span>
        ${deal}
      </a>
      <div class="pc-actions">
        <button class="${isFav?'active':''}" title="Favorite"
          onclick="event.stopPropagation();toggleFavorite(${p.id});this.classList.toggle('active');updateFavBadge();">♥</button>
        <button class="${isCmp?'active':''}" title="Compare"
          onclick="event.stopPropagation();toggleCompare(${p.id});this.classList.toggle('active');updateCompareBadge();">⇄</button>
      </div>
      <div class="pc-body">
        <span class="pc-brand">${p.brand}</span>
        <a href="${base}pages/product.html?id=${p.id}" class="pc-name">${p.name}</a>
        <div class="pc-rating"><span class="stars">${starString(p.rating)}</span> ${p.rating} (${p.reviews})</div>
        <div class="pc-price">${fmtPrice(p.price)}${old}</div>
        <a href="${p.affiliateLink}" target="_blank" rel="noopener" class="pc-btn">View Deal →</a>
      </div>
    </article>`;
}
