import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

/**
 * `<NaN>` ('검사 기록 확인 페이지(마이페이지)')
 * - [Open in Figma](https://figma.com/file/NlD9D8mc0GTNdluwALGs8v?node-id=361:546)
 * - [Open in Grida](https://code.grida.co/files/NlD9D8mc0GTNdluwALGs8v?node=361:546)
 *
 *
 * ---
 * @example
 * ```tsx
 * import React from "react";
 *
 * export default function () {
 *   return (
 *     <>
 *       👇 instanciate widget like below. 👇
 *       <NaN/>
 *     </>
 *   )
 * }
 * ```
 * ---
 * @params {any} props - this widget does not requires props. you can pass custom dynamic props to the widget as you want (on typescript, it will raise type check issues).
 * ---
 * @preview
 * ![](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fd7ed7e-053b-4518-bfbf-495c41552c3a)
 * ---
 * @remarks
 * @see {@link https://grida.co/docs} for more information.
 * ---
 * Code generated by grida.co | engine 0.0.1 (Apache-2.0) | Generated code under CC0 (public domain) *This code is free to use, modify, and redistribute. (aknowledgment is not required)*
 *
 *
 * ![Made with Grida](https://bridged-service-static.s3.us-west-1.amazonaws.com/branding/logo/32.png)
 * <!-- Info: Please do not remove this comment unless intended. removing this section will break grida integrations. -->
 * <!-- grida.meta.widget_declaration | engine : 0.0.1 | source : figma://NlD9D8mc0GTNdluwALGs8v/361:546 -->
 */

export function Mypage() {
  const [userInfo, setUserInfo] = useState({
    id: null,
    nickname: "",
    phone_number: "",
    password: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/user");
        setUserInfo(response.data.user);
      } catch (error) {
        console.error("사용자 정보를 불러오는 중 오류 발생:", error);
      }
    };

    fetchUserInfo();
  }, [userInfo]);

  return (
    <RootWrapperNaN>
      <Frame48>
        <Group>
          <Vector xmlns="http://www.w3.org/2000/svg">
            <path fill="black" d="M14 0L0 0L0 15L14 15L14 0Z" />
          </Vector>
          <Vector_0001 xmlns="http://www.w3.org/2000/svg">
            <path
              fill="rgba(0, 0, 0, 0.85)"
              d="M0 7.49689C0 10.943 3.17746 13.7963 7 13.7963C10.8294 13.7963 14 10.943 14 7.49689C14 4.45837 11.5363 1.88303 8.3245 1.31486L8.3245 0.437883C8.3245 -0.000603552 7.98824 -0.117945 7.61766 0.122914L5.42844 1.50013C5.11276 1.69776 5.10589 1.9942 5.42844 2.19801L7.6108 3.5814C7.98824 3.82843 8.3245 3.71109 8.3245 3.26643L8.3245 2.38946C10.9186 2.92058 12.8265 4.99567 12.8265 7.49689C12.8265 10.4119 10.2393 12.7464 7 12.7464C3.7608 12.7464 1.15981 10.4119 1.16667 7.49689C1.17353 5.74296 2.12059 4.19281 3.58236 3.25408C3.86374 3.06262 3.95295 2.77236 3.78138 2.51298C3.60981 2.25977 3.23236 2.19183 2.9304 2.40181C1.16667 3.55669 0 5.4218 0 7.49689Z"
            />
          </Vector_0001>
        </Group>
        <Vector_0002 xmlns="http://www.w3.org/2000/svg">
          <path
            fill="rgba(0, 0, 0, 0.64)"
            d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
          />
        </Vector_0002>
        <IconsBasicUser
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d845334-edba-4189-a042-6f5dfba35719"
          alt="icon"
        />
        <NaN_0002>나의 도형</NaN_0002>
      </Frame48>
      <Frame50>
        <Frame1>
          <Group54>
            <IconsBasicProject
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe367943-9f0b-4c28-affe-332a107dbf6c"
              alt="icon"
            />
            <NaN_0003>나의 도형</NaN_0003>
          </Group54>
          <Group53>
            <IconsBasicChat
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea49e74c-4e64-4258-8e10-2ed20fc446b4"
              alt="icon"
            />
            <NaN_0004>고민 나눔</NaN_0004>
          </Group53>
          <Group52>
            <IconlyRegularTwoToneHome>
              <Home>
                <Home_0001
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7d58106-7851-4cea-a2f4-293f35a6308e"
                  alt="image of Home"
                />
              </Home>
            </IconlyRegularTwoToneHome>
            <NaN_0005>홈</NaN_0005>
          </Group52>
          <Group51>
            <IconsBasicStar
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a5e67e2-4046-4e06-a3a6-3a919b1fb6f4"
              alt="icon"
            />
            <NaN_0006>칭찬 일기</NaN_0006>
          </Group51>
          <Group50>
            <NaN_0007>집중 기록</NaN_0007>
            <IconsBasicTime
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7431b93-354c-4c19-b977-55d5bf186bcd"
              alt="icon"
            />
          </Group50>
        </Frame1>
      </Frame50>
      <Rectangle22 />
      <Group49>
        <Group48>
          <NaN_0008>
            <Ellipse11 />
          </NaN_0008>
          <_21433051 />
        </Group48>
      </Group49>
      <Group13>
        <Rectangle23 />
        <NaN_0009>아이디</NaN_0009>
      </Group13>
      <Group14>
        <Rectangle22_0001 />
        <NaN_0010>비밀번호</NaN_0010>
      </Group14>
      <Group15>
        <Rectangle22_0002 />
        <NaN_0011>전화번호</NaN_0011>
      </Group15>
      <Rectangle49 xmlns="http://www.w3.org/2000/svg">
        <path
          fill="white"
          d="M0 10C0 4.47715 4.47715 0 10 0L129 0C134.523 0 139 4.47715 139 10L139 11C139 16.5228 134.523 21 129 21L10 21C4.47715 21 0 16.5228 0 11L0 10Z"
        />
      </Rectangle49>
      <Rectangle50 xmlns="http://www.w3.org/2000/svg">
        <path
          fill="white"
          d="M0 10C0 4.47715 4.47715 0 10 0L129 0C134.523 0 139 4.47715 139 10L139 12C139 17.5228 134.523 22 129 22L10 22C4.47715 22 0 17.5228 0 12L0 10Z"
        />
      </Rectangle50>
      <Rectangle51 xmlns="http://www.w3.org/2000/svg">
        <path
          fill="white"
          d="M0 10C0 4.47715 4.47715 0 10 0L129 0C134.523 0 139 4.47715 139 10L139 11C139 16.5228 134.523 21 129 21L10 21C4.47715 21 0 16.5228 0 11L0 10Z"
        />
      </Rectangle51>
      <NaN_0012>{userInfo?.nickname}</NaN_0012>
      <_1111>{userInfo?.password}</_1111>
      <_1111_0001>{userInfo?.phone_number}</_1111_0001>
    </RootWrapperNaN>
  );
}

