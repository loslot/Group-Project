import React from 'react'

// Responsive 5/4/2 Card Grid
// - Desktop (lg): 5 columns
// - Tablet (md): 4 columns
// - Mobile (sm): 2 columns
// - Smooth hover transitions using Tailwind utilities

 const cardsData = [
  {
    id: 1,
    image: '/New/1.png',
    title: 'Cozy Cabin',
    subtitle: 'Mountains • 2 nights',
    price: '$99',
    description: 'A peaceful wooden cabin surrounded by nature, perfect for relaxing and enjoying mountain views.'
  },
  {
    id: 2,
    image: '/New/2.png',
    title: 'Beach House',
    subtitle: 'Sea • 4 nights',
    price: '$180',
    description: 'A bright and airy house located right on the beach, ideal for sunbathing and watching sunsets.'
  },
  {
    id: 3,
    image: '/New/3.png',
    title: 'City Loft',
    subtitle: 'Downtown • 1 night',
    price: '$75',
    description: 'A modern loft in the heart of the city, close to shopping, dining, and nightlife attractions.'
  },
  {
    id: 4,
    image: '/New/4.png',
    title: 'Lake Retreat',
    subtitle: 'Lakeside • 3 nights',
    price: '$140',
    description: 'A cozy lakeside retreat offering calm waters, fresh air, and beautiful evening sunsets.'
  },
  {
    id: 5,
    image: '/New/5.png',
    title: 'Desert Escape',
    subtitle: 'Sahara • 5 nights',
    price: '$220',
    description: 'An elegant desert stay with breathtaking dune views and peaceful nights under the stars.'
  },
  {
    id: 6,
    image: '/New/1.png',
    title: 'Jungle Lodge',
    subtitle: 'Rainforest • 3 nights',
    price: '$160',
    description: 'Stay deep within the jungle and experience the natural beauty and sounds of the rainforest.'
  },
  {
    id: 7,
    image: '/New/2.png',
    title: 'Snow Chalet',
    subtitle: 'Alps • 2 nights',
    price: '$190',
    description: 'A warm alpine chalet with a fireplace and mountain views — perfect for a winter getaway.'
  },
  {
    id: 8,
    image: '/New/3.png',
    title: 'Island Villa',
    subtitle: 'Tropical • 5 nights',
    price: '$250',
    description: 'A luxury villa surrounded by turquoise waters and white sands for a dream island vacation.'
  },
  {
    id: 9,
    image: '/New/4.png',
    title: 'Forest Cabin',
    subtitle: 'Woodlands • 3 nights',
    price: '$120',
    description: 'Reconnect with nature in this rustic forest cabin hidden among tall trees and chirping birds.'
  },
  {
    id: 10,
    image: '/New/5.png',
    title: 'Luxury Penthouse',
    subtitle: 'Skyline • 2 nights',
    price: '$300',
    description: 'Enjoy a panoramic city view from a modern penthouse with elegant design and top amenities.'
  },
  {
    id: 11,
    image: '/New/1.png',
    title: 'Farm Stay',
    subtitle: 'Countryside • 4 nights',
    price: '$110',
    description: 'Experience peaceful country life, fresh air, and local food at this charming farmhouse retreat.'
  },
  {
    id: 12,
    image: '/New/2.png',
    title: 'Riverside Bungalow',
    subtitle: 'Riverside • 3 nights',
    price: '$130',
    description: 'Relax beside a quiet river with scenic views and enjoy canoeing or fishing right at your doorstep.'
  },
  {
    id: 13,
    image: '/New/3.png',
    title: 'Mountain Resort',
    subtitle: 'Highlands • 5 nights',
    price: '$270',
    description: 'A luxury mountain resort offering fresh air, hiking trails, and panoramic views of nature.'
  },
  {
    id: 14,
    image: '/New/4.png',
    title: 'Eco Dome',
    subtitle: 'Nature Park • 2 nights',
    price: '$150',
    description: 'A unique eco-friendly dome offering a modern stay with a focus on sustainability and comfort.'
  },
  {
    id: 15,
    image: '/New/5.png',
    title: 'Cliffside Cottage',
    subtitle: 'Seaside Cliff • 3 nights',
    price: '$200',
    description: 'A private cliffside cottage with stunning ocean views and cozy interiors for couples or families.'
  }

];

export default function Accessories() {
  return (

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800 text-center">New</h2>

      {/* Grid:
          small (sm): 2 columns
          md (tablet): 4 columns
          lg (desktop): 5 columns
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cardsData.map((card) => (
          <article
            key={card.id}
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
                <h3
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm transition-transform transform hover:scale-105 focus:outline-none"
                >
                  Book
                </h3>
                <button className="text-sm text-indigo-600 font-medium hover:underline focus:outline-none">
                  Details
                </button>
              </div>
            </div>

            <div className="px-4 pb-4 sm:px-5 sm:pb-5">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>⭐ 4.7</span>
                <span>Free cancellation</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

  )
}
