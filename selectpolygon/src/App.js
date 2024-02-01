import React from "react";
import { PolygonSelect } from "./component/PolygonSelect";
import { ElementSelect } from "./component/ElementSelect";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/PolygonSelect" element={<PolygonSelect />} />
        <Route path="/ElementSelect" element={<ElementSelect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
