// import React from "react";
// import { Link } from "react-router";

// // Responsive 5/4/2 Card Grid
// // - Desktop (lg): 5 columns
// // - Tablet (md): 4 columns
// // - Mobile (sm): 2 columns
// // - Smooth hover transitions using Tailwind utilities

import React, { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../components/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import toast from "react-hot-toast";

// const cardsData = [
//   {
//     id: 1,
//     image: "/Electronic/1.png",
//     title: "SmartX Pro Phone",
//     subtitle: "Smartphone • 128GB",
//     price: "$699",
//     description:
//       "A sleek smartphone with a powerful processor, edge-to-edge display, and all-day battery life.",
//     rating: 4.7,
//   },
//   {
//     id: 2,
//     image: "/Electronic/2.png",
//     title: "AeroBuds Wireless Earphones",
//     subtitle: "Audio • Bluetooth 5.3",
//     price: "$129",
//     description:
//       "Noise-cancelling wireless earbuds with crystal-clear sound and a comfortable, secure fit.",
//     rating: 4.5,
//   },
//   {
//     id: 3,
//     image: "/Electronic/3.png",
//     title: "VisionHD 4K TV",
//     subtitle: "Display • 55-inch",
//     price: "$799",
//     description:
//       "A stunning 4K UHD smart TV with vibrant colors, HDR10 support, and built-in streaming apps.",
//     rating: 4.8,
//   },
//   {
//     id: 4,
//     image: "/Electronic/4.png",
//     title: "PowerBeat Smartwatch",
//     subtitle: 'Wearable • 1.8" AMOLED',
//     price: "$199",
//     description:
//       "A stylish smartwatch with heart-rate tracking, GPS, fitness modes, and message notifications.",
//     rating: 4.6,
//   },
//   {
//     id: 5,
//     image: "/Electronic/5.png",
//     title: "SoundMax Portable Speaker",
//     subtitle: "Audio • Waterproof",
//     price: "$89",
//     description:
//       "A compact Bluetooth speaker with deep bass, clear treble, and 12-hour battery life.",
//     rating: 4.4,
//   },
//   {
//     id: 6,
//     image: "/Electronic/6.png",
//     title: "UltraBook X15 Laptop",
//     subtitle: "Laptop • 15.6-inch • 512GB SSD",
//     price: "$999",
//     description:
//       "A powerful ultrabook designed for productivity with fast performance and lightweight design.",
//     rating: 4.7,
//   },
//   {
//     id: 7,
//     image: "/Electronic/7.png",
//     title: "CyberCam Pro DSLR",
//     subtitle: "Camera • 24MP • Wi-Fi",
//     price: "$1,250",
//     description:
//       "Capture professional-grade photos and videos with advanced autofocus and 4K recording.",
//     rating: 4.9,
//   },
//   {
//     id: 8,
//     image: "/Electronic/8.png",
//     title: "SmartHome Mini Hub",
//     subtitle: "Home Tech • Voice Control",
//     price: "$79",
//     description:
//       "Control lights, music, and more with your voice — the perfect addition to any smart home.",
//     rating: 4.3,
//   },
//   {
//     id: 9,
//     image: "/Electronic/9.png",
//     title: "AirFlow Pro Fan",
//     subtitle: "Home Appliance • 3-Speed",
//     price: "$55",
//     description:
//       "A quiet and powerful fan with adjustable speeds and oscillation for full-room cooling.",
//     rating: 4.2,
//   },
//   {
//     id: 10,
//     image: "/Electronic/10.png",
//     title: "Quantum Gaming Mouse",
//     subtitle: "Accessory • RGB • Wired",
//     price: "$49",
//     description:
//       "High-precision gaming mouse with customizable buttons and RGB lighting for pro gamers.",
//     rating: 4.5,
//   },
//   {
//     id: 11,
//     image: "/Electronic/11.png",
//     title: "Neon Mechanical Keyboard",
//     subtitle: "Accessory • RGB Backlight",
//     price: "$89",
//     description:
//       "A durable mechanical keyboard with smooth keys, anti-ghosting, and vibrant lighting effects.",
//     rating: 4.6,
//   },
//   {
//     id: 12,
//     image: "/Electronic/12.png",
//     title: "XPower 10,000mAh Power Bank",
//     subtitle: "Charging • Fast Charge",
//     price: "$39",
//     description:
//       "A compact power bank with fast-charging support for phones, tablets, and other devices.",
//     rating: 4.4,
//   },
//   {
//     id: 13,
//     image: "/Electronic/13.png",
//     title: "ClearView Security Camera",
//     subtitle: "Smart Home • 1080p HD",
//     price: "$120",
//     description:
//       "Monitor your home anytime with motion detection, night vision, and mobile alerts.",
//     rating: 4.5,
//   },
//   {
//     id: 14,
//     image: "/Electronic/14.png",
//     title: "Nova Tablet 10.1",
//     subtitle: "Tablet • 64GB • Wi-Fi",
//     price: "$299",
//     description:
//       "A lightweight tablet for entertainment and productivity with a vivid HD display and long battery.",
//     rating: 4.3,
//   },
//   {
//     id: 15,
//     image: "/Electronic/15.png",
//     title: "Pulse Wireless Headset",
//     subtitle: "Audio • Noise Canceling",
//     price: "$159",
//     description:
//       "Over-ear headphones delivering immersive sound with active noise cancellation technology.",
//     rating: 4.6,
//   },
//   {
//     id: 16,
//     image: "/Electronic/16.png",
//     title: "SmartChef Air Fryer",
//     subtitle: "Kitchen • 4L Capacity",
//     price: "$145",
//     description:
//       "Cook crispy and healthy meals faster with digital temperature control and preset menus.",
//     rating: 4.4,
//   },
//   {
//     id: 17,
//     image: "/Electronic/17.png",
//     title: "HyperDrive External SSD",
//     subtitle: "Storage • 1TB • USB-C",
//     price: "$175",
//     description:
//       "A lightning-fast external SSD for secure file storage and instant data transfers.",
//     rating: 4.7,
//   },
//   {
//     id: 18,
//     image: "/Electronic/18.png",
//     title: "RoboClean Vacuum",
//     subtitle: "Home Tech • Smart Mapping",
//     price: "$299",
//     description:
//       "An intelligent robot vacuum that cleans efficiently with smart sensors and app control.",
//     rating: 4.5,
//   },
//   {
//     id: 19,
//     image: "/Electronic/19.png",
//     title: "BlueWave Bluetooth Speaker Bar",
//     subtitle: "Audio • TV Soundbar",
//     price: "$210",
//     description:
//       "Enhance your home theater experience with powerful stereo sound and wireless connectivity.",
//     rating: 4.6,
//   },
//   {
//     id: 20,
//     image: "/Electronic/20.png",
//     title: "Optix LED Monitor",
//     subtitle: "Display • 27-inch • 144Hz",
//     price: "$349",
//     description:
//       "A high-performance gaming monitor with ultra-smooth refresh rate and vibrant color accuracy.",
//     rating: 4.8,
//   },
// ];

// export default function Electronic() {
//   return (
//     <section className="max-w-7xl mx-auto my-3 px-4 sm:px-6 lg:px-8 py-10">
//       <h1 className="relative text-center mb-10 px-4">
//         <span
//           className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
//           style={{
//             textShadow: "2px 2px 4px rgba(0,0,0,0.15)",
//           }}
//         >
//           ELECTRONICS
//         </span>
//       </h1>

//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
//         {cardsData.map((card) => (
//           <Link to={`/details/${card.id}`} key={card.id}>
//             <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 flex flex-col h-full">
//               <div className="relative h-48 sm:h-56 w-full overflow-hidden">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
//                 />
//                 <div className="absolute left-3 top-3 bg-white backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-800">
//                   Featured
//                 </div>
//                 <button
//                   aria-label="save"
//                   className="absolute right-3 top-3 p-2 rounded-full bg-white/90 shadow-md focus:outline-none"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 text-rose-500"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657 3.172 10.828a4 4 0 010-5.656z" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="p-4 sm:p-5 flex flex-col flex-1">
//                 <div className="flex items-start justify-between">
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">
//                       {card.title}
//                     </h3>
//                     <p className="mt-1 text-sm text-slate-500 line-clamp-1">
//                       {card.subtitle}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm text-slate-600">From</p>
//                     <p className="text-lg font-bold text-slate-900">
//                       {card.price}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-4 flex items-center justify-between">
//                   <button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm transition-transform transform hover:scale-105 focus:outline-none">
//                     Add to Cart
//                   </button>
//                   <button className="text-sm text-indigo-600 font-medium hover:underline focus:outline-none">
//                     Details
//                   </button>
//                 </div>
//               </div>

//               <div className="px-4 pb-4 sm:px-5 sm:pb-5">
//                 <div className="flex items-center justify-between text-xs text-slate-500">
//                   <span>⭐ {card.rating}</span>
//                   <span>Free returns</span>
//                 </div>
//               </div>
//             </article>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

const cardsData = [
  {
    id: 1,
    image: "/Electronic/1.png",
    title: "SmartX Pro Phone",
    subtitle: "Smartphone • 128GB",
    price: "$0.01",
    description:
      "A sleek smartphone with a powerful processor, edge-to-edge display, and all-day battery life.",
    rating: 4.7,
  },
  {
    id: 2,
    image: "/Electronic/2.png",
    title: "AeroBuds Wireless Earphones",
    subtitle: "Audio • Bluetooth 5.3",
    price: "$129",
    description:
      "Noise-cancelling wireless earbuds with crystal-clear sound and a comfortable, secure fit.",
    rating: 4.5,
  },
  {
    id: 3,
    image: "/Electronic/3.png",
    title: "VisionHD 4K TV",
    subtitle: "Display • 55-inch",
    price: "$799",
    description:
      "A stunning 4K UHD smart TV with vibrant colors, HDR10 support, and built-in streaming apps.",
    rating: 4.8,
  },
  {
    id: 4,
    image: "/Electronic/4.png",
    title: "PowerBeat Smartwatch",
    subtitle: 'Wearable • 1.8" AMOLED',
    price: "$199",
    description:
      "A stylish smartwatch with heart-rate tracking, GPS, fitness modes, and message notifications.",
    rating: 4.6,
  },
  {
    id: 5,
    image: "/Electronic/5.png",
    title: "SoundMax Portable Speaker",
    subtitle: "Audio • Waterproof",
    price: "$89",
    description:
      "A compact Bluetooth speaker with deep bass, clear treble, and 12-hour battery life.",
    rating: 4.4,
  },
  {
    id: 6,
    image: "/Electronic/6.png",
    title: "UltraBook X15 Laptop",
    subtitle: "Laptop • 15.6-inch • 512GB SSD",
    price: "$999",
    description:
      "A powerful ultrabook designed for productivity with fast performance and lightweight design.",
    rating: 4.7,
  },
  {
    id: 7,
    image: "/Electronic/7.png",
    title: "CyberCam Pro DSLR",
    subtitle: "Camera • 24MP • Wi-Fi",
    price: "$1,250",
    description:
      "Capture professional-grade photos and videos with advanced autofocus and 4K recording.",
    rating: 4.9,
  },
  {
    id: 8,
    image: "/Electronic/8.png",
    title: "SmartHome Mini Hub",
    subtitle: "Home Tech • Voice Control",
    price: "$79",
    description:
      "Control lights, music, and more with your voice — the perfect addition to any smart home.",
    rating: 4.3,
  },
  {
    id: 9,
    image: "/Electronic/9.png",
    title: "AirFlow Pro Fan",
    subtitle: "Home Appliance • 3-Speed",
    price: "$55",
    description:
      "A quiet and powerful fan with adjustable speeds and oscillation for full-room cooling.",
    rating: 4.2,
  },
  {
    id: 10,
    image: "/Electronic/10.png",
    title: "Quantum Gaming Mouse",
    subtitle: "Accessory • RGB • Wired",
    price: "$49",
    description:
      "High-precision gaming mouse with customizable buttons and RGB lighting for pro gamers.",
    rating: 4.5,
  },
  {
    id: 11,
    image: "/Electronic/11.png",
    title: "Neon Mechanical Keyboard",
    subtitle: "Accessory • RGB Backlight",
    price: "$89",
    description:
      "A durable mechanical keyboard with smooth keys, anti-ghosting, and vibrant lighting effects.",
    rating: 4.6,
  },
  {
    id: 12,
    image: "/Electronic/12.png",
    title: "XPower 10,000mAh Power Bank",
    subtitle: "Charging • Fast Charge",
    price: "$39",
    description:
      "A compact power bank with fast-charging support for phones, tablets, and other devices.",
    rating: 4.4,
  },
  {
    id: 13,
    image: "/Electronic/13.png",
    title: "ClearView Security Camera",
    subtitle: "Smart Home • 1080p HD",
    price: "$120",
    description:
      "Monitor your home anytime with motion detection, night vision, and mobile alerts.",
    rating: 4.5,
  },
  {
    id: 14,
    image: "/Electronic/14.png",
    title: "Nova Tablet 10.1",
    subtitle: "Tablet • 64GB • Wi-Fi",
    price: "$299",
    description:
      "A lightweight tablet for entertainment and productivity with a vivid HD display and long battery.",
    rating: 4.3,
  },
  {
    id: 15,
    image: "/Electronic/15.png",
    title: "Pulse Wireless Headset",
    subtitle: "Audio • Noise Canceling",
    price: "$159",
    description:
      "Over-ear headphones delivering immersive sound with active noise cancellation technology.",
    rating: 4.6,
  },
  {
    id: 16,
    image: "/Electronic/16.png",
    title: "SmartChef Air Fryer",
    subtitle: "Kitchen • 4L Capacity",
    price: "$145",
    description:
      "Cook crispy and healthy meals faster with digital temperature control and preset menus.",
    rating: 4.4,
  },
  {
    id: 17,
    image: "/Electronic/17.png",
    title: "HyperDrive External SSD",
    subtitle: "Storage • 1TB • USB-C",
    price: "$175",
    description:
      "A lightning-fast external SSD for secure file storage and instant data transfers.",
    rating: 4.7,
  },
  {
    id: 18,
    image: "/Electronic/18.png",
    title: "RoboClean Vacuum",
    subtitle: "Home Tech • Smart Mapping",
    price: "$299",
    description:
      "An intelligent robot vacuum that cleans efficiently with smart sensors and app control.",
    rating: 4.5,
  },
  {
    id: 19,
    image: "/Electronic/19.png",
    title: "BlueWave Bluetooth Speaker Bar",
    subtitle: "Audio • TV Soundbar",
    price: "$210",
    description:
      "Enhance your home theater experience with powerful stereo sound and wireless connectivity.",
    rating: 4.6,
  },
  {
    id: 20,
    image: "/Electronic/20.png",
    title: "Optix LED Monitor",
    subtitle: "Display • 27-inch • 144Hz",
    price: "$349",
    description:
      "A high-performance gaming monitor with ultra-smooth refresh rate and vibrant color accuracy.",
    rating: 4.8,
  },
];

export default function Electronic() {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <section className="max-w-7xl mx-auto mt-4 my-3 px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="relative text-3xl sm:text-5xl font-extrabold mb-12 text-white text-center rounded-3xl px-12 py-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-2xl shadow-blue-500/60 uppercase tracking-wider mx-auto w-fit overflow-hidden">
        <span className="relative z-10">Electronic</span>
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

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cardsData.map((card, index) => {
          const isInWishlist = wishlist.some((i) => i.id === card.id);

          return (
            <Link to={`/details/${card.id}`} key={card.id} className="block">
              <article
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) =>
                      (e.currentTarget.src = "https://via.placeholder.com/200")
                    }
                  />

                  {/* Featured Badge */}
                  <div className="absolute left-3 top-3 bg-white backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-800">
                    Featured
                  </div>

                  {/* Wishlist Heart */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleWishlist(card);
                      toast.success(
                        isInWishlist
                          ? `${card.title} removed from wishlist`
                          : `${card.title} added to wishlist`,
                        { duration: 1000 }
                      );
                    }}
                    className="absolute right-3 top-3 p-2 rounded-full bg-white/90 shadow-md hover:scale-110 transition z-10"
                    aria-label="Toggle wishlist"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-all ${
                        isInWishlist
                          ? "fill-red-600 text-red-600"
                          : "text-gray-500 hover:text-red-500"
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

                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
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
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(card);
                        toast.success(`${card.title} added to cart!`, {
                          duration: 1200,
                        });
                      }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition"
                    >
                      Add Cart
                    </button>
                    <span className="text-sm text-indigo-600 font-medium hover:underline">
                      Details
                    </span>
                  </div>
                </div>

                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Rating: {card.rating}⭐</span>
                    <span>Free cancellation</span>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}