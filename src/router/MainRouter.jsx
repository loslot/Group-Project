import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "../page/Homepage";
import NotFound_404 from "../error/NotFound_404";
import Detail from "../page/Detail";

export default function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
<<<<<<< HEAD
=======

>>>>>>> f3a67653efece90a5c0af6eae2da77b0c8c2db56
        <Route path="/details" element={<Detail />} />
        <Route path="*" element={<NotFound_404 />} />
      </Routes>
    </div>
  );
}
