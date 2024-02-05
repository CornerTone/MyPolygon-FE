import React, { useState, useEffect } from "react";
import * as N from "./ComplimentMainStyle";
import { Link } from "react-router-dom";
import axios from "axios";
import { Footer } from "../../components/Footer";
import { HeaderLogout } from "../../components/HeaderLogout";
import { HeaderMypage } from "../../components/HeaderMypage";
import { goBack } from "../../components/backNavigation";
import styled from "styled-components";

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
    <N.RootWrapperNaN>
      <N.Frame48>
        <N.Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
          <path
            fill="rgba(0, 0, 0, 0.64)"
            d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
          />
        </N.Vector>
        <N.NaN_0002>칭찬 일기</N.NaN_0002>
        <HeaderLogout />
        <HeaderMypage />
      </N.Frame48>

      {compliments.map((compliment, index) => (
        <Link key={compliment.id} to={`/compliment/${compliment.id}`}>
          <N.CustomDiv key={compliment.id} index={index}>
            <N.Rectangle34 />
            <N.NaN_0003>{formatDate(compliment.date)}</N.NaN_0003>

            <N.Group38>
              <N.Rectangle31 />
              <N._31_0001>{compliment.emotion}</N._31_0001>
              <N.Sun_0001>점</N.Sun_0001>
              <N._20231_0001>{compliment.content}</N._20231_0001>
              <EmotionImage emotion={compliment.emotion} />{" "}
            </N.Group38>
          </N.CustomDiv>
        </Link>
      ))}
      <N.Ellipse9 />
      <Link to="/ComplimentWrite">
        <N.IconAdd>
          <N.Vector_0001
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt="image of Vector"
          />
          <N.Vector_0002 xmlns="http://www.w3.org/2000/svg">
            <path
              fill="white"
              d="M20.8955 13.3333L11.9403 13.3333L11.9403 23.3333L8.95522 23.3333L8.95522 13.3333L0 13.3333L0 10L8.95522 10L8.95522 0L11.9403 0L11.9403 10L20.8955 10L20.8955 13.3333Z"
            />
          </N.Vector_0002>
        </N.IconAdd>
      </Link>

      <Footer />
    </N.RootWrapperNaN>
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
