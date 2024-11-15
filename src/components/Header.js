import { useState } from 'react';
import '../styles/Header.css'
import AccountMenu from './AccountMenu';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';

function Header({ isAuth,handleClose }) {
  const [menu, setMenu] = useState(false); // false하면 모바일 메뉴가 안 뜨고 true 하면 모바일 메뉴 뜸.
  const [open, setOpen] = useState(false);

  return(
    <nav className="nav">
        <a href='#' className={menu ? 'nav-title-hidden' : "nav-title"}>
          <h1>여정</h1>
        </a>
        <ul className={menu ? 'nav-menu-hidden' : "nav-menu"}>
          <li><a href='#'>여행정보</a></li>
          <li><a href='#'>여행팁</a></li>
          <li><a href='#'>여행지 추천</a></li>
          <li><a href='#'>마켓</a></li>
        </ul>
      <div className="nav-right">
        <div className={menu ? "nav-search-hidden" : "nav-search"}>
          <input type="search"></input>
          <button>검색</button>
        </div>
        <ul className={menu ? "nav-user-hidden" : "nav-user"}>
          <AccountMenu isAuth={isAuth}/>
        </ul>
      </div>
      
      <MobileMenu isAuth={isAuth} open={open} setOpen={setOpen} />
    </nav>
  )
}

export default Header;