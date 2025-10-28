import React, { useContext } from "react";
import { Link } from "react-router"; 
import { CartContext } from "../components/CartContext";

const cardsData = [
  {
    id: 41,
    image: "/Fashion/1.png",
    title: "Classic Denim Jacket",
    subtitle: "Outerwear • Unisex",
    price: "$79",
    description:
      "A timeless denim jacket with a modern fit, perfect for layering and casual outfits.",
    rating: 4.6,
  },
  {
    id: 42,
    image: "/Fashion/2.png",
    title: "Elegant Silk Dress",
    subtitle: "Women • Evening Wear",
    price: "$120",
    description:
      "A luxurious silk dress designed with soft fabric and graceful draping for special occasions.",
    rating: 4.8,
  },
  {
    id: 43,
    image: "/Fashion/3.png",
    title: "Urban Slim Jeans",
    subtitle: "Men • Stretch Fit",
    price: "$65",
    description:
      "Comfortable slim-fit jeans made from durable stretch denim for everyday wear.",
    rating: 4.5,
  },
  {
    id: 44,
    image: "/Fashion/4.png",
    title: "Leather Crossbody Bag",
    subtitle: "Accessories • Genuine Leather",
    price: "$95",
    description:
      "A sleek and compact leather bag ideal for carrying your essentials in style.",
    rating: 4.7,
  },
  {
    id: 45,
    image: "/Fashion/5.png",
    title: "Cotton Graphic T-Shirt",
    subtitle: "Unisex • Street Style",
    price: "$35",
    description:
      "Soft, breathable cotton T-shirt with a bold graphic design for a trendy, casual look.",
    rating: 4.4,
  },
  {
    id: 46,
    image: "/Fashion/6.png",
    title: "Sporty White Sneakers",
    subtitle: "Footwear • Unisex",
    price: "$85",
    description:
      "Lightweight sneakers with cushioned soles and a minimalist design for everyday comfort.",
    rating: 4.6,
  },
  {
    id: 47,
    image: "/Fashion/7.png",
    title: "Wool Knit Sweater",
    subtitle: "Men • Winter Wear",
    price: "$70",
    description:
      "A cozy wool-blend sweater that keeps you warm while maintaining a stylish silhouette.",
    rating: 4.5,
  },
  {
    id: 48,
    image: "/Fashion/8.png",
    title: "Floral Maxi Dress",
    subtitle: "Women • Bohemian Style",
    price: "$110",
    description:
      "A flowy maxi dress with a floral pattern, ideal for sunny days and casual events.",
    rating: 4.7,
  },
  {
    id: 49,
    image: "/Fashion/9.png",
    title: "Classic Aviator Sunglasses",
    subtitle: "Accessories • UV Protection",
    price: "$55",
    description:
      "Stylish aviator sunglasses offering UV400 protection and a timeless look.",
    rating: 4.6,
  },
  {
    id: 50,
    image: "/Fashion/10.png",
    title: "Casual Linen Shirt",
    subtitle: "Men • Breathable Fabric",
    price: "$60",
    description:
      "Lightweight linen shirt perfect for summer days with a relaxed yet polished vibe.",
    rating: 4.5,
  },
  {
    id: 51,
    image: "/Fashion/11.png",
    title: "Chunky Knit Scarf",
    subtitle: "Accessories • Unisex",
    price: "$40",
    description:
      "A soft, oversized knit scarf that keeps you cozy and adds texture to your outfit.",
    rating: 4.4,
  },
  {
    id: 52,
    image: "/Fashion/12.png",
    title: "Pleated Midi Skirt",
    subtitle: "Women • Casual Chic",
    price: "$75",
    description:
      "A lightweight, elegant skirt with pleats that flow beautifully with every step.",
    rating: 4.6,
  },
  {
    id: 53,
    image: "/Fashion/13.png",
    title: "Classic Oxford Shoes",
    subtitle: "Men • Leather",
    price: "$130",
    description:
      "Handcrafted leather Oxfords with a timeless design, perfect for both business and casual wear.",
    rating: 4.8,
  },
  {
    id: 54,
    image: "/Fashion/14.png",
    title: "Vintage Tote Bag",
    subtitle: "Accessories • Canvas",
    price: "$45",
    description:
      "A durable canvas tote with vintage prints, great for daily use and weekend trips.",
    rating: 4.5,
  },
  {
    id: 55,
    image: "/Fashion/15.png",
    title: "Elegant Pearl Necklace",
    subtitle: "Jewelry • Classic Style",
    price: "$150",
    description:
      "A refined pearl necklace that adds sophistication to any outfit or special occasion.",
    rating: 4.9,
  },
  {
    id: 56,
    image: "/Fashion/16.png",
    title: "Summer Sandals",
    subtitle: "Footwear • Women",
    price: "$55",
    description:
      "Comfortable flat sandals designed for warm days with soft straps and durable soles.",
    rating: 4.5,
  },
  {
    id: 57,
    image: "/Fashion/17.png",
    title: "Tailored Blazer",
    subtitle: "Men • Formal Wear",
    price: "$145",
    description:
      "A sharp, slim-fit blazer crafted from premium fabric for a refined, confident look.",
    rating: 4.8,
  },
  {
    id: 58,
    image: "/Fashion/18.png",
    title: "Casual Hoodie",
    subtitle: "Unisex • Streetwear",
    price: "$60",
    description:
      "A soft cotton-blend hoodie with a relaxed fit — perfect for laid-back, modern style.",
    rating: 4.6,
  },
  {
    id: 59,
    image: "/Fashion/19.png",
    title: "Luxury Wristwatch",
    subtitle: "Accessories • Quartz",
    price: "$220",
    description:
      "A modern wristwatch with a stainless-steel band, minimalist dial, and reliable quartz movement.",
    rating: 4.9,
  },
  {
    id: 60,
    image: "/Fashion/20.png",
    title: "Denim Mini Skirt",
    subtitle: "Women • Casual Wear",
    price: "$65",
    description:
      "A stylish denim mini skirt that pairs perfectly with tees, blouses, or jackets for any occasion.",
    rating: 4.6,
  },
];

