import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/"  element={<LoginPage />} exact></Route>
        <Route path="/Home" element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
