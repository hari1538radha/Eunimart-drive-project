import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Detailpage from "./Pages/Detailpage";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const getuserName = localStorage.getItem("userName");
  const getMobilenumber = localStorage.getItem("Mobilenumber");
  const getEmail = localStorage.getItem("Email");

  return (
    <div>
      <div className="">
        <Navbar />
        <Routes>
          {getuserName && getMobilenumber && getEmail ? (
            <Route path="/Home" element={<HomePage />}></Route>
          ) : (
            <Route path="/" element={<LoginPage />}></Route>
          )}
          <Route path="/" element={<LoginPage />} exact></Route>

          <Route path="/Home/Detail" element={<Detailpage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
