import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { HeaderLogout } from "../../components/HeaderLogout";
import { HeaderMypage } from "../../components/HeaderMypage";
import { goBack } from "../../components/backNavigation";

import axios from "axios";

const getEmotionImageUrl = (emotion) => {
  let imageUrl = "";
  switch (emotion) {
    case 1:
      imageUrl = "/assets/emotion1.png";
      break;
    case 2:
      imageUrl = "/assets/emotion2.png";
      break;
    case 3:
      imageUrl = "/assets/emotion3.png";
      break;
    case 4:
      imageUrl = "/assets/emotion4.png";
      break;
    case 5:
      imageUrl = "/assets/emotion5.png";
      break;
  }
  return imageUrl;
};

export function ComplimentWrite() {
  const [emotion, setEmotion] = useState(null);
  const [content, setContent] = useState("");
  const [compliments, setCompliments] = useState([]);
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // 페이지가 로드될 때 현재 날짜를 업데이트합니다.
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    setCurrentDate(`${year}년 ${month}월 ${day}일`);
  }, []);

  const handleEmotionClick = (value) => {
    setEmotion(value);
    console.log(value);
    if (selectedEmotion === value) {
      setSelectedEmotion(null);
    } else {
      // 새로운 감정을 클릭하면 선택됨
      setSelectedEmotion(value);
    }
  };

  const handleSubmit = () => {
    const data = {
      content: content,
      emotion: emotion,
    };

    axios
      .post("http://localhost:3001/api/compliment/create", data, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("글 등록 완료", response.data);
        window.location.href = "/compliment";
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      });
  };

  return (
    <RootWrapperNaN>
      <Frame47>
        <Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
          <path
            fill="rgba(0, 0, 0, 0.64)"
            d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
          />
        </Vector>
        <NaN_00001>칭찬 작성</NaN_00001>
        <HeaderLogout />
        <HeaderMypage />
      </Frame47>
      <NaN_0002>📅 {currentDate} 📅</NaN_0002>
      <Group59>
        <Rectangle46 />
        <NaN_0003 onClick={handleSubmit}>완료</NaN_0003>
      </Group59>
      <NaN_0004>오늘 하루는 어땠나요?</NaN_0004>
      <Emotion1
        selected={selectedEmotion === 1}
        onClick={() => handleEmotionClick(1)}
      />
      <Emotion2
        selected={selectedEmotion === 2}
        onClick={() => handleEmotionClick(2)}
      />
      <Emotion3
        selected={selectedEmotion === 3}
        onClick={() => handleEmotionClick(3)}
      />
      <Emotion4
        selected={selectedEmotion === 4}
        onClick={() => handleEmotionClick(4)}
      />
      <Emotion5
        selected={selectedEmotion === 5}
        onClick={() => handleEmotionClick(5)}
      />
      <NaN_0005>오늘 나에게 해주고 싶은 한 마디는 무엇인가요?</NaN_0005>
      <Group60>
        <Rectangle39 />
        <NaN_0006>
          <textarea
            Co
            style={{ width: "285px", height: "200px" }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
          />
        </NaN_0006>
      </Group60>

      <Footer />
    </RootWrapperNaN>
  );
}
const NaN_00001 = styled.span`
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

const RootWrapperNaN = styled.div`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
`;

const Frame47 = styled.div`
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
  font-weight: 700;
  text-align: left;
  position: absolute;
  left: 85px;
  top: 90px;
`;

const Group59 = styled.div`
  width: 67px;
  height: 37px;
  position: absolute;
  left: 146px;
  top: 643px;
`;

const Rectangle46 = styled.div`
  width: 67px;
  height: 37px;
  background: rgb(79, 112, 156);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;

  &:hover {
    background-color: #213555; /* hover 시 배경색 변경 */
  }
`;

const NaN_0003 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 16px;
  top: 8px;
`;

const NaN_0004 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 100px;
  top: 165px;
`;

const Emotion1 = styled.div`
  width: 64px;
  height: 64px;
  background: url(/assets/emotion5.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 16px;
  top: 195px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.selected ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none"};
`;

const Emotion2 = styled.div`
  width: 63px;
  height: 64px;
  background: url(/assets/emotion4.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 80px;
  top: 195px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.selected ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none"};
`;

const Emotion3 = styled.div`
  width: 64px;
  height: 64px;
  background: url(/assets/emotion3.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 143px;
  top: 195px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.selected ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none"};
`;

const Emotion4 = styled.div`
  width: 63px;
  height: 64px;
  background: url(/assets/emotion2.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 207px;
  top: 195px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.selected ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none"};
`;

const Emotion5 = styled.div`
  width: 65px;
  height: 64px;
  background: url(/assets/emotion1.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 270px;
  top: 195px;
  cursor: pointer;  const [isClicked, setIsClicked] = useState(false);
  box-shadow: ${(props) =>
    props.selected ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none"};

`;

const NaN_0005 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 391px;
  position: absolute;
  left: -12px;
  top: 333px;
`;

const Group60 = styled.div`
  width: 320px;
  height: 257px;
  position: absolute;
  left: 17px;
  top: 360px;
`;

const Rectangle39 = styled.div`
  width: 320px;
  height: 257px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(245, 239, 231);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const NaN_0006 = styled.span`
  color: rgb(197, 195, 195);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 14px;
  top: 23px;
  cursor: pointer;  const [isClicked, setIsClicked] = useState(false);

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
