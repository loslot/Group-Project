// src/pages/Homesupply.tsx
import React from "react";
import { Link } from "react-router"; 
import { useCart } from "../components/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import toast from "react-hot-toast";

const cardsData = [
  {
    id: 61,
    image: "/Homesupply/1.png",
    title: "ComfortPlus Pillow Set",
    subtitle: "Bedroom • 2 Pieces",
    price: "$45",
    description: "Soft microfiber pillows offering plush comfort and lasting support.",
    rating: 4.6,
  },
  {
    id: 62,
    image: "/Homesupply/2.png",
    title: "EcoFresh Bedsheet Set",
    subtitle: "Bedroom • 4 Pieces",
    price: "$70",
    description: "Breathable cotton bedsheets designed for durability and comfort.",
    rating: 4.7,
  },
  {
    id: 63,
    image: "/Homesupply/3.png",
    title: "PureAroma Scented Candle",
    subtitle: "Living Room • 250g",
    price: "$25",
    description: "Soothing lavender and vanilla scented candle.",
    rating: 4.5,
  },
  {
    id: 64,
    image: "/Homesupply/4.png",
    title: "UltraSoft Bath Towel Set",
    subtitle: "Bathroom • 6 Pieces",
    price: "$55",
    description: "Highly absorbent 100% cotton towels.",
    rating: 4.6,
  },
  {
    id: 65,
    image: "/Homesupply/5.png",
    title: "Modern Ceramic Vase",
    subtitle: "Decor • Minimalist Design",
    price: "$35",
    description: "Sleek ceramic vase for modern elegance.",
    rating: 4.4,
  },
  {
    id: 66,
    image: "/Homesupply/6.png",
    title: "Smart LED Table Lamp",
    subtitle: "Lighting • Adjustable",
    price: "$60",
    description: "Dimmable LED lamp with touch control.",
    rating: 4.7,
  },
  {
    id: 67,
    image: "/Homesupply/7.png",
    title: "AquaPure Water Filter Pitcher",
    subtitle: "Kitchen • 2L Capacity",
    price: "$48",
    description: "Removes impurities for clean water.",
    rating: 4.5,
  },
  {
    id: 68,
    image: "/Homesupply/8.png",
    title: "Essential Oil Diffuser",
    subtitle: "Living Room • 300ml",
    price: "$40",
    description: "Ultrasonic diffuser with relaxing mist.",
    rating: 4.6,
  },
  {
    id: 69,
    image: "/Homesupply/9.png",
    title: "ChefMaster Knife Set",
    subtitle: "Kitchen • 6 Pieces",
    price: "$85",
    description: "Precision stainless steel knives.",
    rating: 4.8,
  },
  {
    id: 70,
    image: "/Homesupply/10.png",
    title: "AirBreeze Floor Fan",
    subtitle: "Appliance • 3-Speed",
    price: "$75",
    description: "Quiet and powerful cooling fan.",
    rating: 4.6,
  },
  {
    id: 71,
    image: "/Homesupply/11.png",
    title: "WoodCraft Coffee Table",
    subtitle: "Living Room • Solid Wood",
    price: "$190",
    description: "Elegant wooden coffee table.",
    rating: 4.7,
  },
  {
    id: 72,
    image: "/Homesupply/12.png",
    title: "FreshAir Room Purifier",
    subtitle: "Appliance • HEPA Filter",
    price: "$120",
    description: "Removes dust, pollen, and odors.",
    rating: 4.8,
  },
  {
    id: 73,
    image: "/Homesupply/13.png",
    title: "CozyHomesupply Blanket",
    subtitle: "Bedroom • 200x220cm",
    price: "$65",
    description: "Soft fleece blanket for warmth.",
    rating: 4.6,
  },
  {
    id: 74,
    image: "/Homesupply/14.png",
    title: "Stainless Cookware Set",
    subtitle: "Kitchen • 8 Pieces",
    price: "$150",
    description: "Even heat distribution cookware.",
    rating: 4.7,
  },
  {
    id: 75,
    image: "/Homesupply/15.png",
    title: "AromaFresh Hand Soap",
    subtitle: "Bathroom • 500ml",
    price: "$18",
    description: "Gentle foaming hand soap.",
    rating: 4.5,
  },
  {
    id: 76,
    image: "/Homesupply/16.png",
    title: "SmartSense Trash Can",
    subtitle: "Homesupply • Motion Sensor",
    price: "$90",
    description: "Touch-free stainless trash can.",
    rating: 4.6,
  },
  {
    id: 77,
    image: "/Homesupply/17.png",
    title: "Velvet Curtain Set",
    subtitle: "Living Room • 2 Panels",
    price: "$110",
    description: "Elegant velvet curtains.",
    rating: 4.7,
  },
  {
    id: 78,
    image: "/Homesupply/18.png",
    title: "KitchenPro Blender",
    subtitle: "Appliance • 1000W",
    price: "$130",
    description: "High-speed blender for smoothies.",
    rating: 4.8,
  },
  {
    id: 79,
    image: "/Homesupply/19.png",
    title: "PureSoft Carpet Rug",
    subtitle: "Living Room • 160x230cm",
    price: "$140",
    description: "Plush, non-slip rug.",
    rating: 4.6,
  },
  {
    id: 80,
    image: "/Homesupply/20.png",
    title: "EcoDry Laundry Basket",
    subtitle: "Homesupply • Bamboo Frame",
    price: "$50",
    description: "Eco-friendly bamboo laundry basket.",
    rating: 4.5,
  },
];

