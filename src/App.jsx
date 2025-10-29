// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import MainLayout from "./layout/MainLayout";

// export default function App() {
//   return (
//     <div className="max-w-[2000px]">
//       <MainLayout />
//     </div>
//   );
// }

// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router";
import { CartProvider } from "./components/CartContext";

import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <CartProvider>
      <div className="max-w-[2000px] mx-auto">
        <MainLayout />
      </div>
    </CartProvider>
  );
}
