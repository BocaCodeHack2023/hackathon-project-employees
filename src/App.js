import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import EmployeeProfile from "./pages/Profile.jsx";
import Screenings from "./pages/Screenings";
import Layout from "./pages/Layout";

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
            <Layout>
              <EmployeeProfile />
            </Layout>
          }
        />
        <Route
          path="/screenings"
          element={
            <Layout>
              <Screenings />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
