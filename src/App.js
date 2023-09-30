import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path='' element={<Login />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
