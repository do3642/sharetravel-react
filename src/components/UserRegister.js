import React, { useState } from "react";

function UserRegister() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [ssn, setSsn] = useState(""); // 주민번호 앞자리

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 처리 로직 작성
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아이디:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
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
        닉네임:
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
      </label>
      <label>
        주민번호 앞자리:
        <input
          type="text"
          value={ssn}
          onChange={(e) => setSsn(e.target.value)}
          required
          maxLength="6"
        />
      </label>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default UserRegister;
