import React from "react";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";

// Responsive 5/4/2 Card Grid
// - Desktop (lg): 5 columns
// - Tablet (md): 4 columns
// - Mobile (sm): 2 columns
// - Smooth hover transitions using Tailwind utilities
const cardsData = [
  {
    id: 61,
    image: "/Homesupply/1.png",
    title: "ComfortPlus Pillow Set",
    subtitle: "Bedroom • 2 Pieces",
    price: "$45",
    description:
      "Soft microfiber pillows offering plush comfort and lasting support for a restful sleep.",
    rating: 4.6,
  },
  {
    id: 62,
    image: "/Homesupply/2.png",
    title: "EcoFresh Bedsheet Set",
    subtitle: "Bedroom • 4 Pieces",
    price: "$70",
    description:
      "Breathable cotton bedsheets designed for durability, comfort, and a luxurious feel.",
    rating: 4.7,
  },
  {
    id: 63,
    image: "/Homesupply/3.png",
    title: "PureAroma Scented Candle",
    subtitle: "Living Room • 250g",
    price: "$25",
    description:
      "A soothing scented candle with lavender and vanilla notes to create a relaxing atmosphere.",
    rating: 4.5,
  },
  {
    id: 64,
    image: "/Homesupply/4.png",
    title: "UltraSoft Bath Towel Set",
    subtitle: "Bathroom • 6 Pieces",
    price: "$55",
    description:
      "Highly absorbent towels made from 100% cotton, perfect for spa-like comfort at Homesupply.",
    rating: 4.6,
  },
  {
    id: 65,
    image: "/Homesupply/5.png",
    title: "Modern Ceramic Vase",
    subtitle: "Decor • Minimalist Design",
    price: "$35",
    description:
      "A sleek ceramic vase that adds a touch of modern elegance to your living space.",
    rating: 4.4,
  },
  {
    id: 66,
    image: "/Homesupply/6.png",
    title: "Smart LED Table Lamp",
    subtitle: "Lighting • Adjustable",
    price: "$60",
    description:
      "A dimmable LED lamp with touch control and warm-to-cool light modes for any mood.",
    rating: 4.7,
  },
  {
    id: 67,
    image: "/Homesupply/7.png",
    title: "AquaPure Water Filter Pitcher",
    subtitle: "Kitchen • 2L Capacity",
    price: "$48",
    description:
      "Removes impurities and provides clean, great-tasting water for the entire family.",
    rating: 4.5,
  },
  {
    id: 68,
    image: "/Homesupply/8.png",
    title: "Essential Oil Diffuser",
    subtitle: "Living Room • 300ml",
    price: "$40",
    description:
      "Ultrasonic aroma diffuser that fills your Homesupply with relaxing natural scents and mist.",
    rating: 4.6,
  },
  {
    id: 69,
    image: "/Homesupply/9.png",
    title: "ChefMaster Knife Set",
    subtitle: "Kitchen • 6 Pieces",
    price: "$85",
    description:
      "Precision stainless steel knives for perfect slicing, chopping, and cutting every time.",
    rating: 4.8,
  },
  {
    id: 70,
    image: "/Homesupply/10.png",
    title: "AirBreeze Floor Fan",
    subtitle: "Homesupply Appliance • 3-Speed",
    price: "$75",
    description:
      "A quiet, powerful fan that keeps your room cool and comfortable all day long.",
    rating: 4.6,
  },
  {
    id: 71,
    image: "/Homesupply/11.png",
    title: "WoodCraft Coffee Table",
    subtitle: "Living Room • Solid Wood",
    price: "$190",
    description:
      "Elegant wooden coffee table with smooth finish and sturdy legs, perfect for modern Homesupplys.",
    rating: 4.7,
  },
  {
    id: 72,
    image: "/Homesupply/12.png",
    title: "FreshAir Room Purifier",
    subtitle: "Appliance • HEPA Filter",
    price: "$120",
    description:
      "Removes dust, pollen, and odors to keep your indoor air clean and breathable.",
    rating: 4.8,
  },
  {
    id: 73,
    image: "/Homesupply/13.png",
    title: "CozyHomesupply Blanket",
    subtitle: "Bedroom • 200x220cm",
    price: "$65",
    description:
      "A soft fleece blanket that keeps you warm and cozy during chilly nights.",
    rating: 4.6,
  },
  {
    id: 74,
    image: "/Homesupply/14.png",
    title: "Stainless Cookware Set",
    subtitle: "Kitchen • 8 Pieces",
    price: "$150",
    description:
      "Durable stainless steel cookware with even heat distribution for perfect cooking results.",
    rating: 4.7,
  },
  {
    id: 75,
    image: "/Homesupply/15.png",
    title: "AromaFresh Hand Soap",
    subtitle: "Bathroom • 500ml",
    price: "$18",
    description:
      "Gentle foaming hand soap infused with essential oils for soft and clean hands.",
    rating: 4.5,
  },
  {
    id: 76,
    image: "/Homesupply/16.png",
    title: "SmartSense Trash Can",
    subtitle: "Homesupply • Motion Sensor",
    price: "$90",
    description:
      "Touch-free stainless trash can with motion sensor for a cleaner, smarter kitchen.",
    rating: 4.6,
  },
  {
    id: 77,
    image: "/Homesupply/17.png",
    title: "Velvet Curtain Set",
    subtitle: "Living Room • 2 Panels",
    price: "$110",
    description:
      "Elegant velvet curtains that block sunlight and add a touch of luxury to your decor.",
    rating: 4.7,
  },
  {
    id: 78,
    image: "/Homesupply/18.png",
    title: "KitchenPro Blender",
    subtitle: "Appliance • 1000W",
    price: "$130",
    description:
      "A high-speed blender ideal for smoothies, soups, and sauces with easy-clean blades.",
    rating: 4.8,
  },
  {
    id: 79,
    image: "/Homesupply/19.png",
    title: "PureSoft Carpet Rug",
    subtitle: "Living Room • 160x230cm",
    price: "$140",
    description:
      "A plush, non-slip rug that adds warmth and comfort to your living area.",
    rating: 4.6,
  },
  {
    id: 80,
    image: "/Homesupply/20.png",
    title: "EcoDry Laundry Basket",
    subtitle: "Homesupply • Bamboo Frame",
    price: "$50",
    description:
      "A durable and eco-friendly laundry basket made from natural bamboo and cotton fabric.",
    rating: 4.5,
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
        <span className="relative z-10">HOME SUPPLIES</span>
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
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/200")
                  }
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
                    Add to Cart{" "}
                    {getItemQuantity(card.id) > 0 &&
                      `(${getItemQuantity(card.id)})`}
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
