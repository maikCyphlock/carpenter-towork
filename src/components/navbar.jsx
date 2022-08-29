import React from "react";
import { tw } from "twind";
import { BiHomeAlt,BiRefresh,BiBell } from "react-icons/bi";

function navbar() {
  return (
    <nav className={tw('p-4')}>
      <div className={tw('flex justify-around items-center text-xl p-4 bg-white/30  rounded-lg backdrop-blur border-1 border-gray-200')}>
        <a href="#" className="text-2xl hover:text-green-400"><BiHomeAlt/></a>
        <a href="#" className="text-2xl hover:text-green-400" onClick={()=>{location.reload()}}c><BiRefresh/></a>
        <a href="#" className="text-2xl hover:text-green-400"><BiBell/></a>
      </div>
    </nav>
  );
}

export default navbar;
