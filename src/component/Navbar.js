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
      <div className="flex gap-x-8 mr-20 font-medium text-xl ">
        <div className="hover:underline">
          {getuserName && getMobilenumber && getEmail ? (
            <a onClick={handelLogin} href="/">
              Logout
            </a>
          ) : (
            <a>Login</a>
          )}
        </div>
        {getuserName && getMobilenumber && getEmail ? (
          <div className="hover:underline">
            <a href="/Home">Home</a>
          </div>
        ) : (
          <a href="/">Home</a>
        )}
{/* 
        <div className="hover:underline">
          <a href="#">DetailPage</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
