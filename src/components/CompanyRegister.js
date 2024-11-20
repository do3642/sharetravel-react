import React, { useState } from "react";

function CompanyRegister() {
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [password, setPassword] = useState("");
  const [businessNumber, setBusinessNumber] = useState(""); // 사업자 번호

  const handleSubmit = (e) => {
    e.preventDefault();
    // 기업 회원가입 처리 로직 작성
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        기업명:
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </label>
      <label>
        기업 아이디:
        <input
          type="text"
          value={companyId}
          onChange={(e) => setCompanyId(e.target.value)}
          required
        />
      </label>
      <label>
        비밀번호:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        사업자 번호:
        <input
          type="text"
          value={businessNumber}
          onChange={(e) => setBusinessNumber(e.target.value)}
          required
          maxLength="10"
        />
      </label>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default CompanyRegister;
