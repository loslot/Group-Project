import React from 'react'
import { Link } from 'react-router';

// Responsive 5/4/2 Card Grid
// - Desktop (lg): 5 columns
// - Tablet (md): 4 columns
// - Mobile (sm): 2 columns
// - Smooth hover transitions using Tailwind utilities
const cardsData = [
  {
    id: 1,
    image: '/Jewellery/1.png',
    title: 'Golden Elegance Necklace',
    subtitle: 'Necklace • 18K Gold',
    price: '$320',
    description: 'A delicate 18K gold necklace featuring a minimalist pendant for timeless elegance.'
  },
  {
    id: 2,
    image: '/Jewellery/2.png',
    title: 'Crystal Bloom Earrings',
    subtitle: 'Earrings • Sterling Silver',
    price: '$85',
    description: 'Sparkling crystal earrings crafted from premium silver to add charm to any outfit.'
  },
  {
    id: 3,
    image: '/Jewellery/3.png',
    title: 'RoseGold Infinity Bracelet',
    subtitle: 'Bracelet • Adjustable Fit',
    price: '$110',
    description: 'A romantic rose gold bracelet symbolizing eternal love with an elegant infinity charm.'
  },
  {
    id: 4,
    image: '/Jewellery/4.png',
    title: 'PearlDream Choker',
    subtitle: 'Necklace • Freshwater Pearls',
    price: '$150',
    description: 'A classic pearl choker with lustrous freshwater pearls for a touch of sophistication.'
  },
  {
    id: 5,
    image: '/Jewellery/5.png',
    title: 'DiamondTwist Ring',
    subtitle: 'Ring • White Gold',
    price: '$450',
    description: 'A stunning diamond ring set in white gold with a graceful twist design for brilliance.'
  },
  {
    id: 6,
    image: '/Jewellery/6.png',
    title: 'Emerald Grace Pendant',
    subtitle: 'Pendant • Gold Plated',
    price: '$130',
    description: 'A dazzling emerald pendant with a gold-plated chain, perfect for elegant evenings.'
  },
  {
    id: 7,
    image: '/Jewellery/7.png',
    title: 'SilverWave Anklet',
    subtitle: 'Anklet • Sterling Silver',
    price: '$65',
    description: 'A wavy-pattern anklet made of pure silver for a chic and beachy look.'
  },
  {
    id: 8,
    image: '/Jewellery/8.png',
    title: 'Ruby Radiance Studs',
    subtitle: 'Earrings • Ruby Stone',
    price: '$120',
    description: 'Gorgeous ruby studs set in gold for a pop of color and refined beauty.'
  },
  {
    id: 9,
    image: '/Jewellery/9.png',
    title: 'CharmLink Bracelet',
    subtitle: 'Bracelet • Stainless Steel',
    price: '$90',
    description: 'A stylish link bracelet with customizable charms that showcase your personality.'
  },
  {
    id: 10,
    image: '/Jewellery/10.png',
    title: 'OpalMist Necklace',
    subtitle: 'Necklace • Opal Gemstone',
    price: '$210',
    description: 'A soft glowing opal pendant necklace designed to capture natural iridescence.'
  },
  {
    id: 11,
    image: '/Jewellery/11.png',
    title: 'Sapphire Queen Ring',
    subtitle: 'Ring • Sapphire Stone',
    price: '$390',
    description: 'An exquisite sapphire ring surrounded by small diamonds, fit for a modern queen.'
  },
  {
    id: 12,
    image: '/Jewellery/12.png',
    title: 'Golden Halo Hoops',
    subtitle: 'Earrings • Gold-Plated',
    price: '$95',
    description: 'Bold yet elegant gold-plated hoops that complement both casual and formal looks.'
  },
  {
    id: 13,
    image: '/Jewellery/13.png',
    title: 'Moonlight Bangle Set',
    subtitle: 'Bangle • Silver Finish',
    price: '$180',
    description: 'A set of three silver bangles with moonlight shine, perfect for layering.'
  },
  {
    id: 14,
    image: '/Jewellery/14.png',
    title: 'RosePetal Brooch',
    subtitle: 'Brooch • Floral Design',
    price: '$70',
    description: 'An elegant rose-shaped brooch plated in rose gold with a subtle sparkle.'
  },
  {
    id: 15,
    image: '/Jewellery/15.png',
    title: 'Royal Crown Tiara',
    subtitle: 'Hair Accessory • Crystal',
    price: '$250',
    description: 'A sparkling tiara with crystal embellishments for special occasions and events.'
  },
  {
    id: 16,
    image: '/Jewellery/16.png',
    title: 'Amber Glow Pendant',
    subtitle: 'Pendant • Natural Amber',
    price: '$140',
    description: 'A warm amber pendant that radiates natural beauty and vintage charm.'
  },
  {
    id: 17,
    image: '/Jewellery/17.png',
    title: 'GoldenLeaf Hairpin Set',
    subtitle: 'Hair Accessory • Gold Tone',
    price: '$55',
    description: 'Delicate gold-tone hairpins inspired by nature, perfect for bridal styling.'
  },
  {
    id: 18,
    image: '/Jewellery/18.png',
    title: 'DiamondAura Necklace',
    subtitle: 'Necklace • Lab Diamond',
    price: '$500',
    description: 'A breathtaking lab-grown diamond necklace that sparkles with modern brilliance.'
  },
  {
    id: 19,
    image: '/Jewellery/19.png',
    title: 'Crystal Harmony Bracelet',
    subtitle: 'Bracelet • Multi-Stone',
    price: '$115',
    description: 'A beautiful bracelet with mixed crystals symbolizing peace and positive energy.'
  },
  {
    id: 20,
    image: '/Jewellery/20.png',
    title: 'Elegance Pearl Drop Earrings',
    subtitle: 'Earrings • Gold-Plated',
    price: '$135',
    description: 'Classic pearl drop earrings that add grace and sophistication to any occasion.'
  }
];

export default function Jewellery() {
  return (

    <section className="max-w-7xl mx-auto px-4 my-3 sm:px-6 lg:px-8 py-10 bg-slate-300">

      {/* Grid:
          small (sm): 2 columns
          md (tablet): 4 columns
          lg (desktop): 5 columns
      */}
       <h1 className="relative text-center mb-10 px-4">
        <span
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.15)" }}
        >
          JEWELLERIES
        </span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cardsData.map((card) => (
          <Link to={`/jewellery/${card.id}`} key={card.id}>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657 3.172 10.828a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{card.subtitle}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600">From</p>
                  <p className="text-lg font-bold text-slate-900">{card.price}</p>
                </div>
              </div>

             

                <div className="mt-4 flex items-center justify-between">
                  <button
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm transition-transform transform hover:scale-105 focus:outline-none"
                  >
                    Book
                  </button>
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