// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


import { useState } from 'react';
import TravelInfo from './components/TravelInfo';
import MarketCarousel from './components/MarketCarousel';

import Home from './components/Home';
import TravelBoard from './components/TravelBoard';

function App() {
  const [isAuth, setIsAuth] = useState(false); // false면 로그아웃 상태, true면 로그인 상태.
  return (
    <div className="App">
      <Header isAuth={isAuth}/>

      
     <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/travel-board' element={<TravelBoard />} />
     </Routes>
    




     <MarketCarousel />

    </div>
  );
}

export default App;
