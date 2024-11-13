import './Header.css'

function Header() {
  return(
    <nav>
      <a href='#' class="nav-loggo"><h1>로고 여정</h1></a>
      <ul class="nav-menu">
        <li><a href='#'>여행정보</a></li>
        <li><a href='#'>여행팁</a></li>
        <li><a href='#'>여행지 추천</a></li>
        <li><a href='#'>마켓</a></li>
      </ul>
      <div class="nav-right">
        <div class="nav-search">
          <input type="search"></input>
          <button>검색</button>
        </div>
        <ul class="nav-user">
          <li><a href='#'>로그인</a></li>
          <li><a href='#'>회원가입</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;