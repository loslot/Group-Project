import React from "react";
import Navbar from "../components/Navbar";
import MainRouter from "../router/MainRouter";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <Navbar />
      </div>
      <div>
        <MainRouter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
