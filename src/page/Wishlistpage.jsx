// import React from "react";
// import { useWishlist } from "../Context/WishlistContext";
// import { useNavigate, Link } from "react-router";

// export default function Wishlistpage() {
//   const { wishlist, toggleWishlist } = useWishlist(); // ✅ fixed name
//   const navigate = useNavigate();

//   if (wishlist.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Wishlist is Empty</h2>
//         <p className="text-gray-500 mb-6">Add items you Favourite!</p>
//         <button
//           onClick={() => navigate("/")}
//           className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">My Wishlist ({wishlist.length})</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {wishlist.map((item) => (
//           <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
//             <Link to={`/details/${item.id}`}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover"
//                 onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
//               />
//             </Link>
//             <div className="p-4">
//               <h3 className="font-semibold text-lg line-clamp-1">{item.title}</h3>
//               <p className="text-sm text-gray-500">{item.subtitle}</p>
//               <p className="text-xl font-bold text-indigo-600">{item.price}</p>
//               <div className="mt-3 flex justify-between">
//                 {/* ✅ uses correct function name */}
//                 <button
//                   onClick={() => toggleWishlist(item)}
//                   className="text-red-600 text-sm hover:underline"
//                 >
//                   Remove
//                 </button>
//                 <Link
//                   to={`/details/${item.id}`}
//                   className="text-indigo-600 text-sm hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






// src/page/Wishlistpage.jsx
import React from "react";
import { useWishlist } from "../Context/WishlistContext";
import { Link, useNavigate } from "react-router";
import { motion } from 'framer-motion';

function Wishlistpage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Your Wishlist is Empty
        </h2>
        <p className="text-gray-500 mb-6">Add items you love!</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
     

      <h1 className="text-3xl font-bold mb-6">
        My Wishlist ({wishlist.length})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <Link to={`/details/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://via.placeholder.com/300/CCCCCC/FFFFFF?text=No+Image")
                }
              />
            </Link>
            

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
                <p className="text-xl font-bold text-indigo-600">
                  {item.price}
                </p>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <button
                  onClick={() => toggleWishlist(item)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
                <Link
                  to={`/details/${item.id}`}
                  className="text-indigo-600 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
          
        ))}
      </div>

       {/* Back Button */}
       <div className="mb-6 text-center">
         <button
           onClick={() => navigate(-1)}
           className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg mt-5"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>
    </div>
  );
}

// THIS LINE IS REQUIRED
export default Wishlistpage;