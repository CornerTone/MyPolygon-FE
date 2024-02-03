import React from "react";
import * as F from "./FirstPageStyle";
import { Link } from "react-router-dom";

export function FirstPage() {
  return (
    <F.RootWrapperNaN>
      <F.Rectangle3 />
      <F.Rectangle37 />
      <F.Rectangle38 />
      <F.Typography>
        <F.Typography_0001>
          안녕하세요!
          <br />
          나만의 도형을 만들어가는 서비스 <br />
          ‘나만의 다각형’입니다
        </F.Typography_0001>
      </F.Typography>
      <F.Typography_0002>
        <F.Typography_0001></F.Typography_0001>
      </F.Typography_0002>
      <F.Group12>
        <F.Rectangle23 />
        <Link to="/signin">
          <F.NaN_0003>회원가입</F.NaN_0003>
        </Link>
      </F.Group12>
      <F.Group12_0001>
        <F.Rectangle25 />
        <Link to="/login">
          <F.NaN_0002>로그인</F.NaN_0002>
        </Link>
      </F.Group12_0001>
      <F.LogoImg src="/logo.png" alt="로고 이미지" />
      <F.Line16 />
      <F.Line17 />
    </F.RootWrapperNaN>
  );
}
