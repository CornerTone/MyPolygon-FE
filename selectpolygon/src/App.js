import React from "react";
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

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SiginPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/PolygonSelect" element={<PolygonSelect />} />
        <Route path="/ElementSelect" element={<ElementSelect />} />
        <Route path="/ExaminationProgress" element={<ExaminationProgress />} />
        <Route path="/1" element={<ExaminationProgress2 />} />
        <Route path="/2" element={<InspectionResults />} />
        <Route path="/record" element={<Record />} />
        <Route path="/ComplimentMain" element={<ComplimentMain />} />
        <Route path="/ComplimentDetail" element={<ComplimentDetail />} />
        <Route path="/ComplimentWrite" element={<ComplimentWrite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;