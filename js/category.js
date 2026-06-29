/* ============ Category Page ============ */
(function(){
  document.addEventListener('DOMContentLoaded', ()=>{
    const grid = document.getElementById('catGrid');
    if(!grid) return;

    const fCat   = document.getElementById('filterCat');
    const fBrand = document.getElementById('filterBrand');
    const fStore = document.getElementById('filterStore');
    const fSort  = document.getElementById('filterSort');
    const empty  = document.getElementById('emptyMsg');
    const title  = document.getElementById('catTitle');

    CATEGORIES.forEach(c => fCat.insertAdjacentHTML('beforeend', `<option value="${c.slug}">${c.emoji} ${c.name}</option>`));
    BRANDS.forEach(b   => fBrand.insertAdjacentHTML('beforeend', `<option value="${b.name}">${b.name}</option>`));
    STORES.forEach(s   => fStore.insertAdjacentHTML('beforeend', `<option value="${s.name}">${s.name}</option>`));

    const urlCat = new URLSearchParams(location.search).get('cat');
    if(urlCat){ fCat.value = urlCat; }

    function render(){
      const opts = {cat:fCat.value, brand:fBrand.value, store:fStore.value, sort:fSort.value};
      const list = filterProducts(PRODUCTS, opts);
      grid.innerHTML = list.map(p => renderProductCard(p, '../')).join('');
      empty.hidden = list.length > 0;
      if(opts.cat){
        const c = CATEGORIES.find(x=>x.slug===opts.cat);
        title.textContent = c ? `${c.emoji} ${c.name}` : 'Products';
      } else { title.textContent = 'All Products'; }
    }
    [fCat,fBrand,fStore,fSort].forEach(el => el.addEventListener('change', render));
    render();
  });
})();
