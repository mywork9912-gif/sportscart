/* =================================================================
 *  PRODUCTS — single source of truth.
 *  To add a product, just append one object to this array.
 *  Schema:
 *  { id, name, brand, category, price, oldPrice, rating, reviews,
 *    image, store, affiliateLink, description, deal, trending }
 * ================================================================= */

const PRODUCTS = [
  /*{id:1, name:"Nike Air Zoom Pegasus 40", brand:"Nike", category:"shoes", price:9499,  rating:4.6, reviews:1240,
   image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=70", store:"Nike",
   affiliateLink:"https://nike.com", description:"Lightweight daily running shoe with responsive cushioning.", deal:true, trending:true},*/

  {id:2, name:"Gokaido Professional Quality Karate Full kit Set (XL)", brand:"Gokaido", category:"karate", price:7799.00,  rating:3.56, reviews:9,
   image:"https://m.media-amazon.com/images/I/51mgF6tGPZL._SX679_.jpg", store:"IKL",
   affiliateLink:"https://iklstore.com/product/gokaido-professional-karate-kit-set/?attribute_pa_kit-size=l", description:"Lightweight daily running shoe with responsive cushioning.", deal:true, trending:false},

   {id:1, name:"SG Scorer Classic Kashmir Willow Cricket Bat", brand:"SG", category:"cricket", price:2223,  rating:3.7, reviews:471,
   image:"https://m.media-amazon.com/images/I/41rEAHYAh6L._SY879_.jpg", store:"Amazon",
   affiliateLink:"https://www.amazon.in/SG-Scorer-Classic-Kashmir-Cricket/dp/B0DW8MZVDY?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=AXOGFIT0PZZ7G&th=1", description:"SG Scorer Classic Kashmir Willow Cricket Bat - SH | Lightweight & Durable for Exceptional Performance.", deal:true, trending:false},

   {id:3, name:"Amazon Brand - Symactive High Performance Heavy Duty 4 feet Filled Punching Bag with Rust Proof Stainless Steel Hanging Chain | SRF Material | for Boxing, MMA and Muay Thai | Black", brand:"amazon", category:"boxing", price:1799,  rating:4.0, reviews:1195,
   image:"https://m.media-amazon.com/images/I/61zwHJGIK6L._SX522_.jpg", store:"Amazon",
   affiliateLink:"https://www.amazon.in/Amazon-Brand-Symactive-Performance-Kickboxing/dp/B0BZ8BMXX9/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.M7oqKpFCWrHfIpm_LAjZ_ph60GzOPakKXQlpEvG5kSUS93L6TXzKpoGNCP2RaGTUUg_0r0y8w7BFIjxbmDhalqIKAXD9nuyf_kPJU_dtIIm07AKFhpN3e5_72H-7l2TVbEA_WSrRhbVYVfT8CXqoLTmjq4mhI5czAJSLNPSJ8-NS4FZeLG31PkzfSfkv_OWxOQlATA_mBLmv1LznyFoNuv6a6okBVOdrypZEyyx4uLOPPyEDoLttilOJo_5c7P3Yhx1qH1QvVbFuWLOvW0YnFnrXw2ObYLdZT9Pop7po08c.acOBcbM5hx6uwp71e4lwIyOVY0VyBpuUbrWE-8e8O9M&dib_tag=se&qid=1782722350&refinements=p_72%3A1318476031&rnid=1318475031&s=sports&sr=1-1-spons&aref=I5g9fPaeBq&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&th=1", description:"84% positive ratings from 10K+ customers 50K+ recent orders from this brand 5+ years on Amazon.", deal:true, trending:true},
]