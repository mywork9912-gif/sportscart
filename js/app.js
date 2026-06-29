/* ============ App bootstrap ============ */

/** Mount navbar (if a placeholder div is used on subpages) */
function mountNavbar(){
  const mount = document.getElementById('navbarMount');
  if(!mount) return;
  const base = mount.dataset.base || '';
  mount.outerHTML = `
  <header class="navbar" id="navbar">
    <div class="nav-container">
      <a href="${base}index.html" class="logo">
        <span class="logo-icon">⚡</span>
        <span class="logo-text">Sports<span>Cart</span></span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
      <nav class="nav-menu" id="navMenu">
        <a href="${base}index.html">Home</a>
        <a href="${base}pages/category.html">Categories</a>
        <a href="${base}pages/deals.html">Deals</a>
        <a href="${base}pages/stores.html">Stores</a>
        <a href="${base}pages/compare.html">Compare</a>
        <a href="${base}about.html">About</a>
      </nav>
      <div class="nav-actions">
        <div class="search-wrap">
          <input type="text" id="navSearch" placeholder="Search products, brands…" aria-label="Search" />
          <div class="search-results" id="searchResults"></div>
        </div>
        <a href="${base}pages/favorites.html" class="icon-btn" aria-label="Favorites">♥<span class="badge" id="favBadge">0</span></a>
        <a href="${base}pages/compare.html" class="icon-btn" aria-label="Compare">⇄<span class="badge" id="compareBadge">0</span></a>
        <button class="icon-btn" id="darkToggle" aria-label="Toggle dark mode">🌙</button>
      </div>
    </div>
  </header>`;
  // Wire up mobile toggle, dark mode, search after injection
  setTimeout(()=>{
    const t = document.getElementById('navToggle');
    const m = document.getElementById('navMenu');
    if(t && m) t.addEventListener('click', ()=>m.classList.toggle('open'));
    if(typeof setupSearch === 'function') setupSearch();
    const btn = document.getElementById('darkToggle');
    if(btn){
      btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
      btn.addEventListener('click', toggleDarkMode);
    }
    updateFavBadge(); updateCompareBadge();
  },0);
}

/** Mount footer */
function mountFooter(){
  const f = document.getElementById('footer');
  if(!f) return;
  const base = f.dataset.base || '';
  f.innerHTML = `
    <div class="footer-container">
      <div class="footer-about">
        <a href="${base}index.html" class="logo">
          <span class="logo-icon">⚡</span>
          <span class="logo-text">Sports<span>Cart</span></span>
        </a>
        <p>Compare sports products from trusted partner stores. Find the best deals — without leaving one tab.</p>
      </div>
      <div>
        <h4>Shop</h4>
        <a href="${base}pages/category.html">Categories</a>
        <a href="${base}pages/deals.html">Today's Deals</a>
        <a href="${base}pages/stores.html">Partner Stores</a>
        <a href="${base}pages/compare.html">Compare</a>
        <a href="${base}pages/favorites.html">Favorites</a>
      </div>
      <div>
        <h4>Company</h4>
        <a href="${base}about.html">About</a>
        <a href="${base}contact.html">Contact</a>
        <a href="${base}privacy.html">Privacy Policy</a>
        <a href="${base}terms.html">Terms of Service</a>
      </div>
      <div>
        <h4>Follow</h4>
        
        <a href="https://www.instagram.com/u_llivada?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a>
        
        
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} SportsCart. All rights reserved.</span>
      <span>Made with ⚡ for sports lovers</span>
    </div>`;
}

/** Render homepage sections */
function renderHome(){
  const catGrid = document.getElementById('categoryGrid');
  if(catGrid){
    catGrid.innerHTML = CATEGORIES.map(c => `
      <a class="cat-card" href="pages/category.html?cat=${c.slug}">
        <span class="cat-emoji">${c.emoji}</span>
        <h3>${c.name}</h3>
        <span>${PRODUCTS.filter(p=>p.category===c.slug).length} items</span>
      </a>`).join('');
  }
  const tg = document.getElementById('trendingGrid');
  if(tg) tg.innerHTML = PRODUCTS.filter(p=>p.trending).slice(0,8).map(p=>renderProductCard(p,'')).join('');

  const dg = document.getElementById('dealsGrid');
  if(dg) dg.innerHTML = PRODUCTS.filter(p=>p.deal).slice(0,8).map(p=>renderProductCard(p,'')).join('');

  const tr = document.getElementById('topRatedGrid');
  if(tr) tr.innerHTML = PRODUCTS.slice().sort((a,b)=>b.rating-a.rating).slice(0,8).map(p=>renderProductCard(p,'')).join('');

  const bs = document.getElementById('brandStrip');
  if(bs) bs.innerHTML = BRANDS.map(b=>`<a class="brand-chip" href="pages/category.html"><span class="brand-emoji">${b.emoji}</span>${b.name}</a>`).join('');

  const ss = document.getElementById('storeStrip');
  if(ss) ss.innerHTML = STORES.map(s=>`<a class="store-chip" href="${s.url}" target="_blank" rel="noopener"><span class="store-emoji">${s.emoji}</span>${s.name}</a>`).join('');
}

/** Newsletter */
function setupNewsletter(){
  const form = document.getElementById('newsletterForm');
  if(!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value.trim();
    const msg = document.getElementById('newsletterMsg');
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ msg.textContent = '⚠ Please enter a valid email.'; return; }
    msg.textContent = '✅ Thanks! You\'re subscribed.';
    form.reset();
  });
}

/** Scroll-top button + navbar shadow */
function setupScroll(){
  const btn = document.getElementById('scrollTop');
  const nav = document.getElementById('navbar') || document.querySelector('.navbar');
  window.addEventListener('scroll', ()=>{
    if(btn) btn.classList.toggle('visible', window.scrollY > 500);
    if(nav) nav.classList.toggle('scrolled', window.scrollY > 8);
  });
  if(btn) btn.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/** Mobile nav toggle for index page (where navbar is inline) */
function setupMobileNav(){
  const t = document.getElementById('navToggle');
  const m = document.getElementById('navMenu');
  if(t && m && !t.dataset.bound){
    t.dataset.bound = '1';
    t.addEventListener('click', ()=>m.classList.toggle('open'));
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  mountNavbar();
  mountFooter();
  renderHome();
  setupNewsletter();
  setupScroll();
  setupMobileNav();
  updateFavBadge();
  updateCompareBadge();
});
