import React from "react";

const Login = () => {
  const HandelLogin = (e) => {
    e.preventDefault();
    const element = e.target.elements;
    const userName = element[0].value;
    const MobileNumber = element[1].value;
    const Email = element[2].value;
    console.log(userName, MobileNumber, Email);
  };
  return (
    <div className="w-1/3  bg-gradient-to-r from-[#FC5C7D] to-[#6A82FB] bg-neutral-500 h-2/5 flex flex-col gap-y-24">
      <form onSubmit={HandelLogin}>
        <div className="  flex flex-col  border-gray-400 border-2 items-center border-1 absolute  rounded-xl gap-y-4 w-[410px] left-1/3 top-[120px]">
          <h1 className="text-3x mt-4 font-medium text-4xl font-sans">
            {" "}
           User Login
          </h1>
          <input
            className="w-[330px] caret-red-600 border-2 border-grey-300 pl-[20px] bg-white h-14 rounded-[100px] mt-[45px]"
            type="text"
            placeholder="Name"
            required
          ></input>
          <input
            className="bg-white caret-red-600 h-14 w-[330px] rounded-[100px] pl-[20px] border-2 border-grey-300 mt-[20px]"
            type="Number"
            placeholder="Mobile Number"
            required
          ></input>
          <input
            className="bg-white caret-red-600 h-14 w-[330px] rounded-[100px] pl-[20px] border-2 border-grey-300 mt-[20px]"
            type="text"
            placeholder="Email ID"
            required
          ></input>
          <button className="bg-[#6496EB] text-xl text-white w-[330px] h-14 mt-[40px] rounded-full ">
            Log In
          </button>
          <span className="text-[#F75B46] mt-[20px] mb-4 ">
            Invalid Credentials
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
