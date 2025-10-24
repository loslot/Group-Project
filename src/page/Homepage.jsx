import React from "react";
import Slide from "../components/Slide";
import New from "../components/New";

export default function Homepage() {
  return (
    <div>
      <div className="m-3 mt-9 shadow-lg shadow-gray-300 hover:shadow-xl transition-shadow duration-300">
        <Slide />
      </div>
      <New />
    </div>
  );
}
