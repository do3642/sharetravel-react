import { useEffect, useState } from 'react';
import '../styles/Header.css'
import AccountMenu from './AccountMenu';
import MobileMenu from './MobileMenu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function Header({ isAuth,setIsAuth,user,handleClose }) {
  const [menu, setMenu] = useState(false); // false하면 모바일 메뉴가 안 뜨고 true 하면 모바일 메뉴 뜸.
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 세션에서 토큰 확인 후 상태 업데이트
    const token = sessionStorage.getItem('jwt');
    setIsAuth(!!token);
}, []);

  return(
    <nav className="nav">
        <a href='/' className={menu ? 'nav-title-hidden' : "nav-title"}>
          <h1>여정</h1>
        </a>
        <ul className={menu ? 'nav-menu-hidden' : "nav-menu"}>
          <li><a href='/travel-board'>여행정보</a></li>
          <li><a href='/tip-board'>여행팁</a></li>
          <li><a href='#'>여행지 추천</a></li>
          <li><a href='/market'>마켓</a></li>
        </ul>
      <div className="nav-right">
        <div className={menu ? "nav-search-hidden" : "nav-search"}>
          <input type="search" placeholder='검색'></input>
          <button><SearchIcon/></button> 
        </div>
        <ul className={menu ? "nav-user-hidden" : "nav-user"}>
          <AccountMenu isAuth={isAuth} setIsAuth={setIsAuth} user={user}/>
        </ul>
      </div>
      
      <MobileMenu isAuth={isAuth} open={open} setOpen={setOpen} />
    </nav>
  )
}

export default Header;