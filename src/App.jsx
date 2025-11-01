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
import { UserProvider } from "./Context/UserContext";

import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <div className="max-w-[2000px] mx-auto">
          <MainLayout />
        </div>
      </CartProvider>
    </UserProvider>
  );
}
