import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import EmployeeProfile from "./pages/profile.jsx";
import Screenings from "./pages/Screening/index.jsx";
import DashboardLayout from "./pages/DashboardLayout";
import Results from "./pages/Results/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route
          path="/profile"
          element={
            <DashboardLayout>
              <EmployeeProfile />
            </DashboardLayout>
          }
        />
        <Route
          path="/screenings"
          element={
            <DashboardLayout>
              <Screenings />
            </DashboardLayout>
          }
        />
        <Route
          path="/results"
          element={
            <DashboardLayout>
              <Results />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
