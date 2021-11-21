import React from "react";

function Navbar() {
  return (
    <div className="w-full h-20 bg-brand">
      <div className="container h-full mx-auto">
        <div className="h-full flex items-center justify-between">
          <div className="text-white uppercase font-bold text-xl">Nebula</div>
          <ul className="flex text-white">
            <li className="px-3 font-bold">Home</li>
            <li className="px-3 font-bold">Projects</li>
            <li className="px-3 font-bold">About</li>
            <li className="px-3 font-bold">Contact</li>
            <li className="px-3 font-bold">Vision</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
