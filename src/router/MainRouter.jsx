import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "../page/Homepage";
import NotFound_404 from "../error/NotFound_404";

export default function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
<<<<<<< HEAD
=======
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Detail />} />
>>>>>>> b273483652da619721eb40e53458a5dc247d3319
        <Route path="*" element={<NotFound_404 />} />
      </Routes>
    </div>
  );
}
