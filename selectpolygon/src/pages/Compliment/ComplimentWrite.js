import React, { useState, useEffect } from "react";
import * as M from "./ComplimentWriteStyle";
import { Footer } from "../../components/Footer";
import { HeaderLogout } from "../../components/HeaderLogout";
import { HeaderMypage } from "../../components/HeaderMypage";
import { goBack } from "../../components/backNavigation";
import axios from "axios";
import styled from "styled-components";

// yyyy-mm-dd 형식으로 출력
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
  // 감정 저장
  const [emotion, setEmotion] = useState(null);
  // 칭찬일기 저장
  const [content, setContent] = useState("");
  // 선택된 감정 저장
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  // 현재 날짜 저장
  const [currentDate, setCurrentDate] = useState("");

  // 페이지가 로드될 때 현재 날짜를 업데이트
  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    setCurrentDate(`${year}년 ${month}월 ${day}일`);
  }, []);

  // 선택한 감정 설정
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

  // 서버로부터 칭찬일기 전달
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
        // 칭찬일기 페이지로 이동
        window.location.href = "/compliment";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <M.RootWrapperNaN>
      <M.Frame47>
        <M.Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
          <path
            fill="rgba(0, 0, 0, 0.64)"
            d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
          />
        </M.Vector>
        <M.NaN_00001>칭찬 작성</M.NaN_00001>
        <HeaderLogout />
        <HeaderMypage />
      </M.Frame47>
      <M.NaN_0002>📅 {currentDate} 📅</M.NaN_0002>
      <M.Group59>
        <M.Rectangle46 />
        <M.NaN_0003 onClick={handleSubmit}>완료</M.NaN_0003>
      </M.Group59>
      <M.NaN_0004>오늘 하루는 어땠나요?</M.NaN_0004>
      <M.Emotion1
        selected={selectedEmotion === 1}
        onClick={() => handleEmotionClick(1)}
      />
      <M.Emotion2
        selected={selectedEmotion === 2}
        onClick={() => handleEmotionClick(2)}
      />
      <M.Emotion3
        selected={selectedEmotion === 3}
        onClick={() => handleEmotionClick(3)}
      />
      <M.Emotion4
        selected={selectedEmotion === 4}
        onClick={() => handleEmotionClick(4)}
      />
      <M.Emotion5
        selected={selectedEmotion === 5}
        onClick={() => handleEmotionClick(5)}
      />
      <M.NaN_0005>오늘 나에게 해주고 싶은 한 마디는 무엇인가요?</M.NaN_0005>
      <M.Group60>
        <M.Rectangle39 />
        <M.NaN_0006>
          <M.ContentInput
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
          />
        </M.NaN_0006>
      </M.Group60>

      <Footer />
    </M.RootWrapperNaN>
  );
}

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
  cursor: pointer;
  const [isClicked, setIsClicked] = useState(false);
  box-shadow: ${(props) =>
    props.selected ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none"};
`;