export default function Homesupply() {
  const { addToCart, getItemQuantity } = useCart(); // Safe + correct
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <section className="max-w-7xl mx-auto mt-4 my-3 px-4 sm:px-6 lg:px-8 py-10">
      {/* Gradient Title */}
      <h1 className="relative text-3xl sm:text-5xl font-extrabold mb-12 text-white text-center rounded-3xl px-12 py-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/60 uppercase tracking-wider mx-auto w-fit overflow-hidden">
        <span className="relative z-10">HOMESUPPLY</span>
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-white to-indigo-400 opacity-30 animate-shimmer"></span>
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
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>

       {/* Responsive Grid: 2 / 4 / 5 */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {cardsData.map((card, index) => {
                const isInWishlist = Array.isArray(wishlist) && wishlist.some((i) => i.id === card.id);
                const quantity = typeof getItemQuantity === "function" ? getItemQuantity(card.id) : 0;

                return (
                  <article
                    key={card.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                  >
                    {/* Image + Badges + Heart */}
                    <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                      <Link to={`/details/${card.id}`} className="block w-full h-full">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/300x200?text=No+Image";
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
                              { duration: 1500 }
                            );
                          }
                        }}
                        className="absolute right-3 top-3 p-2 rounded-full bg-white/90 shadow-md hover:scale-110 transition z-10"
                        aria-label="Toggle wishlist"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transition-all ${
                            isInWishlist ? "fill-red-600 text-red-600" : "text-gray-500 hover:text-red-500"
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
                          <p className="text-lg font-bold text-slate-900">{card.price}</p>
                        </div>
                      </div>
      
                      <div className="mt-auto flex gap-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (typeof addToCart === "function") {
                              addToCart(card);
                              toast.success(`${card.title} added to cart!`, { duration: 1200 });
                            }
                          }}
                          className="cursor-pointer inline-flex items-center justify-center gap-2 px-2 md:px-3 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium shadow-sm transition-transform transform hover:scale-105 focus:outline-none"
                        > 
                          Add Cart
                        </button>
                        <Link
                          to={`/details/${card.id}`}
                          className="text-sm text-indigo-600 font-medium hover:underline ml-6 mt-2"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
      
                    {/* Footer */}
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>Rating: {card.rating}</span>
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