// import logo from './logo.svg';
import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TravelAds from './components/TravelAds';
import Visual from './components/Visual';
import { useState } from 'react';
import TravelInfo from './components/TravelInfo';

function App() {
  const [isAuth, setIsAuth] = useState(false); // false면 로그아웃 상태, true면 로그인 상태.
  return (
    <div className="App">
      <Header isAuth={isAuth}/>

      
     <Routes>


     </Routes>
     <Visual />
     <TravelInfo/>
     <TravelAds/>


    </div>
  );
}

export default App;
