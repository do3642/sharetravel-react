import React, { useState } from "react";
import UserRegister from "./UserRegister";
import CompanyRegister from "./CompanyRegister";
import "../styles/Register.css"; // 스타일 파일을 따로 만들거나 기존 스타일을 적용하세요.

function Register() {
  const [isUser, setIsUser] = useState(true); // 기본값은 개인회원 가입

  const handleSelection = (isUserSelected) => {
    setIsUser(isUserSelected);
  };

  return (
    <section className="register-section" style={{ maxWidth: "1400px", margin: "0 auto" }}>
      <div className="register-selection">
        <button
          className={isUser ? "active" : ""}
          onClick={() => handleSelection(true)}
        >
          개인 회원가입
        </button>
        <button
          className={!isUser ? "active" : ""}
          onClick={() => handleSelection(false)}
        >
          기업 회원가입
        </button>
      </div>

      {isUser ? <UserRegister /> : <CompanyRegister />}
    </section>
  );
}

export default Register;
