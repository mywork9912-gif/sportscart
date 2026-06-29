/* ============ Compare ============ */
const CMP_KEY = 'sc_compare';
const CMP_MAX = 4;

function getCompare(){ return lsGet(CMP_KEY, []); }
function isCompared(id){ return getCompare().includes(id); }
function toggleCompare(id){
  const arr = getCompare();
  const i = arr.indexOf(id);
  if(i >= 0) arr.splice(i,1);
  else if(arr.length < CMP_MAX) arr.push(id);
  else { alert('You can compare up to ' + CMP_MAX + ' products.'); return; }
  lsSet(CMP_KEY, arr);
  updateCompareBadge();
}
function clearCompare(){ lsSet(CMP_KEY, []); updateCompareBadge(); }
function updateCompareBadge(){
  const el = document.getElementById('compareBadge');
  if(!el) return;
  const n = getCompare().length;
  el.textContent = n;
  el.style.display = n ? 'grid' : 'none';
}

/** Render compare table */
function renderCompareTable(wrapId, base){
  const wrap = document.getElementById(wrapId);
  const ids = getCompare();
  const items = PRODUCTS.filter(p => ids.includes(p.id));
  if(!items.length){
    wrap.innerHTML = `<div class="compare-empty">
      <p>No products to compare yet.</p>
      <a href="${base}pages/category.html" class="btn-primary">Browse Products</a>
    </div>`;
    return;
  }
  const lowest = Math.min(...items.map(p=>p.price));
  const rows = [
    ['Image', p=>`<div class="ct-img"><img src="${p.image}" alt="${p.name}" /></div>`],
    ['Name',  p=>`<strong>${p.name}</strong>`],
    ['Brand', p=>p.brand],
    ['Category', p=>p.category],
    ['Price', p=>`<div class="ct-price ${p.price===lowest?'lowest':''}">${fmtPrice(p.price)}</div>`],
    ['Rating', p=>`<span class="stars">${starString(p.rating)}</span> ${p.rating} (${p.reviews})`],
    ['Store', p=>p.store],
    ['Action', p=>`<a href="${p.affiliateLink}" target="_blank" rel="noopener" class="mini-btn">Visit</a>
                   <button class="compare-remove" onclick="toggleCompare(${p.id});renderCompareTable('${wrapId}','${base}')">Remove</button>`],
  ];
  wrap.innerHTML = `
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead><tr><th></th>${items.map(p=>`<th>${p.brand}</th>`).join('')}</tr></thead>
        <tbody>
          ${rows.map(([label,fn])=>`<tr><th>${label}</th>${items.map(p=>`<td>${fn(p)}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    </div>
    <p style="margin-top:1rem"><button class="btn-ghost" onclick="clearCompare();renderCompareTable('${wrapId}','${base}')">Clear All</button></p>`;
}
