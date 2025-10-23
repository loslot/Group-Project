import React from "react";
import { Link } from "react-router";

// Responsive 5/4/2 Card Grid
// - Desktop (lg): 5 columns
// - Tablet (md): 4 columns
// - Mobile (sm): 2 columns
// - Smooth hover transitions using Tailwind utilities

const cardsData = [
  {
  id: 1,
  image: '/Beauty/8.png',
  title: 'Pure Bloom Perfume',
  subtitle: 'Fragrance • 50ml',
  price: '$60',
  description: 'A floral fragrance with notes of jasmine, rose, and vanilla for an elegant, timeless scent.'
},
{
    id: 2,
    image: '/Electronic/1.png',
    title: 'SmartX Pro Phone',
    subtitle: 'Smartphone • 128GB',
    price: '$699',
    description: 'A sleek smartphone with a powerful processor, edge-to-edge display, and all-day battery life.'
  },
  {
    id: 3,
    image: '/Fashion/7.png',
    title: 'Wool Knit Sweater',
    subtitle: 'Men • Winter Wear',
    price: '$70',
    description: 'A cozy wool-blend sweater that keeps you warm while maintaining a stylish silhouette.'
  },
   {
    id: 4,
    image: '/Homesupply/1.png',
    title: 'ComfortPlus Pillow Set',
    subtitle: 'Bedroom • 2 Pieces',
    price: '$45',
    description: 'Soft microfiber pillows offering plush comfort and lasting support for a restful sleep.'
  },
  {
    id: 5,
    image: '/Jewellery/11.png',
    title: 'Sapphire Queen Ring',
    subtitle: 'Ring • Sapphire Stone',
    price: '$390',
    description: 'An exquisite sapphire ring surrounded by small diamonds, fit for a modern queen.'
  },
   {
    id: 6,
    image: '/Electronic/3.png',
    title: 'VisionHD 4K TV',
    subtitle: 'Display • 55-inch',
    price: '$799',
    description: 'A stunning 4K UHD smart TV with vibrant colors, HDR10 support, and built-in streaming apps.'
  },
  {
  id: 7,
  image: '/Beauty/14.png',
  title: 'Lavender Night Cream',
  subtitle: 'Skincare • 50ml',
  price: '$35',
  description: 'A calming night cream that nourishes skin overnight and promotes a healthy glow.'
},
 {
    id: 8,
    image: '/Jewellery/1.png',
    title: 'Golden Elegance Necklace',
    subtitle: 'Necklace • 18K Gold',
    price: '$320',
    description: 'A delicate 18K gold necklace featuring a minimalist pendant for timeless elegance.'
  },
    {
    id: 9,
    image: '/Homesupply/10.png',
    title: 'AirBreeze Floor Fan',
    subtitle: 'Homesupply Appliance • 3-Speed',
    price: '$75',
    description: 'A quiet, powerful fan that keeps your room cool and comfortable all day long.'
  },
   {
    id: 10,
    image: '/Fashion/8.png',
    title: 'Floral Maxi Dress',
    subtitle: 'Women • Bohemian Style',
    price: '$110',
    description: 'A flowy maxi dress with a floral pattern, ideal for sunny days and casual events.'
  },
  {
    id: 11,
    image: '/Jewellery/6.png',
    title: 'Emerald Grace Pendant',
    subtitle: 'Pendant • Gold Plated',
    price: '$130',
    description: 'A dazzling emerald pendant with a gold-plated chain, perfect for elegant evenings.'
  },

    {
    id: 12,
    image: '/Homesupply/5.png',
    title: 'Modern Ceramic Vase',
    subtitle: 'Decor • Minimalist Design',
    price: '$35',
    description: 'A sleek ceramic vase that adds a touch of modern elegance to your living space.'
  },
  {
    id: 13,
    image: '/Fashion/13.png',
    title: 'Classic Oxford Shoes',
    subtitle: 'Men • Leather',
    price: '$130',
    description: 'Handcrafted leather Oxfords with a timeless design, perfect for both business and casual wear.'
  },
   {
    id: 14,
    image: '/Electronic/12.png',
    title: 'XPower 10,000mAh Power Bank',
    subtitle: 'Charging • Fast Charge',
    price: '$39',
    description: 'A compact power bank with fast-charging support for phones, tablets, and other devices.'
  },
{
  id: 15,
  image: '/Beauty/19.png',
  title: 'Herbal Hair Conditioner',
  subtitle: 'Haircare • 250ml',
  price: '$28',
  description: 'A natural conditioner that strengthens and smooths hair with herbal extracts.'
},
{
    id: 16,
    image: '/Fashion/20.png',
    title: 'Denim Mini Skirt',
    subtitle: 'Women • Casual Wear',
    price: '$65',
    description: 'A stylish denim mini skirt that pairs perfectly with tees, blouses, or jackets for any occasion.'
  },
  {
    id: 17,
    image: '/Electronic/2.png',
    title: 'AeroBuds Wireless Earphones',
    subtitle: 'Audio • Bluetooth 5.3',
    price: '$129',
    description: 'Noise-cancelling wireless earbuds with crystal-clear sound and a comfortable, secure fit.'
  },
  {
  id: 18,
  image: '/Beauty/16.png',
  title: 'Diamond Glow Highlighter',
  subtitle: 'Makeup • Compact',
  price: '$29',
  description: 'A shimmery highlighter that adds a radiant glow to cheekbones and eyes.'
},
{
    id: 19,
    image: '/Jewellery/14.png',
    title: 'RosePetal Brooch',
    subtitle: 'Brooch • Floral Design',
    price: '$70',
    description: 'An elegant rose-shaped brooch plated in rose gold with a subtle sparkle.'
  },
   {
    id: 20,
    image: '/Homesupply/14.png',
    title: 'Stainless Cookware Set',
    subtitle: 'Kitchen • 8 Pieces',
    price: '$150',
    description: 'Durable stainless steel cookware with even heat distribution for perfect cooking results.'
   },

   
];

