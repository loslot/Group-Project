import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "../page/Homepage";
import About from "../page/About";
import Detail from "../page/Detail";
import NotFound_404 from "../error/NotFound_404";

export default function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Detail />} />
        <Route path="*" element={<NotFound_404 />} />
      </Routes>
    </div>
  );
}
