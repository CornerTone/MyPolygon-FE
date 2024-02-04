import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { goBack } from "../../components/backNavigation";
import { useParams } from "react-router-dom"; // custom hooks

export function ComplimentDetail() {
  const { id } = useParams(); // pathVariable = id (경로의 변수 담아서 전달)
  console.log(id); // id check (콘솔에 출력)

  return (
    <RootWrapperNaN>
      <Frame48>
        <Vector xmlns="http://www.w3.org/2000/svg">
          <path
            fill="rgba(0, 0, 0, 0.64)"
            d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
          />
        </Vector>
        <IconsBasicUser
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1011ff7-9995-402d-ab34-ccafecbc0ccc"
          alt="icon"
        />
        <NaN_0002>칭찬 일기</NaN_0002>
      </Frame48>
      <NaN_0003>1월 28일 일요일</NaN_0003>
      <NaN_0004>20:43</NaN_0004>
      <Line3 />
      <Emotion4 />
      <NaN_0005>오늘의 기분</NaN_0005>
      <Rectangle47 />
      <NaN_0006>
        <p>이곳은 다이어리 상세 페이지 입니다.</p>
      </NaN_0006>
      <IconEdit>
        <Link to="/ComplimentWrite">
          <Vector_0001
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt="image of Vector"
          />

          <Vector_0002 xmlns="http://www.w3.org/2000/svg">
            <path
              fill="rgb(79, 112, 156)"
              d="M0 16.0326L0 19.4026C0 19.713 0.21379 19.9569 0.485887 19.9569L3.44008 19.9569C3.56641 19.9569 3.69274 19.9015 3.7802 19.7906L14.392 7.69621L10.7478 3.53909L0.145766 15.6335C0.0485888 15.7444 0 15.8774 0 16.0326ZM17.2101 4.48137C17.5891 4.04903 17.5891 3.35063 17.2101 2.91829L14.9362 0.324255C14.5572 -0.108085 13.945 -0.108085 13.566 0.324255L11.7876 2.35293L15.4318 6.51004L17.2101 4.48137Z"
            />
          </Vector_0002>
        </Link>
      </IconEdit>
      <Frame50>
        <Frame1>
          <Group54>
            <IconsBasicProject
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db3f3f0e-9642-46bb-8988-0a93e27587cb"
              alt="icon"
            />
            <NaN_0007>나의 도형</NaN_0007>
          </Group54>
          <Group53>
            <IconsBasicChat
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fa0d626-ae41-4cda-9055-4f2202f45818"
              alt="icon"
            />
            <NaN_0008>고민 나눔</NaN_0008>
          </Group53>
          <Group52>
            <IconlyRegularTwoToneHome>
              <Home>
                <Home_0001
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62387006-ef11-432d-a8bc-1dcdc6a135bf"
                  alt="image of Home"
                />
              </Home>
            </IconlyRegularTwoToneHome>
            <NaN_0009>홈</NaN_0009>
          </Group52>
          <Group51>
            <IconsBasicStar
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23d42f2a-792b-4194-820b-06643c965a3a"
              alt="icon"
            />
            <NaN_0010>칭찬 일기</NaN_0010>
          </Group51>
          <Group50>
            <NaN_0011>집중 기록</NaN_0011>
            <IconsBasicTime
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8b62d01-a1ee-44d1-bd22-880375a62382"
              alt="icon"
            />
          </Group50>
        </Frame1>
      </Frame50>
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
  left: 1px;
  top: 0px;
`;

const Vector = styled.svg`
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
  width: 87px;
  position: absolute;
  left: 138px;
  top: 19px;
`;

const NaN_0003 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: left;
  position: absolute;
  left: 17px;
  top: 75px;
`;

const NaN_0004 = styled.span`
  color: rgb(197, 195, 195);
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 259px;
  top: 79px;
`;

const Line3 = styled.div`
  width: 360px;
  height: 0px;
  border-top: solid 1px rgb(225, 225, 225);
  position: absolute;
  left: 0px;
  top: 106px;
`;

const Emotion4 = styled.div`
  width: 80px;
  height: 81px;
  background: url(https://s3-alpha-sig.figma.com/img/d2c0/bca7/68e1e2384b8898d15503b087999b3d85?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i2h5Pz6UsB9nLmRtgElik~47xkcUMZwhYGe8zt0xZHYxK-4sg1Z5DjVatyu4UX7LK7a0h8KlGj0Fcjp0RhQ18c03vz-eTlF5zsqSR2-4Bq2hI7TpikMmbJd8REMDlcELJS7Yiv9nKRgsDasOLfTTbVNNFX0gd7D9TSpAFEuPA1sr0yDvAZc8Zlmjg0Tct2vFvLCwgJjfL3zRaI1v~KIclqupUoqBJbapSBj7NjGZ~B96xcFpY95YiQJrLXJOdCSG1iT6AEfOa22JyamiKp5Vai6oZHq8L~s~9Wwi85zKAalZ~S94tPq8IBy3x9VdjXij9J9bQgg8vUZGqoitLGyw9A__);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 141px;
  top: 201px;
`;

const NaN_0005 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 137px;
  top: 152px;
`;

const Rectangle47 = styled.div`
  width: 281px;
  height: 387px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(245, 239, 231);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 40px;
  top: 307px;
`;

const NaN_0006 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 19px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  text-align: left;
  width: 258px;
  min-height: 160px;
  position: absolute;
  left: 52px;
  top: 320px;
  height: 160px;
`;

const IconEdit = styled.div`
  width: 187px;
  height: 393px;
  position: absolute;
  left: 156px;
  top: 73px;
`;

const Vector_0001 = styled.img`
  object-fit: cover;
  position: absolute;
  left: 0px;
  top: 313px;
  right: 117px;
  bottom: 0px;
`;

const Vector_0002 = styled.svg`
  width: 17px;
  height: 20px;
  position: absolute;
  left: 170px;
  top: 0px;
  right: 0px;
  bottom: 373px;
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

const NaN_0007 = styled.span`
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

const NaN_0008 = styled.span`
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

const NaN_0009 = styled.span`
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

const NaN_0010 = styled.span`
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

const NaN_0011 = styled.span`
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
