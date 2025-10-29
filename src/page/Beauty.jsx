import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { CartContext } from "../components/CartContext";
import { useContext } from "react";
// Responsive 5/4/2 Card Grid
// - Desktop (lg): 5 columns
// - Tablet (md): 4 columns
// - Mobile (sm): 2 columns
// - Smooth hover transitions using Tailwind utilities
const cardsData = [
  {
    id: 21,
    image: "/Beauty/1.png",
    title: "Radiant Glow Serum",
    subtitle: "Skincare • 30ml",
    price: "$45",
    description:
      "A lightweight serum that brightens dull skin, evens tone, and restores a youthful glow.",
    rating: 4.7,
  },
  {
    id: 22,
    image: "/Beauty/2.png",
    title: "Velvet Matte Lipstick",
    subtitle: "Makeup • 12 shades",
    price: "$25",
    description:
      "A creamy matte lipstick that delivers rich color with a smooth, long-lasting finish.",
    rating: 4.5,
  },
  {
    id: 23,
    image: "/Beauty/3.png",
    title: "HydraBoost Moisturizer",
    subtitle: "Skincare • 50ml",
    price: "$38",
    description:
      "An ultra-hydrating moisturizer infused with hyaluronic acid for all-day smoothness.",
    rating: 4.6,
  },
  {
    id: 24,
    image: "/Beauty/4.png",
    title: "Silky Shine Hair Oil",
    subtitle: "Haircare • 100ml",
    price: "$32",
    description:
      "A nourishing oil that tames frizz, adds shine, and keeps hair soft and healthy.",
    rating: 4.4,
  },
  {
    id: 25,
    image: "/Beauty/5.png",
    title: "Rose Bliss Face Mask",
    subtitle: "Skincare • 100g",
    price: "$28",
    description:
      "A refreshing rose-infused mask that hydrates, purifies, and soothes the skin.",
    rating: 4.5,
  },
  {
    id: 26,
    image: "/Beauty/6.png",
    title: "Golden Repair Shampoo",
    subtitle: "Haircare • 250ml",
    price: "$30",
    description:
      "A nourishing shampoo enriched with argan oil to strengthen and repair damaged hair.",
    rating: 4.6,
  },
  {
    id: 27,
    image: "/Beauty/7.png",
    title: "Crystal Clear Toner",
    subtitle: "Skincare • 120ml",
    price: "$22",
    description:
      "A gentle toner that tightens pores, balances pH, and refreshes your skin.",
    rating: 4.3,
  },
  {
    id: 28,
    image: "/Beauty/8.png",
    title: "Pure Bloom Perfume",
    subtitle: "Fragrance • 50ml",
    price: "$60",
    description:
      "A floral fragrance with notes of jasmine, rose, and vanilla for an elegant, timeless scent.",
    rating: 4.8,
  },
  {
    id: 29,
    image: "/Beauty/9.png",
    title: "Luxe Eye Cream",
    subtitle: "Skincare • 20ml",
    price: "$55",
    description:
      "An anti-aging eye cream that reduces puffiness, fine lines, and dark circles.",
    rating: 4.7,
  },
  {
    id: 30,
    image: "/Beauty/10.png",
    title: "Silk Touch Foundation",
    subtitle: "Makeup • 30ml",
    price: "$40",
    description:
      "A lightweight liquid foundation offering smooth coverage and a natural satin finish.",
    rating: 4.6,
  },
  {
    id: 31,
    image: "/Beauty/11.png",
    title: "Berry Tint Lip Balm",
    subtitle: "Makeup • 10g",
    price: "$15",
    description:
      "A hydrating lip balm with a hint of berry tint to keep lips soft and naturally glowing.",
    rating: 4.4,
  },
  {
    id: 32,
    image: "/Beauty/12.png",
    title: "Coconut Body Lotion",
    subtitle: "Body Care • 200ml",
    price: "$27",
    description:
      "A deeply moisturizing lotion that softens skin with coconut oil and vitamin E.",
    rating: 4.5,
  },
  {
    id: 33,
    image: "/Beauty/13.png",
    title: "Charcoal Detox Cleanser",
    subtitle: "Skincare • 100ml",
    price: "$26",
    description:
      "A deep-cleansing facial wash that removes impurities and clears clogged pores.",
    rating: 4.6,
  },
  {
    id: 34,
    image: "/Beauty/14.png",
    title: "Lavender Night Cream",
    subtitle: "Skincare • 50ml",
    price: "$35",
    description:
      "A calming night cream that nourishes skin overnight and promotes a healthy glow.",
    rating: 4.7,
  },
  {
    id: 35,
    image: "/Beauty/15.png",
    title: "Aloe Vera Gel",
    subtitle: "Skincare • 200ml",
    price: "$20",
    description:
      "A soothing gel perfect for hydrating and cooling the skin after sun exposure.",
    rating: 4.5,
  },
  {
    id: 36,
    image: "/Beauty/16.png",
    title: "Diamond Glow Highlighter",
    subtitle: "Makeup • Compact",
    price: "$29",
    description:
      "A shimmery highlighter that adds a radiant glow to cheekbones and eyes.",
    rating: 4.6,
  },
  {
    id: 37,
    image: "/Beauty/17.png",
    title: "Botanical Face Mist",
    subtitle: "Skincare • 120ml",
    price: "$24",
    description:
      "A refreshing facial mist infused with natural botanicals for instant hydration.",
    rating: 4.4,
  },
  {
    id: 38,
    image: "/Beauty/18.png",
    title: "Peach Smooth Body Scrub",
    subtitle: "Body Care • 150g",
    price: "$33",
    description:
      "An exfoliating scrub that removes dead skin and leaves your body smooth and glowing.",
    rating: 4.6,
  },
  {
    id: 39,
    image: "/Beauty/19.png",
    title: "Herbal Hair Conditioner",
    subtitle: "Haircare • 250ml",
    price: "$28",
    description:
      "A natural conditioner that strengthens and smooths hair with herbal extracts.",
    rating: 4.5,
  },
  {
    id: 40,
    image: "/Beauty/20.png",
    title: "Ocean Breeze Body Mist",
    subtitle: "Fragrance • 150ml",
    price: "$31",
    description:
      "A refreshing body mist with aquatic and citrus notes for a clean, energizing scent.",
    rating: 4.7,
  },
];

