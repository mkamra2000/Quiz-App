import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Quiz(props) {
  const navigate = useNavigate();
  let name = props.name;
  name = name.charAt(0).toUpperCase() + name.slice(1);
  const [ques, setQues] = useState("");
  const [opts, setOpts] = useState([]);
  const [click, setClick] = useState(true);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState("");
  const [checkId, setCheckId] = useState("");

  async function getData() {
    const axios = require("axios");
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${18}&difficulty=${"medium"}&type=${"multiple"}&encode=url3986`
    );
    return response;
  }
  // Handling Api Request
  useEffect(() => {
    if (
      name === "" ||
      props.category === "any" ||
      props.difficulty === "any" ||
      props.type === "any"
    ) {
      navigate("/");
    } else {
      getData().then(function (response) {
        let myData = response.data.results;
        let ic = myData[count].incorrect_answers;
        let options = [];
        let question = "";
        ic.forEach((op) => {
          op = decodeURIComponent(op);
          options.push(op);
        });
        setCorrectAns(decodeURIComponent(myData[count].correct_answer));
        options.push(decodeURIComponent(myData[count].correct_answer));
        shuffleArray(options);
        setOpts(options);
        question = decodeURIComponent(myData[count].question);
        setQues(question);
      });
    }
  }, [click, count]);

  function nextClick() {
    if (count < 9) {
      click ? setClick(false) : setClick(true);
      setCount(count + 1);
      setCheckId("");
    } else {
      console.log("Thanks");
    }
  }

  function checkForCorrect(opVal, correctId) {
    if (opVal === correctAns) {
      console.log("Correct Answer");
      setScore(score + 10);
      setCheckId(correctId);
    }
  }

  function handleOptionClick(e) {
    let opId = e.target.id;
    let opVal = "";
    switch (opId) {
      case "op-1":
        opVal = document.getElementById("op1-text").innerText;
        checkForCorrect(opVal, "op1-correct");
        break;
      case "op-2":
        opVal = document.getElementById("op2-text").innerText;
        checkForCorrect(opVal, "op2-correct");
        break;
      case "op-3":
        opVal = document.getElementById("op3-text").innerText;
        checkForCorrect(opVal, "op3-correct");
        break;
      case "op-4":
        opVal = document.getElementById("op4-text").innerText;
        checkForCorrect(opVal, "op4-correct");
        break;
    }
  }

  return (
    <>
      {opts.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-blue-dark border-dotted rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="mt-3 text-3xl text-center text-blue-darker font-bold font-serif">
            <div className="tracking-wide ">Welcome {name}</div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between mt-4 mx-4">
              <div className="text-center text-lg w-40 bg-blue-light text-blue-darker p-1 rounded-md hover:bg-blue-darker hover:text-white">
                Question - {count + 1}
              </div>
              <div className="text-center text-lg w-40 bg-blue-light text-blue-darker p-1 rounded-md hover:bg-blue-darker hover:text-white">
                Score: {score}
              </div>
            </div>
            <div className="mt-6 mx-4 text-justify rounded-xl border-2 border-blue-darker">
              <div className="tracking-wide text-2xl border-b-2 border-blue-darker p-4 text-blue-dark">
                {ques}
              </div>
              <div className="flex flex-col">
                <div
                  id="op-1"
                  className="tracking-wider text-xl border-b-2 border-blue-darker p-4 cursor-pointer text-blue-dark hover:text-blue-darker hover:bg-blue-lighter"
                  onClick={handleOptionClick}
                >
                  <span>(A)&nbsp;&nbsp;</span>
                  <span id="op1-text">{opts[0]} </span>
                  {checkId === "op1-correct" ? <Tick /> : <></>}
                </div>
                <div
                  id="op-2"
                  className="tracking-wider text-xl border-b-2 border-blue-darker p-4 cursor-pointer text-blue-dark hover:text-blue-darker hover:bg-blue-lighter"
                  onClick={handleOptionClick}
                >
                  <span>(B)&nbsp;&nbsp;</span>
                  <span id="op2-text">{opts[1]} </span>
                  {checkId === "op2-correct" ? <Tick /> : <></>}
                </div>
                <div
                  id="op-3"
                  className="tracking-wider text-xl border-b-2 border-blue-darker p-4 cursor-pointer text-blue-dark hover:text-blue-darker hover:bg-blue-lighter"
                  onClick={handleOptionClick}
                >
                  <span>(C)&nbsp;&nbsp;</span>
                  <span id="op3-text">{opts[2]} </span>
                  {checkId === "op3-correct" ? <Tick /> : <></>}
                </div>
                <div
                  id="op-4"
                  className="tracking-wider text-xl p-4 cursor-pointer text-blue-dark hover:text-blue-darker hover:bg-blue-lighter"
                  onClick={handleOptionClick}
                >
                  <span>(D)&nbsp;&nbsp;</span>
                  <span id="op4-text">{opts[3]} </span>
                  {checkId === "op4-correct" ? <Tick /> : <></>}
                </div>
              </div>
            </div>
            <div className="flex justify-end m-4">
              <button
                onClick={nextClick}
                className="w-40 bg-blue-light text-blue-darker p-2 rounded-md hover:bg-blue-darker hover:text-white cursor-pointer flex justify-center items-center text-lg"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Tick() {
  return (
    <span
      style={{
        color: "#35d244",
        fontSize: "30px",
        fontWeight: "bolder",
      }}
    >
      &#10003;
    </span>
  );
}

export default Quiz;
