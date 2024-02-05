import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Cookies from "js-cookie";
import axios from "axios";
import { goBack } from "../../components/backNavigation";

// 백엔드로 결과를 전송하는 함수
const sendResultsToBackend = async (results) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/polygon/create",
      results,
      {
        withCredentials: true,
      }
    );
    console.log("Results sent to backend:", response.data);
    Cookies.set("polygon_id", response.data.polygon_id, { path: "/" });
  } catch (error) {
    console.error("Error sending results to backend:", error);
  }
};

export function ExaminationProgress() {
  const [selectedYesButtonIds, setSelectedYesButtonIds] = useState({});
  const [selectedNoButtonIds, setSelectedNoButtonIds] = useState({});

  const [questionsData, setQuestionsData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/polygon/questions",
          {
            withCredentials: true,
          }
        );
        const questionElements = response.data.elements;
        setQuestionsData(questionElements);
        console.log(questionElements); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setSelectedYesButtonIds({});
    setSelectedNoButtonIds({});
  }, [currentQuestionIndex]); // 다음 질문으로 넘어가면 클릭되었던 것을 해제하기 위해 추가함 

  const handleYesButtonClick = (buttonId) => {
    console.log(buttonId);
    setSelectedYesButtonIds((prevIds) => ({ ...prevIds, [buttonId]: true }));
    setSelectedNoButtonIds((prevIds) => ({ ...prevIds, [buttonId]: false }));
  

  // 현재 질문의 id 값을 가져옴
  const currentQuestionId = questionsData[currentQuestionIndex].id;

    // 현재 질문의 index를 찾음
    const questionIndex = questionsData.findIndex(
      (question) => question.id === currentQuestionId
    );

    // 현재 질문의 score를 1 증가시킴
    if (questionIndex !== -1) {
      const updatedQuestionsData = [...questionsData];
      if (isNaN(updatedQuestionsData[questionIndex].score)) {
        updatedQuestionsData[questionIndex].score = 0; // 초기화
      }
      updatedQuestionsData[questionIndex].score += 1;

      // 콘솔에 id와 score의 변화를 출력
      console.log(
        `Question ID: ${currentQuestionId}, Score: ${updatedQuestionsData[questionIndex].score}`
      );

      setQuestionsData(updatedQuestionsData);
    }
    // 현재 질문에 대한 결과를 결과 배열에 추가
    if (questionIndex !== -1) {
      const updatedResults = [...results];
      const existingResultIndex = updatedResults.findIndex(
        (result) => result.id === currentQuestionId
      );
      if (existingResultIndex !== -1) {
        updatedResults[existingResultIndex].score += 1;
      } else {
        updatedResults.push({ id: currentQuestionId, score: 1 });
      }
      setResults(updatedResults);
    }
  };

  const handleNoButtonClick = (buttonId) => {
    setSelectedYesButtonIds((prevIds) => ({ ...prevIds, [buttonId]: false }));
    setSelectedNoButtonIds((prevIds) => ({ ...prevIds, [buttonId]: true }));
  };

  const SubmitButton = styled.button`
    background-color: #85bbe2;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative; 
    margin-top: 20px;

    &:hover {
      background-color: #5a95c5; /* hover 시의 배경색 */
    }
    &:active {
      background-color: #213555;
    }
  `;

  const handleSubmitButtonClick = async () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      try {
        console.log(results);
        await sendResultsToBackend(results);

        window.location.href = "/main";
      } catch (error) {
        console.error("Error while sending results:", error);
        alert("결과를 전송하는 중에 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };
  return (
    <RootWrapperNaN>
      <Group24>
        <Rectangle34 />
        <Typography>
          <Typography_0001>다각형 검사</Typography_0001>
        </Typography>
      </Group24>
      <Typography_0002>
        <Typography_0003>
          <Typography_0004>
            *만족도를 정확히 측정할 수 있도록 솔직하게 답변해 주세요*
          </Typography_0004>
        </Typography_0003>
      </Typography_0002>

          <Group33>
      {questionsData.length > 0 &&
        currentQuestionIndex < questionsData.length && (
          <QuestionWrapper>
            <h3>{questionsData[currentQuestionIndex].element_name}</h3>
            <ul>
              <Line14 />
              {questionsData[currentQuestionIndex].question_strings.map(
                (question, qIndex) => (
                  <li key={qIndex}>
                    {`${qIndex + 1}번째 질문: ${question}`}
                    <ButtonWrapper>
                      <YesButton
                        selected={selectedYesButtonIds[`${qIndex + 1}`]}
                        onClick={() =>
                          handleYesButtonClick(`${qIndex + 1}`)
                        }
                      >
                        예
                      </YesButton>
                      <NoButton
                        selected={selectedNoButtonIds[`${qIndex + 1}`]}
                        onClick={() =>
                          handleNoButtonClick(`${qIndex + 1}`)
                        }
                      >
                        아니오
                      </NoButton>
                    </ButtonWrapper>
                  </li>
                )
              )}
            </ul>
            <SubmitButton onClick={handleSubmitButtonClick}>
              다음
            </SubmitButton>
          </QuestionWrapper>
        )}
    </Group33>

      <Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
        <path
          fill="rgba(0, 0, 0, 0.64)"
          d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
        />
      </Vector>
    </RootWrapperNaN>
  );
}
const Line14 = styled.div`
  width: 360px;
  height: 0px;
  border-top: dashed 1px rgb(185, 185, 185);
  position: absolute;
  right: 15px;
  top: 50px;
`;
const Line15 = styled.div`
  width: 360px;
  height: 0px;
  border-top: dashed 1px rgb(185, 185, 185);
  position: absolute;
  right: 15px;
  top: 100%; /* 이 부분을 수정하여 SubmitButton 하단에 위치하도록 조절합니다. */
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 25px;

  /* hover 시와 선택된 상태의 스타일 변경 */
  &:hover,
  &[data-selected="true"] {
    color: EBBA71;
    cursor: pointer;
  }
`;

const YesButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  background-color: ${(props) => (props.selected ? "#EBBA71" : "#d8c4b6")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.selected ? "#EBBA71" : "#EBBA71"};
    color: #fff;
  }
