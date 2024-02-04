import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./SignPageStyle";
import { goBack } from "../../components/backNavigation";

export function SiginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nickname: "",
    phone_number: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/join",
        formData
      );
      navigate("/login");
      console.log(response.data); // 서버의 응답 데이터를 콘솔에 출력
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
    }
  };

  return (
    <S.RootWrapperNaN>
      <S.Rectangle37 />
      <S.Typography>
        <S.Typography_0001>회원가입</S.Typography_0001>
      </S.Typography>

      <S.Group13>
        <S.Rectangle23 />
        <S.NaN_0002>아이디</S.NaN_0002>
      </S.Group13>
      <S.IdInputBox
        type="text"
        name="nickname"
        value={formData.nickname}
        onChange={handleChange}
      />

      <S.Group14>
        <S.Rectangle22 />
        <S.NaN_0003>비밀번호</S.NaN_0003>
      </S.Group14>
      <S.PasswordInputBox
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <S.Group15>
        <S.Rectangle22_0001 />
        <S.NaN_0004>전화번호</S.NaN_0004>
      </S.Group15>
      <S.PhoneNumInputBox
        type="text"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
      />

      <S.Group16>
        <S.Rectangle22_0002 />
        <button type="submit" onClick={handleSubmit}>
          <S.NaN_0005>회원가입</S.NaN_0005>
        </button>
      </S.Group16>

      <S.Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
        <path
          fill="rgba(0, 0, 0, 0.64)"
          d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
        />
      </S.Vector>
    </S.RootWrapperNaN>
  );
}
