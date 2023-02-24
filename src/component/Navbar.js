import React from "react";

const Navbar = () => {
  const getuserName = localStorage.getItem("userName");
  const getMobilenumber = localStorage.getItem("Mobilenumber");
  const getEmail = localStorage.getItem("Email");
  const handelLogin = () => {
    localStorage.clear();
    window.location.reload();
  };
  console.log(window.location);
  return (
    <div className="flex justify-between items-center h-12 rounded-b-2xl bg-neutral-200">
      <p className="text-xl font-bold pl-11">Eunimart-project</p>
      <div className="flex gap-x-8 mr-20  text-xl ">
        <div className="">
          {getuserName && getMobilenumber && getEmail ? (
            <a
              className="bg-red-400 rounded-full p-1 px-2 no-underline"
              onClick={handelLogin}
              href="/"
            >
              Logout
            </a>
          ) : (
            <a className="bg-blue-300 text-white  rounded-full p-1 px-2 no-underline">
              Login
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