`;

// 아니오 버튼 스타일
const NoButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  background-color: ${(props) => (props.selected ? "#EBBA71" : "#d8c4b6")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.selected ? "#EBBA71" : "#EBBA71"};
    color: #fff;
  }
`;




const QuestionWrapper = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const RootWrapperNaN = styled.div`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
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

const NaN_0002 = styled.span`
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

const NaN_0003 = styled.span`
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

const NaN_0004 = styled.span`
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

const NaN_0005 = styled.span`
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

const NaN_0006 = styled.span`
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

const Frame50_0001 = styled.div`
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

const IconsBasicUser = styled.img`
  width: 19px;
  height: 18px;
  object-fit: cover;
  position: absolute;
  left: 323px;
  top: 19px;
`;

const NaN_0007 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 103px;
  position: absolute;
  left: 130px;
  top: 16px;
`;

//다각형 검사 박스
const Group24 = styled.div`
  width: 401px;
  height: 90px;
  position: absolute;
  left: -21px;
  top: 55px;
`;

const Rectangle34 = styled.div`
  width: 401px;
  height: 90px;
  background: rgb(245, 239, 231);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  filter: blur(4px);
`;

const Typography = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  box-sizing: border-box;
  position: absolute;
  left: 148px;
  top: 31px;
  width: 121px;
`;

const Typography_0001 = styled.span`
  color: rgb(51, 51, 51);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: 900;
  text-align: center;
  width: 113px;
`;

const Typography_0002 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 0px;
  top: 145px;
`;

const Typography_0003 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  box-sizing: border-box;
`;

const Typography_0004 = styled.span`
  color: rgb(51, 51, 51);
  text-overflow: ellipsis;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  text-align: center;
`;

//검사지 페이지
const Group33 = styled.div`
  width: 401px;
  height: 349px;
  position: absolute;
  left: -25px;
  top: 190px;
`;

const Rectangle40 = styled.div`
  width: 401px;
  height: 312px;
  background: rgb(244, 244, 244);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const NaN_0008 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  text-align: center;
  width: 189px;
  min-height: 78px;
  position: absolute;
  left: 113px;
  top: 0px;
  height: 78px;
`;

const Group26 = styled.div`
  width: 283px;
  height: 95px;
  position: absolute;
  left: 63px;
  top: 190px;
`;

const Rectangle29 = styled.div`
  width: 283px;
  height: 95px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(245, 239, 231);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  filter: blur(4px);
`;

const NaN_0009 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 242px;
  position: absolute;
  left: 29px;
  top: 34px;
`;

const Group34 = styled.div`
  width: 283px;
  height: 95px;
  position: absolute;
  left: 65px;
  top: 72px;
`;

const Rectangle41 = styled.div`
  width: 283px;
  height: 95px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  filter: blur(4px);
`;

const NaN_0010 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: center;
  width: 231px;
  position: absolute;
  left: 27px;
  top: 41px;
`;

const Group57 = styled.div`
  width: 107px;
  height: 23px;
  position: absolute;
  left: 151px;
  top: 326px;
`;

const Group25 = styled.div`
  width: 107px;
  height: 23px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const IconsBasicArrowLeft = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const IconsBasicArrowRight4 = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  left: 87px;
  top: 0px;
`;

const _112 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  text-align: center;
  width: 43px;
  min-height: 23px;
  position: absolute;
  left: 32px;
  top: 0px;
  height: 23px;
`;

const Vector = styled.svg`
  width: 20px;
  height: 15px;
  position: absolute;
  left: 16px;
  top: 22px;
  right: 324px;
  bottom: 763px;
`;
