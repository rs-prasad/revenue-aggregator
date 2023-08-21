import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RevenueAggregator from "./screen/revenueAggregator/RevenueAggregator";
import ContextAPI from "./ContextApI";

function App() {
  return (
    <div className="App">
      <ContextAPI>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RevenueAggregator />} />
          </Routes>
        </BrowserRouter>
      </ContextAPI>
    </div>
  );
}

export default App;
