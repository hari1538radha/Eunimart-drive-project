import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux/es";
import { UserDetails } from "../Store/Slice/UserDetails";
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserDetails());
  }, []);
  const { UserData, DataLoading } = useSelector((state) => state.userDataInfo);
  console.log(UserData);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default HomePage;
