import React, { useState, useEffect } from "react";
import axios from "axios";

export function ExaminationProgress() {
  const [questionsData, setQuestionsData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [elementScores, setElementScores] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/polygon/questions", {
          withCredentials: true
        });
        setQuestionsData(response.data.elements);
        initializeElementScores(response.data.elements);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  const initializeElementScores = (elements) => {
    const initialScores = {};
    elements.forEach(element => {
      initialScores[element.id] = 0;
    });
    setElementScores(initialScores);
  };

  const handleYesButtonClick = () => {
    increaseScore();
    moveToNextQuestion();
  };

  const handleNoButtonClick = () => {
    moveToNextQuestion();
  };

  const increaseScore = () => {
    const currentElementId = questionsData[currentQuestionIndex].id;
    setElementScores(prevScores => ({
      ...prevScores,
      [currentElementId]: prevScores[currentElementId] + 1
    }));
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      sendScoresToServer();
    }
  };

  const sendScoresToServer = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/polygon/scores", {
        scores: Object.entries(elementScores).map(([id, score]) => ({ id, score }))
      });
      console.log("Scores sent to server:", response.data);
    } catch (error) {
      console.error("Error sending scores to server:", error);
    }
  };

  return (
    <div>
      {currentQuestionIndex < questionsData.length && (
        <>
          <div>{questionsData[currentQuestionIndex].question_strings}</div>
          <button onClick={handleYesButtonClick}>Yes</button>
          <button onClick={handleNoButtonClick}>No</button>
        </>
      )}
      {currentQuestionIndex === questionsData.length && (
        <div>Thank you for answering all questions!</div>
      )}
    </div>
  );
}
