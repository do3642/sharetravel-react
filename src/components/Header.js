import '../styles/Header.css'

function Header() {
  return(
    <nav>
      <a href='#' className="nav-title">
        <h1>여정</h1>
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
          <li><a href='#'>로그인</a></li>
          <li><a href='#'>회원가입</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;