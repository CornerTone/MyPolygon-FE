import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import axios from "axios";
import { Footer } from "../../components/Footer";
import { HeaderLogout } from "../../components/HeaderLogout";
import { HeaderMypage } from "../../components/HeaderMypage";
import { goBack } from "../../components/backNavigation";

// 감정에 따라 이미지 다르게 설정 
const getEmotionImageUrl = (emotion) => {
  let imageUrl = "";
  switch (emotion) {
    case 5:
      imageUrl = "/assets/emotion1.png";
      break;
    case 4:
      imageUrl = "/assets/emotion2.png";
      break;
    case 3:
      imageUrl = "/assets/emotion3.png";
      break;
    case 2:
      imageUrl = "/assets/emotion4.png";
      break;
    case 1:
      imageUrl = "/assets/emotion5.png";
      break;
  }
  return imageUrl;
};

// yyyy-mm-dd 형식으로 출력
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export function ComplimentMain() {
  // 칭찬일기 정보 저장 
  const [compliments, setCompliments] = useState([]);

  // 서버로부터 칭찬일기 리스트 조회 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/compliment/read-all",
          {
            withCredentials: true,
          }
        );
        setCompliments(response.data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <RootWrapperNaN>
      <Frame48>
        <Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
          <path
            fill="rgba(0, 0, 0, 0.64)"
            d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
          />
        </Vector>
        <NaN_0002>칭찬 일기</NaN_0002>
        <HeaderLogout />
        <HeaderMypage />
      </Frame48>

      {compliments.map((compliment, index) => (
        <Link key={compliment.id} to={`/compliment/${compliment.id}`}>
          <CustomDiv key={compliment.id} index={index}>
            <Rectangle34 />
            <NaN_0003>{formatDate(compliment.date)}</NaN_0003>

            <Group38>
              <Rectangle31 />
              <_31_0001>{compliment.emotion}</_31_0001>
              <Sun_0001>점</Sun_0001>
              <_20231_0001>{compliment.content}</_20231_0001>
              <EmotionImage emotion={compliment.emotion} />{" "}
            </Group38>
          </CustomDiv>
        </Link>
      ))}
      <Ellipse9 />
      <Link to="/ComplimentWrite">
        <IconAdd>
          <Vector_0001
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt="image of Vector"
          />
          <Vector_0002 xmlns="http://www.w3.org/2000/svg">
            <path
              fill="white"
              d="M20.8955 13.3333L11.9403 13.3333L11.9403 23.3333L8.95522 23.3333L8.95522 13.3333L0 13.3333L0 10L8.95522 10L8.95522 0L11.9403 0L11.9403 10L20.8955 10L20.8955 13.3333Z"
            />
          </Vector_0002>
        </IconAdd>
      </Link>

      <Footer />
    </RootWrapperNaN>
  );
}

const EmotionImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${(props) => getEmotionImageUrl(props.emotion)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 262px;
  top: 26px;
`;

const CustomDiv = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px; 
  margin-top: 30px; 
  top: ${(props) => props.index * 200}px;
`;

const RootWrapperNaN = styled.div`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  bottom: 30px;
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
  width: 85px;
  position: absolute;
  left: 138px;
  top: 19px;
`;

const Rectangle34 = styled.div`
  width: 360px;
  height: 41px;
  background: rgb(216, 196, 182);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  position: absolute;
  left: 0px;
  top: 54px;
`;

const NaN_0003 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: left;
  position: absolute;
  left: 16px;
  top: 64px;
`;

const Rectangle35 = styled.div`
  width: 401px;
  height: 41px;
  background: rgb(216, 196, 182);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  position: absolute;
  left: -21px;
  top: 254px;
`;

const _31 = styled.span`
  color: rgb(79, 112, 156);
  text-overflow: ellipsis;
  font-size: 28px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  width: 41px;
  min-height: 31px;
  position: absolute;
  left: 40px;
  top: 139px;
  height: 31px;
`;

const Sun = styled.span`
  color: rgb(79, 112, 156);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  width: 53px;
  min-height: 31px;
  position: absolute;
  left: 34px;
  top: 170px;
  height: 31px;
`;

const _20231 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  text-align: left;
  width: 206px;
  min-height: 33px;
  position: absolute;
  left: 102px;
  top: 148px;
  height: 33px;
`;

const NaN_0004 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: left;
  position: absolute;
  left: 16px;
  top: 264px;
`;

const Group38 = styled.div`
  width: 323px;
  height: 104px;
  position: absolute;
  left: 16px;
  top: 118px;
`;

const Rectangle31 = styled.div`
  width: 323px;
  height: 104px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 1px rgb(79, 112, 156);
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const _31_0001 = styled.span`
  color: rgb(79, 112, 156);
  text-overflow: ellipsis;
  font-size: 28px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  width: 41px;
  min-height: 31px;
  position: absolute;
  left: 24px;
  top: 22px;
  height: 31px;
`;

const Sun_0001 = styled.span`
  color: rgb(79, 112, 156);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  width: 53px;
  min-height: 31px;
  position: absolute;
  left: 18px;
  top: 53px;
  height: 31px;
`;

const _20231_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  text-align: left;
  width: 153px;
  min-height: 80px;
  position: absolute;
  left: 85px;
  top: 13px;
  height: 80px;
`;

const Emotion2 = styled.div`
  width: 48px;
  height: 48px;
  background: url(https://s3-alpha-sig.figma.com/img/d2c0/bca7/68e1e2384b8898d15503b087999b3d85?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i2h5Pz6UsB9nLmRtgElik~47xkcUMZwhYGe8zt0xZHYxK-4sg1Z5DjVatyu4UX7LK7a0h8KlGj0Fcjp0RhQ18c03vz-eTlF5zsqSR2-4Bq2hI7TpikMmbJd8REMDlcELJS7Yiv9nKRgsDasOLfTTbVNNFX0gd7D9TSpAFEuPA1sr0yDvAZc8Zlmjg0Tct2vFvLCwgJjfL3zRaI1v~KIclqupUoqBJbapSBj7NjGZ~B96xcFpY95YiQJrLXJOdCSG1iT6AEfOa22JyamiKp5Vai6oZHq8L~s~9Wwi85zKAalZ~S94tPq8IBy3x9VdjXij9J9bQgg8vUZGqoitLGyw9A__);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 262px;
  top: 26px;
`;

const Group39 = styled.div`
  width: 323px;
  height: 104px;
  position: absolute;
  left: 16px;
  top: 313px;
`;

const _28 = styled.span`
  color: rgb(79, 112, 156);
  text-overflow: ellipsis;
  font-size: 28px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
  width: 41px;
  min-height: 31px;
  position: absolute;
  left: 24px;
  top: 22px;
  height: 31px;
`;

const NaN_0005 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  text-align: left;
  width: 147px;
  min-height: 87px;
  position: absolute;
  left: 87px;
  top: 11px;
  height: 87px;
`;

const Emotion3 = styled.div`
  width: 48px;
  height: 48px;
  background: url(https://s3-alpha-sig.figma.com/img/d2c0/bca7/68e1e2384b8898d15503b087999b3d85?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i2h5Pz6UsB9nLmRtgElik~47xkcUMZwhYGe8zt0xZHYxK-4sg1Z5DjVatyu4UX7LK7a0h8KlGj0Fcjp0RhQ18c03vz-eTlF5zsqSR2-4Bq2hI7TpikMmbJd8REMDlcELJS7Yiv9nKRgsDasOLfTTbVNNFX0gd7D9TSpAFEuPA1sr0yDvAZc8Zlmjg0Tct2vFvLCwgJjfL3zRaI1v~KIclqupUoqBJbapSBj7NjGZ~B96xcFpY95YiQJrLXJOdCSG1iT6AEfOa22JyamiKp5Vai6oZHq8L~s~9Wwi85zKAalZ~S94tPq8IBy3x9VdjXij9J9bQgg8vUZGqoitLGyw9A__);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 260px;
  top: 28px;
`;

const Ellipse9 = styled.div`
  width: 59px;
  height: 59px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(79, 112, 156);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 59px / 59px;
  position: absolute;
  left: 149px;
  top: 671px;
  &:hover {
    background-color: #213555; 
  }
`;

const IconAdd = styled.div`
  width: 0px;
  height: 0px;
  position: absolute;
  left: 139px;
  top: 681px;

  &:hover {
    background-color: #213555; /* hover 시 배경색 변경 */
  }
`;

const Vector_0001 = styled.img`
  object-fit: cover;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 14px;
  bottom: 0px;
`;

const Vector_0002 = styled.svg`
  width: 21px;
  height: 23px;
  position: absolute;
  left: 29px;
  top: 8px;
  right: 0px;
  bottom: 9px;
  }
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

const NaN_0006 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 42px;
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

const NaN_0007 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 37px;
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

const NaN_0008 = styled.span`
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

const NaN_0009 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 37px;
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

const NaN_0010 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 8px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 38px;
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
