import React from "react";
import "./App.css";
import { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PolygonSelect } from "./pages/Select/PolygonSelect";
import { ElementSelect } from "./pages/Select/ElementSelect";
import { ExaminationProgress } from "./pages/Examination/ExaminationProgress";
import { ExaminationProgress2 } from "./pages/Examination/ExaminationProgress2";
import { InspectionResults } from "./pages/Examination/InspectionResults";
import { FirstPage } from "./pages/FirstPage/FirstPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { SiginPage } from "./pages/Signin/SiginPage";
import { Record } from "./pages/Record/Record";
import { Main } from "./pages/Main/Main";
import { ComplimentMain } from "./pages/Compliment/ComplimentMain";
import { ComplimentWrite } from "./pages/Compliment/ComplimentWrite";
import { ComplimentDetail } from "./pages/Compliment/ComplimentDetail";

import DiaryDetail from "./pages/Diary/Detail";
import DiaryEdit from "./pages/Diary/Edit";
import DiaryHome from "./pages/Diary/Home";
import DiaryNew from "./pages/Diary/New";

import { Community } from "./pages/Community/Community";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;
        dispatch({ type: "INIT", data: diaryList });
      }
    }
  }, []);

  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  };

  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: { id: targetId, date: new Date(date).getTime(), content, emotion },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signin" element={<SiginPage />} />
              <Route path="/main" element={<Main />} />
              <Route path="/PolygonSelect" element={<PolygonSelect />} />
              <Route path="/ElementSelect" element={<ElementSelect />} />
              <Route
                path="/ExaminationProgress"
                element={<ExaminationProgress />}
              />
              <Route path="/2" element={<ExaminationProgress2 />} />
              <Route path="/3" element={<InspectionResults />} />
              <Route path="/record" element={<Record />} />
              <Route path="/ComplimentMain" element={<ComplimentMain />} />
              <Route path="/ComplimentDetail" element={<ComplimentDetail />} />
              <Route path="/ComplimentWrite" element={<ComplimentWrite />} />
              <Route path="/diaryhome" element={<DiaryHome />} />
              <Route path="/diarynew" element={<DiaryNew />} />
              <Route path="/diaryedit/:id" element={<DiaryEdit />} />
              <Route path="/diarydetail/:id" element={<DiaryDetail />} />

              <Route path="/community" element={<Community />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
