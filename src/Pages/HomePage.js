import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux/es";
import { UserDetails } from "../Store/Slice/UserDetails";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { UserData, DataLoading } = useSelector((state) => state.userDataInfo);

  console.log(UserData?.data?.data);
  useEffect(() => {
    dispatch(UserDetails());
    setData(UserData);
    console.log(data);
  }, []);

  const handleDetailpage = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    const id = e.target.id;
    console.log(id);
    Navigate("/Home/Detail", { state: { id: id } });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div>
        {
          <div className="flex flex-wrap items-center justify-center">
            {DataLoading === false &&
              UserData?.data?.data.map((obj) => (
                <div id={obj.id} onClick={handleDetailpage}>
                  <div
                    id={obj.id}
                    className=" mt-7 ml-14  flex flex-wrap items-center w-[500px] bg-neutral-100 h-[172px]"
                  >
                    <div id={obj.id}>
                      <img
                        id={obj.id}
                        className="w-32 ml-4 h-32"
                        src={obj.avatar}
                      ></img>
                    </div>
                    <div id={obj.id} className="flex flex-col ml-10">
                      <p id={obj.id}>UserId: {obj.id}</p>
                      <p id={obj.id}>{obj.email}</p>
                      <p id={obj.id}>
                        {obj.first_name} &nbsp;{obj.last_name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        }
      </div>
    </div>
  );
};

export default HomePage;
