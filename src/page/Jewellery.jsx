import React, { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../components/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import toast from "react-hot-toast"; 

const cardsData = [
  {
    id: 81,
    image: "/Jewellery/1.png",
    title: "Golden Elegance Necklace",
    subtitle: "Necklace • 18K Gold",
    price: "$320",
    description:
      "A delicate 18K gold necklace featuring a minimalist pendant for timeless elegance.",
    rating: 4.8,
  },
  {
    id: 82,
    image: "/Jewellery/2.png",
    title: "Crystal Bloom Earrings",
    subtitle: "Earrings • Sterling Silver",
    price: "$85",
    description:
      "Sparkling crystal earrings crafted from premium silver to add charm to any outfit.",
    rating: 4.6,
  },
  {
    id: 83,
    image: "/Jewellery/3.png",
    title: "RoseGold Infinity Bracelet",
    subtitle: "Bracelet • Adjustable Fit",
    price: "$110",
    description:
      "A romantic rose gold bracelet symbolizing eternal love with an elegant infinity charm.",
    rating: 4.7,
  },
  {
    id: 84,
    image: "/Jewellery/4.png",
    title: "DiamondTwist Ring",
    subtitle: "Ring • White Gold",
    price: "$450",
    description:
      "A stunning diamond ring set in white gold with a graceful twist design for brilliance.",
    rating: 4.9,
  },
  {
    id: 85,
    image: "/Jewellery/5.png",
    title: "Emerald Grace Pendant",
    subtitle: "Pendant • Gold Plated",
    price: "$130",
    description:
      "A dazzling emerald pendant with a gold-plated chain, perfect for elegant evenings.",
    rating: 4.6,
  },
  {
    id: 86,
    image: "/Jewellery/6.png",
    title: "SilverWave Anklet",
    subtitle: "Anklet • Sterling Silver",
    price: "$65",
    description:
      "A wavy-pattern anklet made of pure silver for a chic and beachy look.",
    rating: 4.5,
  },
  {
    id: 87,
    image: "/Jewellery/7.png",
    title: "Ruby Radiance Studs",
    subtitle: "Earrings • Ruby Stone",
    price: "$120",
    description:
      "Gorgeous ruby studs set in gold for a pop of color and refined beauty.",
    rating: 4.7,
  },
  {
    id: 88,
    image: "/Jewellery/8.png",
    title: "CharmLink Bracelet",
    subtitle: "Bracelet • Stainless Steel",
    price: "$90",
    description:
      "A stylish link bracelet with customizable charms that showcase your personality.",
    rating: 4.5,
  },
  {
    id: 89,
    image: "/Jewellery/9.png",
    title: "OpalMist Necklace",
    subtitle: "Necklace • Opal Gemstone",
    price: "$210",
    description:
      "A soft glowing opal pendant necklace designed to capture natural iridescence.",
    rating: 4.8,
  },
  {
    id: 90,
    image: "/Jewellery/10.png",
    title: "Sapphire Queen Ring",
    subtitle: "Ring • Sapphire Stone",
    price: "$390",
    description:
      "An exquisite sapphire ring surrounded by small diamonds, fit for a modern queen.",
    rating: 4.9,
  },
  {
    id: 91,
    image: "/Jewellery/11.png",
    title: "Golden Halo Hoops",
    subtitle: "Earrings • Gold-Plated",
    price: "$95",
    description:
      "Bold yet elegant gold-plated hoops that complement both casual and formal looks.",
    rating: 4.6,
  },
  {
    id: 92,
    image: "/Jewellery/12.png",
    title: "Moonlight Bangle Set",
    subtitle: "Bangle • Silver Finish",
    price: "$180",
    description:
      "A set of three silver bangles with moonlight shine, perfect for layering.",
    rating: 4.7,
  },
  {
    id: 93,
    image: "/Jewellery/13.png",
    title: "RosePetal Brooch",
    subtitle: "Brooch • Floral Design",
    price: "$70",
    description:
      "An elegant rose-shaped brooch plated in rose gold with a subtle sparkle.",
    rating: 4.5,
  },
  {
    id: 94,
    image: "/Jewellery/14.png",
    title: "Royal Crown Tiara",
    subtitle: "Hair Accessory • Crystal",
    price: "$250",
    description:
      "A sparkling tiara with crystal embellishments for special occasions and events.",
    rating: 4.8,
  },
  {
    id: 95,
    image: "/Jewellery/15.png",
    title: "Amber Glow Pendant",
    subtitle: "Pendant • Natural Amber",
    price: "$140",
    description:
      "A warm amber pendant that radiates natural beauty and vintage charm.",
    rating: 4.6,
  },
  {
    id: 96,
    image: "/Jewellery/16.png",
    title: "GoldenLeaf Hairpin Set",
    subtitle: "Hair Accessory • Gold Tone",
    price: "$55",
    description:
      "Delicate gold-tone hairpins inspired by nature, perfect for bridal styling.",
    rating: 4.5,
  },
  {
    id: 97,
    image: "/Jewellery/17.png",
    title: "DiamondAura Necklace",
    subtitle: "Necklace • Lab Diamond",
    price: "$500",
    description:
      "A breathtaking lab-grown diamond necklace that sparkles with modern brilliance.",
    rating: 4.9,
  },
  {
    id: 98,
    image: "/Jewellery/18.png",
    title: "Crystal Harmony Bracelet",
    subtitle: "Bracelet • Multi-Stone",
    price: "$115",
    description:
      "A beautiful bracelet with mixed crystals symbolizing peace and positive energy.",
    rating: 4.7,
  },
  {
    id: 99,
    image: "/Jewellery/19.png",
    title: "Elegance Pearl Drop Earrings",
    subtitle: "Earrings • Gold-Plated",
    price: "$135",
    description:
      "Classic pearl drop earrings that add grace and sophistication to any occasion.",
    rating: 4.7,
  },
   {
    id: 100,
    image: "/Jewellery/20.png",
    title: "Elegance Pearl Drop Earrings",
    subtitle: "Earrings • Gold-Plated",
    price: "$135",
    description:
      "Gorgeous gold-plated earrings with a pearl drop design for a refined look.",
    Categorization: true,
  },
];

export default function Jewellery() {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useWishlist(); 

  return (
    <section className="max-w-7xl mx-auto mt-4 my-3 px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="relative text-3xl sm:text-5xl font-extrabold mb-12 text-white text-center rounded-3xl px-12 py-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-2xl shadow-blue-500/60 uppercase tracking-wider mx-auto w-fit overflow-hidden">
        <span className="relative z-10">Jewellery</span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-200 via-white to-blue-400 opacity-30 animate-shimmer"></span>
      </h1>

      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}
      </style>


       {/* Responsive Grid: 2 / 4 / 5 */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {cardsData.map((card) => {
                const isInWishlist = Array.isArray(wishlist) && wishlist.some((i) => i.id === card.id);
                const quantity = typeof getItemQuantity === "function" ? getItemQuantity(card.id) : 0;
      
                return (
                  <article
                    key={card.id}
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