const RootWrapperNaN = styled.div`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
`;

const Frame48 = styled.div`
  width: 360px;
  height: 54px;
  overflow: hidden;
  background: rgb(245, 239, 231);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Group = styled.div`
  width: 14px;
  height: 15px;
  position: absolute;
  left: 292px;
  top: 21px;
`;

const Vector = styled.svg`
  width: 14px;
  height: 15px;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  opacity: 0;
`;

const Vector_0001 = styled.svg`
  width: 14px;
  height: 14px;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 1px;
`;

const Vector_0002 = styled.svg`
  width: 20px;
  height: 15px;
  position: absolute;
  left: 16px;
  top: 22px;
  right: 324px;
  bottom: 17px;
`;

const IconsBasicUser = styled.img`
  width: 19px;
  height: 18px;
  object-fit: cover;
  position: absolute;
  left: 323px;
  top: 19px;
`;

const NaN_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 99px;
  position: absolute;
  left: 132px;
  top: 16px;
`;

const Frame50 = styled.div`
  width: 360px;
  height: 52px;
  overflow: hidden;
  background: rgb(245, 239, 231);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  left: 0px;
  top: 748px;
`;

const Frame1 = styled.div`
  width: 360px;
  height: 52px;
  overflow: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Group54 = styled.div`
  width: 41px;
  height: 30px;
  position: absolute;
  left: 297px;
  top: 16px;
`;

const IconsBasicProject = styled.img`
  object-fit: cover;
  position: absolute;
  left: 10px;
  top: 0px;
  right: 10px;
  bottom: 11px;
`;

const NaN_0003 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 44px;
  position: absolute;
  left: 0px;
  top: 20px;
`;

const Group53 = styled.div`
  width: 36px;
  height: 32px;
  position: absolute;
  left: 233px;
  top: 14px;
`;

const IconsBasicChat = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  left: 8px;
  top: 0px;
`;

const NaN_0004 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 39px;
  position: absolute;
  left: 0px;
  top: 22px;
`;

const Group52 = styled.div`
  width: 20px;
  height: 28px;
  position: absolute;
  left: 170px;
  top: 18px;
`;

