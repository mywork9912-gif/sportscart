/* ============ Dark Mode ============ */
(function(){
  const saved = lsGet('sc_theme','light');
  if(saved === 'dark') document.body.classList.add('dark');
})();

function toggleDarkMode(){
  document.body.classList.toggle('dark');
  const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
  lsSet('sc_theme', mode);
  const btn = document.getElementById('darkToggle');
  if(btn) btn.textContent = mode === 'dark' ? '☀️' : '🌙';
}

document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('darkToggle');
  if(btn){
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    btn.addEventListener('click', toggleDarkMode);
  }
});