export default function New() {
  return (
    <section className="max-w-7xl mx-auto mt-4 my-3 px-4 sm:px-6 lg:px-8 py-10 ">
      <h1
        className="
    relative text-3xl sm:text-5xl font-extrabold mb-8 text-white text-center
    rounded-3xl px-12 py-6
    bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600
    shadow-2xl shadow-blue-500/60
    uppercase tracking-wider
    mx-auto w-fit
    overflow-hidden
  "
      >
        <span className="relative z-10">New's Product</span>
        <span
          className="
    absolute inset-0 bg-gradient-to-r from-blue-200 via-white to-blue-400
    opacity-30
    animate-[shimmer_2s_infinite]
  "
        >
          ;
        </span>
      </h1>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      {/* Grid:
          small (sm): 2 columns
          md (tablet): 4 columns
          lg (desktop): 5 columns
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        
        {cardsData.map((card) => (
          <Link to={`/details/${card.id}`} key={card.id}>
          <article
            
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transform transition duration-300 ease-in-out hover:-translate-y-1"
          >
            <div className="relative h-48 sm:h-56  w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out "
              />

              {/* Badge */}
              <div className="absolute left-3 top-3 bg-white backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-800">
                Featured
              </div>

              {/* Quick action */}
              <button
                aria-label="save"
                className="absolute right-3 top-3 p-2 rounded-full bg-white/90 shadow-md focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-rose-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657 3.172 10.828a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{card.subtitle}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600">From</p>
                  <p className="text-lg font-bold text-slate-900">
                    {card.price}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <h3
                  href="#"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm transition-transform transform hover:scale-105 focus:outline-none"
                >
                  Add to Cart
                </h3>
                <button className="text-sm text-indigo-600 font-medium hover:underline focus:outline-none">
                  Details
                </button>
              </div>
            </div>

            <div className="px-4 pb-4 sm:px-5 sm:pb-5">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>⭐ {card.rating}</span>
                <span>Free cancellation</span>
              </div>
            </div>
          </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
