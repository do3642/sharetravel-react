// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import MarketCarousel from './components/MarketCarousel';

import Home from './components/Home';
import TravelBoard from './components/TravelBoard';
import TravelBdDetail from './components/TravelBdDetail';
import TipBoard from './components/TipBoard';
import TipBdDetail from './components/TipBdDetail';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import Market from './components/Market';
import axiosInstance from './axios/axiosInstance';
import MarketDetail from './components/MarketDetail';
import MarketSell from './components/MarketSell';
import TravelBdWrite from './components/TravelBdWrite';

function App() {
  const [isAuth, setIsAuth] = useState(false); // false면 로그아웃 상태, true면 로그인 상태.
  const [user, setUser] = useState(null); // 사용자 정보가 담긴 state


  //로그인 시 사용자 정보를 받아옴
  useEffect(()=>{
    if(isAuth){
      axiosInstance.get('/user')
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }, [isAuth])
  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} user={user}/>

      
     <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/travel-board' element={<TravelBoard />} />
      <Route path='/market' element={<Market />} />
      <Route path='/market/:productId' element={<MarketDetail user={user}/>} />
      <Route path='/marketsell' element={<MarketSell user={user}/>} />
      <Route path="/travel-board/:postId" element={<TravelBdDetail user={user} />} />
      <Route path='/tip-board' element={<TipBoard />} />
      <Route path="/tip-board/:postId" element={<TipBdDetail  />} />
      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth}/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/travelBoard/write" element={<TravelBdWrite user={user} />} />
      <Route path="/travelBoard/write/:postId" element={<TravelBdWrite user={user} />} />
      
     </Routes>
    




    

    </div>
  );
}

export default App;
