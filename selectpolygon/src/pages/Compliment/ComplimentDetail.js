import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { goBack } from "../../components/backNavigation";
import { useParams } from "react-router-dom"; // custom hooks
import axios from "axios";

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
    default:
      // 기본값 설정
      imageUrl = "/assets/default.png";
      break;
  }
  return imageUrl;
};

const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/api/compliment/delete/${id}`,
  {
    withCredentials: true,
}
)
    .then(response => {
      console.log(response.data);
      window.location.href = "/compliment";

    })
    .catch(error => {
      console.error("Error:", error);
      // 삭제 중 오류가 발생한 경우에 대한 처리
    });
};


export function ComplimentDetail() {
  const { id } = useParams(); // pathVariable = id (경로의 변수 담아서 전달)
  console.log(id);
  const [complimentData, setComplimentData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/api/compliment/read/${id}`,
    {
      withCredentials: true,
  })
      .then(response => {
        console.log(response.data)
        setComplimentData(response.data.message);
      })
      .catch(error => {
        console.error("Error fetching compliment data:", error);
      });
  }, [id]);

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
      <NaN_0003>{formatDate(complimentData.date)}</NaN_0003>
      <NaN_0004>{complimentData.time}</NaN_0004>
      <Line3 />
      <EmotionImage emotion={complimentData.emotion} />
      <NaN_0005>오늘의 기분</NaN_0005>
      <Rectangle47 />
      <NaN_0006>
            <p>{complimentData.content}</p>
          </NaN_0006>
          <IconEdit onClick={() => handleDelete(complimentData.id)}>
            삭제하기
  
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

const EmotionImage = styled.div`
  width: 80px;
  height: 81px;
  background-image: url(${props => getEmotionImageUrl(props.emotion)});  background-repeat: no-repeat;
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
  left: 220px;
  top: 73px;
  cursor: pointer;

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
