import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserRegister() {
  const navigate = useNavigate();

  const [member,setMember] = useState({
    username : '',
    password:'',
    nickname:'',
    ssn:''
  })

  const onChangeHandler = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_SERVER_URL}/User-Register`,member)
    .then(response => {
      console.log(response);
      alert(response.data);
      navigate('/');
    })
    .catch(error => {console.log(error)});
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아이디:
        <input
          name="username"
          type="text"
          value={member.username}
          onChange={onChangeHandler}
          required
        />
      </label>
      <label>
        비밀번호:
        <input
          name="password"
          type="password"
          value={member.password}
          onChange={onChangeHandler}
          required
        />
      </label>
      <label>
        닉네임:
        <input
          name="nickname"
          type="text"
          value={member.nickname}
          onChange={onChangeHandler}
          required
        />
      </label>
      <label>
        주민번호 앞자리:
        <input
          name="ssn"
          type="text"
          value={member.ssn}
          onChange={onChangeHandler}
          required
          maxLength="6"
        />
      </label>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default UserRegister;