export default function Fashion() {
  const { cart, addToCart } = useContext(CartContext);

  // Get the quantity of an item in the cart
  const getItemQuantity = (id) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <section className="max-w-7xl mx-auto mt-4 my-3 px-4 sm:px-6 lg:px-8 py-10">
      <h1
        className="
          relative text-3xl sm:text-5xl font-extrabold mb-12 text-white text-center
          rounded-3xl px-12 py-6
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          shadow-2xl shadow-indigo-500/60
          uppercase tracking-wider
          mx-auto w-fit
          overflow-hidden
        "
      >
        <span className="relative z-10">FASHIONS</span>
        <span
          className="
            absolute inset-0 bg-gradient-to-r from-indigo-200 via-white to-indigo-400
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

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cardsData.map((card) => (
          <Link to={`/details/${card.id}`} key={card.id}>
            <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transform transition duration-300 ease-in-out hover:-translate-y-1 flex flex-col min-h-[350px]">
              {/* IMAGE */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
                />

                {/* BADGE */}
                <div className="absolute left-3 top-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-800">
                  Featured
                </div>

                {/* WISHLIST ICON */}
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

              {/* CONTENT */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
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

                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevent Link navigation
                      addToCart(card);
                      alert(`${card.title} added to cart!`);
                    }}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm transition-transform transform hover:scale-105 focus:outline-none"
                  >
                    Add to Cart {getItemQuantity(card.id) > 0 && `(${getItemQuantity(card.id)})`}
                  </button>
                  <button className="text-sm text-indigo-600 font-medium hover:underline focus:outline-none">
                    Details
                  </button>
                </div>
              </div>

              {/* FOOTER */}
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