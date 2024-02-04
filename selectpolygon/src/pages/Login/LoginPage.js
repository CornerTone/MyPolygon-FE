import React, { useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as L from "./LoginPageStyle";
import * as S from "../Signin/SignPageStyle";
import { goBack } from "../../components/backNavigation";

export function LoginPage() {
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false); // 로그인 실패 상태
  const [showModal, setShowModal] = useState(false); // 모달 창 표시 여부

  const navigate = useNavigate();

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
        "http://localhost:3001/api/auth/login",
        formData
      );

      if (response.data.success) {
        console.log("로그인 성공");
        // 로그인 성공 시에 추가적인 작업 수행
        // ...

        // 페이지 이동
        navigate("/main");
      } else {
        console.log("로그인 실패");
        // 실패 시에 상태 업데이트
        setLoginError(true);
        // 모달 창 표시
        setShowModal(true);
      }

      const token = response.data.userId;
      Cookies.set('mypolygon_auth', token); // 'mypolygon_auth'라는 이름의 쿠키에 토큰을 저장


    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
      // 오류 시에 상태 업데이트
      setLoginError(true);
      // 모달 창 표시
      setShowModal(true);
    }
  };

  const closeModal = () => {
    // 모달 창 닫기
    setShowModal(false);
    // 실패 상태 초기화
    setLoginError(false);
  };

  return (
    <L.RootWrapperNaN>
      <form onSubmit={handleSubmit}>
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
        <S.Rectangle37 />
        <S.Typography>
          <S.Typography_0001>로그인</S.Typography_0001>
        </S.Typography>
        <S.Group16>
          <S.Rectangle22_0002 />
          <div onClick={handleSubmit}>
            <S.NaN_0005>로그인</S.NaN_0005>
          </div>
        </S.Group16>
        <S.Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
          <path
            fill="rgba(0, 0, 0, 0.64)"
            d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
          />
        </S.Vector>
      </form>

      {loginError && showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>로그인에 실패했습니다. 다시 시도하세요.</p>
          </div>
        </div>
      )}
    </L.RootWrapperNaN>
  );
}
