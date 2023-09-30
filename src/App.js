import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AppointmentPicker from './pages/AppointmentPicker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='appointments' element={<AppointmentPicker />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
        <Route path='*' element={<Login />} />
        {/* <Route path='' element={<Login />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
