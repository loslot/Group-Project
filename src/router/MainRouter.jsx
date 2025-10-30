// import React from "react";
// import { Route, Routes } from "react-router";
// import Homepage from "../page/Homepage";
// import NotFound_404 from "../error/NotFound_404";
// import Detail from "../page/Detail";
// import Fashion from "../page/Fashion";
// import Beauty from "../page/Beauty";
// import Homesupply from "../page/Homesupply";
// import Electronic from "../page/Electronic";
// import Contact from "../page/Contact";
// import Jewellery from "../page/Jewellery";
// import SearchResults from "../page/SearchResults";

// export default function MainRouter() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/details/:id" element={<Detail />} />
//         <Route path="/electronic" element={<Electronic />} />
//         <Route path="/fashion" element={<Fashion />} />
//         <Route path="/beauty" element={<Beauty />} />
//         <Route path="/homesupplies" element={<Homesupply />} />
//         <Route path="/jewellery" element={<Jewellery />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/search" element={<SearchResults />} />
//         <Route path="*" element={<NotFound_404 />} />
//       </Routes>
//     </div>
//   );
// }






// import React from "react";
// import { Route, Routes } from "react-router";
// import Homepage from "../page/Homepage";
// import NotFound_404 from "../error/NotFound_404";
// import Detail from "../page/Detail";
// import Fashion from "../page/Fashion";
// import Beauty from "../page/Beauty";
// import Homesupply from "../page/Homesupply";
// import Electronic from "../page/Electronic";
// import Contact from "../page/Contact";
// import Jewellery from "../page/Jewellery";
// import SearchResults from "../page/SearchResults";
// import Cart from "../page/Cart";
// import Checkout from "../components/Checkout";
// import OrderConfirmation from "../components/OrderConfirmation";
// import Wishlistpage from "../page/Wishlistpage";


// export default function MainRouter() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/details/:id" element={<Detail />} />
//         <Route path="/electronic" element={<Electronic />} />
//         <Route path="/fashion" element={<Fashion />} />
//         <Route path="/beauty" element={<Beauty />} />
//         <Route path="/homesupplies" element={<Homesupply />} />
//         <Route path="/jewellery" element={<Jewellery />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/search" element={<SearchResults />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/order-confirmation" element={<OrderConfirmation />} />
//         <Route path="/wishlist" element={<Wishlistpage />} />
//         <Route path="*" element={<NotFound_404 />} />
//       </Routes>
//     </div>
//   );
// }


// src/router/MainRouter.jsx
import React from "react";
import { Routes, Route } from "react-router";

// ── Pages ───────────────────────
import Homepage from "../page/Homepage";
import Detail from "../page/Detail";
import Fashion from "../page/Fashion";
import Beauty from "../page/Beauty";
import Homesupply from "../page/Homesupply";
import Electronic from "../page/Electronic";
import Contact from "../page/Contact";
import Jewellery from "../page/Jewellery";
import SearchResults from "../page/SearchResults";
import Cart from "../page/Cart";
import Checkout from "../components/Checkout";
import OrderConfirmation from "../components/OrderConfirmation";
import OrderHistory from "../page/OrderHistory";
import Wishlistpage from "../page/Wishlistpage";
import NotFound_404 from "../error/NotFound_404";

export default function MainRouter() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Homepage />} />

      {/* Product Detail */}
      <Route path="/details/:id" element={<Detail />} />

      {/* Category Pages */}
      <Route path="/electronic" element={<Electronic />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/homesupplies" element={<Homesupply />} />
      <Route path="/jewellery" element={<Jewellery />} />

      {/* Utility Pages */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/wishlist" element={<Wishlistpage />} />

      {/* 404 */}
      <Route path="*" element={<NotFound_404 />} />
    </Routes>
  );
}