import React from "react";
import { PolygonSelect } from "./pages/PolygonSelect";
import { ElementSelect } from "./pages/ElementSelect";
import { ExaminationProgress } from "./pages/ExaminationProgress";
import { ExaminationProgress2 } from "./pages/ExaminationProgress2";
import { InspectionResults } from "./pages/InspectionResults";
import { FirstPage } from "./pages/FirstPage/FirstPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { SigininPage } from "./pages/Signin/SiginPage";
import { Record } from "./pages/Record/Record";
import { Main } from "./pages/Main/Main";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigininPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/PolygonSelect" element={<PolygonSelect />} />
        <Route path="/ElementSelect" element={<ElementSelect />} />
        <Route path="/ExaminationProgress" element={<ExaminationProgress />} />
        <Route path="/1" element={<ExaminationProgress2 />} />
        <Route path="/2" element={<InspectionResults />} />
        <Route path="/record" element={<Record />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
