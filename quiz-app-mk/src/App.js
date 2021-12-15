import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import PersonalInfo from "./Pages/PersonalInfo";
import NotificationBox from "./Pages/NotificationBox";
import Quiz from "./Pages/Quiz";

function App() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [type, setType] = useState("any");
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
            setType={setType}
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
            type={type}
            data={data}
            setData={setData}
          />
        }
      />
      <Route path="/box" element={<NotificationBox />} />
    </Routes>
  );
}

export default App;
