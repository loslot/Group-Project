// // // src/Context/WishlistContext.jsx
// import React, { createContext, useContext, useState, useEffect } from "react";

// const WishlistContext = createContext();

// export const useWishlist = () => useContext(WishlistContext);

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);

//   // Load from localStorage on mount
//   useEffect(() => {
//     const saved = localStorage.getItem("wishlist");
//     if (saved) setWishlist(JSON.parse(saved));
//   }, []);

//   // Save to localStorage whenever wishlist changes
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   const toggle = (item) => {
//     setWishlist((prev) => {
//       const exists = prev.some((i) => i.id === item.id);
//       if (exists) {
//         return prev.filter((i) => i.id !== item.id);
//       }
//       return [...prev, item];
//     });
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, toggle, wishlistCount: wishlist.length }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };



// src/context/WishlistContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // Load from localStorage ONCE at initialization
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse wishlist from localStorage", error);
      return [];
    }
  });

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      return exists
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item];
    });
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);


