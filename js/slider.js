/* ============ Hero Slider ============ */
function initSlider(){
  const slidesWrap = document.getElementById('slides');
  const dotsWrap   = document.getElementById('slideDots');
  if(!slidesWrap || typeof OFFERS === 'undefined') return;

  slidesWrap.innerHTML = OFFERS.map(o => `
    <div class="slide" style="background:${o.bg}">
      <div class="slide-content">
        <span class="slide-eyebrow">${o.eyebrow}</span>
        <h2>${o.title}</h2>
        <p>${o.subtitle}</p>
        <a href="${o.link}" class="btn-primary">${o.cta} →</a>
      </div>
    </div>`).join('');

  dotsWrap.innerHTML = OFFERS.map((_,i)=>`<button data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('');

  let i = 0;
  const total = OFFERS.length;
  function show(n){
    i = (n + total) % total;
    slidesWrap.style.transform = `translateX(-${i*100}%)`;
    [...dotsWrap.children].forEach((d,k)=>d.classList.toggle('active', k===i));
  }
  show(0);
  document.getElementById('prevSlide').addEventListener('click', ()=>show(i-1));
  document.getElementById('nextSlide').addEventListener('click', ()=>show(i+1));
  dotsWrap.addEventListener('click', e=>{
    const b = e.target.closest('button'); if(b) show(+b.dataset.i);
  });
  setInterval(()=>show(i+1), 6000);
}
document.addEventListener('DOMContentLoaded', initSlider);
