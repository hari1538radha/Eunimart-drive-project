import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SingleUserDetails } from "../Store/Slice/UserDetails";
import { useDispatch } from "react-redux/es";
import { useSelector } from "react-redux/es";
import Navbar from "../component/Navbar";
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
    <div>
        {/* <Navbar/> */}
         <div>
        {
          <div className="flex flex-wrap items-center justify-center">
            {Loading === false &&
            (
             
                <div id={data.id} >
                  <div
                    
                    className=" mt-7 ml-14  flex flex-wrap items-center w-[900px] bg-neutral-100 h-[500px]"
                  >
                    <div >
                      <img className="w-60 ml-4 h-60" src={data.avatar}></img>
                    </div>
                    <div  className="flex flex-col ml-10">
                      <p >UserId: {data.id}</p>
                      <p >EmailID: {data.email}</p>
                      <p>
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
