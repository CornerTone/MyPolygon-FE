import React from "react";
import { PolygonSelect } from "./pages/PolygonSelect";
import { ElementSelect } from "./pages/ElementSelect";
import { ExaminationProgress } from "./pages/ExaminationProgress";
import { ExaminationProgress2 } from "./pages/ExaminationProgress2";
import { InspectionResults } from "./pages/InspectionResults";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/PolygonSelect" element={<PolygonSelect />} />
        <Route path="/ElementSelect" element={<ElementSelect />} />
        <Route path="/ExaminationProgress" element={<ExaminationProgress />} />
        <Route path="/1" element={<ExaminationProgress2 />} />
        <Route path="/2" element={<InspectionResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
