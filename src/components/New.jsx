// src/pages/New.jsx
import React from "react";
import { Link } from "react-router"; // Fixed: was "react-router"
import { useCart } from "../components/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import toast from "react-hot-toast";

const cardsData = [
  {
    id: 28,
    image: "/Beauty/8.png",
    title: "Pure Bloom Perfume",
    subtitle: "Fragrance • 50ml",
    price: "0.01$",
    rating: 4.6,
  },
  {
    id: 1,
    image: "/Electronic/1.png",
    title: "REDMI Airpods 6 Pro",
    subtitle: "Airpods • 128GB",
    price: "0.01$",
    rating: 4.8,
  },
  {
    id: 47,
    image: "/Fashion/7.png",
    title: "Wool Knit Sweater",
    subtitle: "Men fashion • Winter Wear",
    price: "$70",
    rating: 4.2,
  },
  {
    id: 41,
    image: "/Homesupply/1.png",
    title: "ComfortPlus Pillow Set",
    subtitle: "Bedroom • 2 Pieces",
    price: "$45",
    rating: 4.5,
  },
  {
    id: 90,
    image: "/Jewellery/11.png",
    title: "Sapphire Queen Ring",
    subtitle: "Ring • Sapphire Stone",
    price: "$390",
    rating: 4.9,
  },
  {
    id: 3,
    image: "/Electronic/3.png",
    title: "Smart Watch Waterproof",
    subtitle: "Smartwatch • 55-inch",
    price: "$300",
    rating: 4.7,
  },
  {
    id: 34,
    image: "/Beauty/14.png",
    title: "Lavender Night Cream",
    subtitle: "Skincare • 50ml",
    price: "$35",
    rating: 4.3,
  },
  {
    id: 81,
    image: "/Jewellery/1.png",
    title: "Golden Elegance Necklace",
    subtitle: "Necklace • 18K Gold",
    price: "$320",
    rating: 4.8,
  },
  {
    id: 70,
    image: "/Homesupply/10.png",
    title: "AirBreeze Floor Fan",
    subtitle: "Homesupply Appliance • 3-Speed",
    price: "$75",
    rating: 4.5,
  },
  {
    id: 48,
    image: "/Fashion/8.png",
    title: "Floral Maxi Dress",
    subtitle: "Women • Bohemian Style",
    price: "$110",
    rating: 4.7,
  },
  {
    id: 85,
    image: "/Jewellery/6.png",
    title: "Emerald Grace Pendant",
    subtitle: "Pendant • Gold Plated",
    price: "$130",
    rating: 4.6,
  },
  {
    id: 65,
    image: "/Homesupply/5.png",
    title: "Modern Ceramic Vase",
    subtitle: "Decor • Minimalist Design",
    price: "$35",
    rating: 4.2,
  },
  {
    id: 53,
    image: "/Fashion/13.png",
    title: "Classic Oxford Shoes",
    subtitle: "Men • Leather",
    price: "$130",
    rating: 4.8,
  },
  {
    id: 12,
    image: "/Electronic/12.png",
    title: "Smart Watch for Men Women",
    subtitle: "Smartwatch • Fast Charge",
    price: "$120",
    rating: 4.5,
  },
  {
    id: 39,
    image: "/Beauty/19.png",
    title: "The Fume Lab Face",
    subtitle: "Skincare • 250ml",
    price: "$28",
    rating: 4.4,
  },
  {
    id: 60,
    image: "/Fashion/20.png",
    title: "Denim Mini Skirt 2025",
    subtitle: "Women fashion • Casual Wear",
    price: "$65",
    rating: 4.3,
  },
  {
    id: 2,
    image: "/Electronic/2.png",
    title: "JBL Speaker Viral Pro",
    subtitle: "Speaker • Bluetooth 5.3",
    price: "$209",
    rating: 4.6,
  },
  {
    id: 36,
    image: "/Beauty/16.png",
    title: "Diamond Glow Highlighter",
    subtitle: "Makeup • Compact",
    price: "$29",
    rating: 4.5,
  },
  {
    id: 93,
    image: "/Jewellery/14.png",
    title: "RosePetal Brooch",
    subtitle: "Brooch • Floral Design",
    price: "$70",
    rating: 4.6,
  },
  {
    id: 74,
    image: "/Homesupply/14.png",
    title: "Stainless Cookware Set",
    subtitle: "Kitchen • 8 Pieces",
    price: "$150",
    rating: 4.7,
  },
];

export default function New() {
  const { addToCart, getItemQuantity = () => 0 } = useCart() || {};
  const { wishlist = [], toggleWishlist = () => {} } = useWishlist() || {};

  return (
    <section className="max-w-7xl mx-auto mt-4 my-3 px-4 sm:px-6 lg:px-8 py-10">
      {/* Shimmer Title */}
      <h1 className="relative text-3xl sm:text-5xl font-extrabold mb-12 text-white text-center rounded-3xl px-12 py-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-2xl shadow-blue-500/60 uppercase tracking-wider mx-auto w-fit overflow-hidden">
        <span className="relative z-10">New's Product</span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-200 via-white to-blue-400 opacity-30 animate-shimmer"></span>
      </h1>

      {/* Shimmer Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Responsive Grid: 2 / 4 / 5 */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cardsData.map((card, index) => {
          const isInWishlist =
            Array.isArray(wishlist) && wishlist.some((i) => i.id === card.id);
          const quantity =
            typeof getItemQuantity === "function"
              ? getItemQuantity(card.id)
              : 0;

          return (
            <article
              key={card.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Image + Badges + Heart */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <Link
                  to={`/details/${card.id}`}
                  className="block w-full h-full"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/300x200?text=No+Image";
                    }}
                  />
                </Link>

                <div className="absolute left-3 top-3 bg-white backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-800">
                  Featured
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (typeof toggleWishlist === "function") {
                      toggleWishlist(card);
                      toast.success(
                        isInWishlist
                          ? `${card.title} removed from wishlist`
                          : `${card.title} added to wishlist`,
                        { duration: 100 }
                      );
                    }
                  }}
                  className="absolute right-3 top-3 p-2 rounded-full bg-white/90 shadow-md hover:scale-110 transition z-10"
                  aria-label="Toggle wishlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-all ${
                      isInWishlist
                        ? "fill-red-600 text-red-600"
                        : "text-gray-500"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 pr-2">
                    <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 line-clamp-1">
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

                {/* Buttons */}
                <div className="mt-auto flex gap-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (typeof addToCart === "function") {
                        addToCart(card);
                        toast.success(`${card.title} added to cart!`, {
                          duration: 1200,
                        });
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition"
                  >
                    Add Cart
                  </button>

                  <Link
                    to={`/details/${card.id}`}
                    className="text-sm text-indigo-600 m-auto font-medium hover:underline  "
                  >
                    Details
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Rating: {card.rating}⭐</span>
                  <span>Free cancellation</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
