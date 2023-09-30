import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import UserInfo from './components/userInfo';
import EmployeeProfile from './pages/Profile.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/profile' element={<EmployeeProfile/>} />
        <Route path='*' element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
