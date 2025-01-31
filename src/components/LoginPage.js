import axios from "axios";
import React, { useState } from "react";
import googleLogo from '../assets/login/google.png';
import kakaoLogo from '../assets/login/kakao.png';
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage({setIsAuth}) {
  // 상태 관리: 일반 로그인 또는 기업 로그인 선택
  const [activeTab, setActiveTab] = useState("일반 로그인");
  const [member, setMember] = useState({ username: "", password: "" });
  const navigate = useNavigate();


  // 탭 버튼 클릭 핸들러
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // 입력 필드 변경 핸들러
  const onChangeHandler  = (e) => {
    setMember({
      ...member,
      [e.target.name] : e.target.value
    });
  };



  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_SERVER_URL}/login`,member)
    .then(response => {
      // console.log(response);
      // console.log(response.headers);
      // console.log(response.headers.authorization);
      const jwt = response.headers.authorization;

      if(jwt != null){
        sessionStorage.setItem('jwt', jwt);
        setIsAuth(true);
        navigate('/');
      }
    })
    .catch(error=>{
      alert('로그인 실패');
      console.log(error);
    })
  };

  //회원가입,아이디,비번찾기
  const handleNav = (param) => {
    navigate(`/${param}`);
  }

  return (
    <section id="login-page" className="login-container">
      <div className="login-box">
        <h1>로그인</h1>
        <div className="login-tabs">
          <button
            className={`tab-button ${activeTab === "일반 로그인" ? "active" : ""}`}
            onClick={() => handleTabClick("일반 로그인")}
          >
            일반 로그인
          </button>
          <button
            className={`tab-button ${activeTab === "기업 로그인" ? "active" : ""}`}
            onClick={() => handleTabClick("기업 로그인")}
          >
            기업 로그인
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="아이디"
            className="input-field"
            onChange={onChangeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="input-field"
            onChange={onChangeHandler}
          />
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
        <div className="account-management">
        {/*회원가입, 아이디 찾기, 비밀번호 찾기 기능을 포함한 태그들*/}
          <span onClick={()=>{handleNav('register')}}>회원가입 </span>
          <span onClick={()=>{handleNav('findId')}}>| 아이디찾기 |</span>
          <span onClick={()=>{handleNav('findPw')}}>비밀번호찾기</span>
        </div>

        <div className="social-login">
          <button className="google-login">
            <img src={googleLogo} alt="구글 로그인" />
          </button>
          <button className="kakao-login">
            <img src={kakaoLogo} alt="카카오 로그인" />
          </button>
        </div>
      </div>

     

    </section>
  );
}

export default LoginPage;
