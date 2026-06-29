/* ============ Filter & Sort ============ */
function filterProducts(list, {cat, brand, store, sort}){
  let out = list.slice();
  if(cat)   out = out.filter(p => p.category === cat);
  if(brand) out = out.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  if(store) out = out.filter(p => p.store.toLowerCase() === store.toLowerCase());
  switch(sort){
    case 'low':    out.sort((a,b)=>a.price-b.price); break;
    case 'high':   out.sort((a,b)=>b.price-a.price); break;
    case 'rating': out.sort((a,b)=>b.rating-a.rating); break;
    default:       out.sort((a,b)=>b.reviews-a.reviews);
  }
  return out;
}
