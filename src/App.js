// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


import { useState } from 'react';
import TravelInfo from './components/TravelInfo';
import MarketCarousel from './components/MarketCarousel';

import Home from './components/Home';
import TravelBoard from './components/TravelBoard';
import TravelBdDetail from './components/TravelBdDetail';
import TipBoard from './components/TipBoard';
import TipBdDetail from './components/TipBdDetail';
import LoginPage from './components/LoginPage';
import Register from './components/Register';

function App() {
  const [isAuth, setIsAuth] = useState(false); // false면 로그아웃 상태, true면 로그인 상태.
  return (
    <div className="App">
      <Header isAuth={isAuth}/>

      
     <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/travel-board' element={<TravelBoard />} />
      <Route path="/travel-board/:postId" element={<TravelBdDetail />} />
      <Route path='/tip-board' element={<TipBoard />} />
      <Route path="/tip-board/:postId" element={<TipBdDetail />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      
     </Routes>
    





    </div>
  );
}

export default App;
