import React, { useState, useEffect } from "react";
import * as E from "./ExaminationProgressStyle";
import Cookies from "js-cookie";
import axios from "axios";
import { goBack } from "../../components/backNavigation";

// 서버로 테스트 결과 전달 
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
  // 예를 선택한 버튼 저장 
  const [selectedYesButtonIds, setSelectedYesButtonIds] = useState({});
  // 아니요를 선택한 버튼 저장 
  const [selectedNoButtonIds, setSelectedNoButtonIds] = useState({});
  // 질문 데이터 저장 
  const [questionsData, setQuestionsData] = useState([]);
  // 현재 질문하고 있는 질문 정보 저장 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // 응답 결과 저장 
  const [results, setResults] = useState([]);

  // 서버로부터 질문 내용 전달받음 
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // 다음 질문으로 넘어가면 클릭되었던 것을 해제하기 위해 추가
  useEffect(() => {
    setSelectedYesButtonIds({});
    setSelectedNoButtonIds({});
  }, [currentQuestionIndex]); 

  // 예 버튼을 눌렀다면 매개변수로 전달받은 버튼 예 선택됨으로 처리, 아니오 해제 처리 
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

    // 현재 질문의 score를 1 증가
    if (questionIndex !== -1) {
      const updatedQuestionsData = [...questionsData];
      if (isNaN(updatedQuestionsData[questionIndex].score)) {
        // 초기화
        updatedQuestionsData[questionIndex].score = 0; 
      }
      updatedQuestionsData[questionIndex].score += 1;

      console.log(
        `Question ID: ${currentQuestionId}, Score: ${updatedQuestionsData[questionIndex].score}`
      );

      setQuestionsData(updatedQuestionsData);
    }
    // 현재 질문에 대한 결과를 result에 추가
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

  // 예 버튼과 반대로 동작 
  const handleNoButtonClick = (buttonId) => {
    setSelectedYesButtonIds((prevIds) => ({ ...prevIds, [buttonId]: false }));
    setSelectedNoButtonIds((prevIds) => ({ ...prevIds, [buttonId]: true }));
  };

  const handleSubmitButtonClick = async () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      try {
        // 서버로 결과 전달 
        await sendResultsToBackend(results);
        // 메인 페이지로 이동 
        window.location.href = "/main";
      } catch (error) {
        console.error("Error while sending results:", error);
        alert("결과를 전송하는 중에 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <E.RootWrapperNaN>
      <E.Group24>
        <E.Rectangle34 />
        <E.Typography>
          <E.Typography_0001>다각형 검사</E.Typography_0001>
        </E.Typography>
      </E.Group24>
      <E.Typography_0002>
        <E.Typography_0003>
          <E.Typography_0004>
            *만족도를 정확히 측정할 수 있도록 솔직하게 답변해 주세요*
          </E.Typography_0004>
        </E.Typography_0003>
      </E.Typography_0002>

      <E.Group33>
        {questionsData.length > 0 &&
          currentQuestionIndex < questionsData.length && (
            <E.QuestionWrapper>
              <h3>{questionsData[currentQuestionIndex].element_name}</h3>
              <ul>
                <E.Line14 />
                {questionsData[currentQuestionIndex].question_strings.map(
                  (question, qIndex) => (
                    <li key={qIndex}>
                      {`${qIndex + 1}번째 질문: ${question}`}
                      <E.ButtonWrapper>
                        {/* 버튼 고유 id 부여 */}
                        <E.YesButton
                          selected={selectedYesButtonIds[`${qIndex + 1}`]}
                          onClick={() =>
                            handleYesButtonClick(`${qIndex + 1}`)
                          }
                        >
                          예
                        </E.YesButton>
                         {/* 버튼 고유 id 부여 */}
                        <E.NoButton
                          selected={selectedNoButtonIds[`${qIndex + 1}`]}
                          onClick={() =>
                            handleNoButtonClick(`${qIndex + 1}`)
                          }
                        >
                          아니오
                        </E.NoButton>
                      </E.ButtonWrapper>
                    </li>
                  )
                )}
              </ul>
              <E.SubmitButton onClick={handleSubmitButtonClick}>다음</E.SubmitButton>
            </E.QuestionWrapper>
          )}
      </E.Group33>

      <E.Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
        <path
          fill="rgba(0, 0, 0, 0.64)"
          d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
        />
      </E.Vector>
    </E.RootWrapperNaN>
  );
}