const IconlyRegularTwoToneHome = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 11px;
`;

const Home = styled.div`
  width: 16px;
  height: 14px;
  position: absolute;
  left: 2px;
  top: 1px;
`;

const Home_0001 = styled.img`
  object-fit: cover;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
`;

const NaN_0005 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 14px;
  position: absolute;
  left: 3px;
  top: 18px;
`;

const Group51 = styled.div`
  width: 36px;
  height: 30px;
  position: absolute;
  left: 92px;
  top: 16px;
`;

const IconsBasicStar = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  left: 8px;
  top: 0px;
`;

const NaN_0006 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 39px;
  position: absolute;
  left: 0px;
  top: 20px;
`;

const Group50 = styled.div`
  width: 37px;
  height: 30px;
  position: absolute;
  left: 21px;
  top: 16px;
`;

const NaN_0007 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 40px;
  position: absolute;
  left: 0px;
  top: 20px;
`;

const IconsBasicTime = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  left: 9px;
  top: 0px;
`;

const Rectangle22 = styled.div`
  width: 287px;
  height: 241px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 44px;
  top: 279px;
  backdrop-filter: blur(4px);
`;

const Group49 = styled.div`
  width: 78px;
  height: 78px;
  position: absolute;
  left: 142px;
  top: 294px;
`;

const Group48 = styled.div`
  width: 78px;
  height: 78px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const NaN_0008 = styled.div`
  width: 78px;
  height: 78px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Ellipse11 = styled.div`
  width: 78px;
  height: 78px;
  background: rgb(79, 112, 156);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 78px / 78px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const _21433051 = styled.div`
  width: 49px;
  height: 53px;
  background: url(https://s3-alpha-sig.figma.com/img/04d4/6d60/a4548bb8cf4a5d935bfc6e39cb437ce0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9xB9RDSnXx12yrLpPrpwIEj3gpy03AWk2OC5UW0pJw3o3L6ZT0YL45N6foEB-shUHuSUNwo1q2PI6sqOMvO46HgG-ILNlg6-2kbrhkqQFEUHeeF-6M6OoPGrwgIsTUwcY4Jg6kv8aPJdYTcan6REZmi9rTdwm2Qs0GBYPK-8v4pHgBY~Zge0NGyO~kJBj6vuXwrx7KQ283ia6VwfibWaPkMsqqJphkV7iSszesUPIi6zHce9driC~v~fSOV-f6hj8msW1ILXIq3kjETeJ2Oc11MZ~a9s3jB9k14OuK4182QLyH9tmc1fe8wZZNMKnHUi4c8oRWsIRMr8Gg8yd99Kg__);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  left: 15px;
  top: 10px;
`;

const Group13 = styled.div`
  width: 61px;
  height: 21px;
  position: absolute;
  left: 73px;
  top: 391px;
`;

const Rectangle23 = styled.div`
  width: 61px;
  height: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(235, 186, 113);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const NaN_0009 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 48px;
  min-height: 17px;
  position: absolute;
  left: 7px;
  top: 2px;
  height: 17px;
`;

const Group14 = styled.div`
  width: 66px;
  height: 21px;
  position: absolute;
  left: 71px;
  top: 437px;
`;

const Rectangle22_0001 = styled.div`
  width: 61px;
  height: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(188, 220, 99);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 2px;
  top: 0px;
`;

const NaN_0010 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 66px;
  min-height: 17px;
  position: absolute;
  left: 0px;
  top: 2px;
  height: 17px;
`;

const Group15 = styled.div`
  width: 63px;
  height: 21px;
  position: absolute;
  left: 73px;
  top: 480px;
`;

const Rectangle22_0002 = styled.div`
  width: 61px;
  height: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(133, 187, 226);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 1px;
  top: 0px;
`;

const NaN_0011 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 63px;
  min-height: 17px;
  position: absolute;
  left: 0px;
  top: 2px;
  height: 17px;
`;

const Rectangle49 = styled.svg`
  width: 139px;
  height: 21px;
  position: absolute;
  left: 153px;
  top: 391px;
`;

const Rectangle50 = styled.svg`
  width: 139px;
  height: 22px;
  position: absolute;
  left: 153px;
  top: 436px;
`;

const Rectangle51 = styled.svg`
  width: 139px;
  height: 21px;
  position: absolute;
  left: 153px;
  top: 480px;
`;

const NaN_0012 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  width: 120px;
  position: absolute;
  left: 162px;
  top: 394px;
`;

const _1111 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  width: 120px;
  position: absolute;
  left: 162px;
  top: 439px;
`;

const _1111_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  width: 120px;
  position: absolute;
  left: 162px;
  top: 483px;
`;