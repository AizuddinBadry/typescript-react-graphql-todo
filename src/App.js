import { Routes, Route } from "react-router-dom";

import { GlobalStateContainer } from './provider/GlobalStateContainer';

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="grid place-items-center h-screen">
      <GlobalStateContainer.Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </GlobalStateContainer.Provider>
    </div>
  );
};

export default App;
