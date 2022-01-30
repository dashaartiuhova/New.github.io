import logo from './logo.svg';
import './App.css';
import Application from './Components/Application';
import Header from './Components/HeaderWhite';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import MainPage from './Components/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/application' element={<Application />}/>
            <Route path='/' element={<MainPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
