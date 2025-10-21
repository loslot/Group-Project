import React from "react";
import Navbar from "../components/Navbar";
import MainRouter from "../router/MainRouter";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <MainRouter/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
