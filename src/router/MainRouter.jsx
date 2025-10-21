import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "../page/Homepage";
import NotFound_404 from "../error/NotFound_404";
import Detail from "../page/Detail";
import Fashion from "../page/Fashion";
import Beauty from "../page/Beauty";
import Homesupply from "../page/Homesupply";
import Accessories from "../page/Jewellery";
import Electronic from "../page/Electronic";

export default function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/jewellery" element={<Accessories />} />
        <Route path="/homesupplie" element={<Homesupply />} />
        <Route path="*" element={<NotFound_404 />} />
      </Routes>
    </div>
  );
}
