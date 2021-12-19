import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import PersonalInfo from "./Pages/PersonalInfo";
import Quiz from "./Pages/Quiz";
import InstructionPage from "./Pages/InstructionPage";

function App() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(0);
  const [difficulty, setDifficulty] = useState("any");
  const [data, setData] = useState([]);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <PersonalInfo
            setName={setName}
            setCategory={setCategory}
            setDifficulty={setDifficulty}
            setData={setData}
            data={data}
          />
        }
      />
      <Route
        path="/quiz"
        element={
          <Quiz
            name={name}
            category={category}
            difficulty={difficulty}
            data={data}
            setData={setData}
          />
        }
      />
      <Route path="/inst" element={<InstructionPage name={name} />} />
    </Routes>
  );
}

export default App;
