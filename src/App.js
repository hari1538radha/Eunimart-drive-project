import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Detailpage from "./Pages/Detailpage";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} exact></Route>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/Home/Detail" element={<Detailpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
