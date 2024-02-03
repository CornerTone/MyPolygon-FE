import React, { useState } from "react";
import axios from "axios";
import * as L from "./LoginPageStyle";
import * as S from "../Signin/SignPageStyle";
import { Link } from "react-router-dom";
import { goBack } from "../../components/backNavigation";

export function LoginPage() {
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("in");
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        formData
      );
      console.log(response.data); // 서버의 응답 데이터를 콘솔에 출력
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
    }
  };

  return (
    <L.RootWrapperNaN>
      <L.Rectangle3 />
      <form onSubmit={handleSubmit}>
        {" "}
        {/* 폼 제출 이벤트를 처리할 form 요소 추가 */}
        <L.Group12>
          <L.Rectangle25 />
          <L.NaN_0002>로그인</L.NaN_0002>
        </L.Group12>
        <L.Group12_0001>
          <L.Rectangle23 />
          <L.NaN_0004>아이디</L.NaN_0004>
        </L.Group12_0001>
        <L.IdInputBox
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
        />
        <L.Group12_0002>
          <L.Rectangle22 />
          <L.NaN_0005>비밀번호</L.NaN_0005>
        </L.Group12_0002>
        <L.PasswordInputBox
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <L.Rectangle39 />
        <S.Group16>
          <S.Rectangle22_0002 />
          <button type="submit" onClick={handleSubmit}>
            <Link to="/main">
              <S.NaN_0005>로그인</S.NaN_0005>
            </Link>
          </button>
        </S.Group16>
      </form>
    </L.RootWrapperNaN>
  );
}
