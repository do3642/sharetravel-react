import '../styles/Header.css'
import AccountMenu from './AccountMenu';

function Header({ isAuth }) {
  return(
    <nav>
        <a href='#' className="nav-title">
          <h1>"여정"</h1>
        </a>
        <ul className="nav-menu">
          <li><a href='#'>여행정보</a></li>
          <li><a href='#'>여행팁</a></li>
          <li><a href='#'>여행지 추천</a></li>
          <li><a href='#'>마켓</a></li>
        </ul>
      <div className="nav-right">
        <div className="nav-search">
          <input type="search"></input>
          <button>검색</button>
        </div>
        <ul className="nav-user">
          <AccountMenu isAuth={isAuth}/>
        </ul>
      </div>
    </nav>
  )
}

export default Header;