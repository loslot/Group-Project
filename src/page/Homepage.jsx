import React from "react";
import Slide from "../components/Slide";
import New from "../components/New";

export default function Homepage() {
 
  return <div  className='text-center'>
    <div className="px-5 py-3">
      <Slide/>
    </div>

    <div>
      <New/>
    </div>

  </div>

}
