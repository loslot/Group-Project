// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router";
 
// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <StrictMode>
//        <App />
//     </StrictMode>
//   </BrowserRouter>
// );




import { Toaster } from "react-hot-toast";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { WishlistProvider } from "./Context/WishlistContext.jsx"; // Import the WishlistProvider component from "./Context/WishlistContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <App />
        <Toaster
          position="top-center"
          toastOptions={{
            style: { fontSize: "14px", padding: "12px 16px" },
            success: { icon: "❤️" },
          }}
        />
      </WishlistProvider>
    </BrowserRouter>
  </StrictMode>
);