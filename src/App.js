import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import EmployeeProfile from "./pages/profile.jsx";
import EmployeeProfile from "./pages/Screenings.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/profile" element={<EmployeeProfile />} />
        <Route path="/screenings" element={<EmployeeProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