export default function Beauty() {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <section className="max-w-7xl mx-auto mt-4 my-3 px-4 sm:px-6 lg:px-8 py-10">
      <h1
        className="
          relative text-3xl sm:text-5xl font-extrabold mb-12 text-white text-center
          rounded-3xl px-12 py-6
          bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600
          shadow-2xl shadow-blue-500/60
          uppercase tracking-wider
          mx-auto w-fit
          overflow-hidden
        "
      >
        <span className="relative z-10">Beauty AND Skincare</span>
        <span
          className="
            absolute inset-0 bg-gradient-to-r from-blue-200 via-white to-blue-400
            opacity-30
            animate-[shimmer_2s_infinite]
          "
        ></span>
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

      {/* Cart Summary */}
      <div className="mb-6 text-right">
        <Link
          to="/cart"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-sm hover:scale-105 transition-transform"
        >
          View Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </Link>
      </div>

      {/* Grid:
          small (sm): 2 columns
          md (tablet): 4 columns
          lg (desktop): 5 columns
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cardsData.map((card) => (
          <Link to={`/details/${card.id}`} key={card.id}>
            <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transform transition duration-300 ease-in-out hover:-translate-y-1">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/200")
                  }
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
                    <p className="mt-1 text-sm text-slate-500">
                      {card.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">From</p>
                    <p className="text-lg font-bold text-slate-900">
                      {card.price}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevent Link navigation
                      addToCart(card);
                      alert(`${card.title} added to cart!`);
                    }}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm transition-transform transform hover:scale-105 focus:outline-none"
                  >
                    Add to Cart
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
