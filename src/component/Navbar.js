import React from "react";

const Navbar = () => {
  const handelLogin = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="flex justify-between items-center h-12 rounded-b-2xl bg-neutral-200">
      <p className="text-xl font-bold pl-11">Eunimart-project</p>
      <div className="flex gap-x-8 mr-20 font-medium text-xl ">
        <div className="hover:underline">
          <a onClick={handelLogin} href="/">
            Login
          </a>
        </div>
        <div className="hover:underline">
          <a href="/Home">Home</a>
        </div>
        <div className="hover:underline">
          <a href="#">DetailPage</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
