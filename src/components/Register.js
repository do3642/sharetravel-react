import React, { useState } from "react";
import UserRegister from "./UserRegister";
import CompanyRegister from "./CompanyRegister";
import "../styles/Register.css";

function Register() {
  const [isUser, setIsUser] = useState(true);

  const handleSelection = (isUserSelected) => {
    setIsUser(isUserSelected);
  };

  return (
    <div id="register-page">
      <div className="register-container">
        <div className="register-box">
          <h1>회원가입</h1>
          <div className="register-tabs">
            <button
              className={`tab-button ${isUser ? "active" : ""}`}
              onClick={() => handleSelection(true)}
            >
              개인 회원가입
            </button>
            <button
              className={`tab-button ${!isUser ? "active" : ""}`}
              onClick={() => handleSelection(false)}
            >
              기업 회원가입
            </button>
          </div>
          <div className="register-form">
            {isUser ? <UserRegister /> : <CompanyRegister />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
