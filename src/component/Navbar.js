import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-12 rounded-b-2xl bg-neutral-200">
      <p className="text-xl font-bold pl-11">Eunimart-project</p>
      <div className="flex gap-x-8 mr-20 font-medium text-xl ">
        <div className="hover:underline">
          <a>Login</a>
        </div>
        <div className="hover:underline">
          <a>Home</a>
        </div>
        <div className="hover:underline">
          <a>DetailPage</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
