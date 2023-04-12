import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ProgrammingData from "./components/ProgrammingData/ProgrammingData";
import Question from "./components/Question/Question";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProgrammingData></ProgrammingData>
      <Question></Question>
      <ToastContainer />
    </div>
  );
};

export default App;
