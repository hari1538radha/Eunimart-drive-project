import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SingleUserDetails } from "../Store/Slice/UserDetails";
import { useDispatch } from "react-redux/es";
import { useSelector } from "react-redux/es";

const Detailpage = () => {
  const Location = useLocation();
  const dispatch = useDispatch();
  console.log(Location?.state?.id);
  const id = Location?.state?.id;
  const { singleUserData, Loading } = useSelector(
    (state) => state.userDataInfo
  );
  console.log(singleUserData?.data?.data);

  useEffect(() => {
    dispatch(SingleUserDetails(id));
  }, []);

  const data = singleUserData?.data?.data;

  return (
    <div className="bg-gradient-to-br from-[#81FFEF] to-[#F067B4] h-screen">
      {/* <Navbar/> */}
      <div>
        {
          <div className="flex flex-wrap items-center justify-center">
            {Loading === false && (
              <div id={data.id}>
                <div className=" mt-7 ml-14  flex flex-wrap items-center w-3/5 items-center justify-center bg-white border-2 border-slate-500 shadow-lg shadow-slate-600 h-[500px]">
                  <div>
                    <img className=" hover:scale-105 duration-300 w-60 ml-4 h-60" src={data.avatar}></img>
                  </div>
                  <div className="flex flex-col ">
                    <p className="font-medium text-xl">UserId: {data.id}</p>
                    <p className="font-medium text-xl">EmailID: {data.email}</p>
                    <p className="font-medium text-xl">
                      Name: {data.first_name} &nbsp;{data.last_name}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default Detailpage;
