import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NotificationBox from "./NotificationBox";

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
  const [showNext, setShowNext] = useState(false);
  const [attempt, setAttempt] = useState(1);

  async function getData() {
    const axios = require("axios");
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${props.category}&difficulty=${props.difficulty}&type=multiple&encode=url3986`
    );
    return response;
  }
  // Handling Api Request
  useEffect(() => {
    if (name === "" || props.category === 0 || props.difficulty === "any") {
      navigate("/");
    } else {
      if (count < 9) {
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
        }).catch(
          function(error){
            console.error(error);
            navigate("/");
          }
        );
      }
    }
  }, [click, count]);

  function nextClick() {
    if (count <= 9) {
      click ? setClick(false) : setClick(true);
      setCount(count + 1);
      setCheckId("");
      setShowNext(false);
      setAttempt(1);
    }
  }

  function checkForCorrect(opVal, correctId, wrongId) {
    if (opVal === correctAns) {
      if (attempt === 1) setScore(score + 10);
      else if (attempt === 2) setScore(score + 8);
      else if (attempt === 3) setScore(score + 5);
      else if (attempt === 4) setScore(score + 2);
      setCheckId(correctId);
      setShowNext(true);
    } else {
      setCheckId(wrongId);
      setAttempt(attempt+1);
    }
  }

  function handleOptionClick(e) {
    let opId = e.target.id;
    let opVal = "";
    switch (opId) {
      case "op-1":
        opVal = document.getElementById("op1-text").innerText;
        checkForCorrect(opVal, "op1-correct", "op1-wrong");
        break;
      case "op-2":
        opVal = document.getElementById("op2-text").innerText;
        checkForCorrect(opVal, "op2-correct", "op2-wrong");
        break;
      case "op-3":
        opVal = document.getElementById("op3-text").innerText;
        checkForCorrect(opVal, "op3-correct", "op3-wrong");
        break;
      case "op-4":
        opVal = document.getElementById("op4-text").innerText;
        checkForCorrect(opVal, "op4-correct", "op4-wrong");
        break;
    }
  }

  return (
    <div className="overflow-hidden">
      {console.clear()}
      {opts.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-blue-dark border-dotted rounded-full animate-spin"></div>
        </div>
      ) : count > 9 ? (
        
        <NotificationBox
          name={name}
          header={"Are you Sure?"}
          desc={"Do you want to solve more questions?"}
          setCount={setCount}
          setScore={setScore}
        />
      ) : (
        <>
        {console.clear()}
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
                  {checkId === "op1-correct" ? (
                    <Tick />
                  ) : checkId === "op1-wrong" ? (
                    <WrongTick />
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  id="op-2"
                  className="tracking-wider text-xl border-b-2 border-blue-darker p-4 cursor-pointer text-blue-dark hover:text-blue-darker hover:bg-blue-lighter"
                  onClick={handleOptionClick}
                >
                  <span>(B)&nbsp;&nbsp;</span>
                  <span id="op2-text">{opts[1]} </span>
                  {checkId === "op2-correct" ? (
                    <Tick />
                  ) : checkId === "op2-wrong" ? (
                    <WrongTick />
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  id="op-3"
                  className="tracking-wider text-xl border-b-2 border-blue-darker p-4 cursor-pointer text-blue-dark hover:text-blue-darker hover:bg-blue-lighter"
                  onClick={handleOptionClick}
                >
                  <span>(C)&nbsp;&nbsp;</span>
                  <span id="op3-text">{opts[2]} </span>
                  {checkId === "op3-correct" ? (
                    <Tick />
                  ) : checkId === "op3-wrong" ? (
                    <WrongTick />
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  id="op-4"
                  className="tracking-wider text-xl p-4 cursor-pointer text-blue-dark hover:text-blue-darker hover:bg-blue-lighter"
                  onClick={handleOptionClick}
                >
                  <span>(D)&nbsp;&nbsp;</span>
                  <span id="op4-text">{opts[3]} </span>
                  {checkId === "op4-correct" ? (
                    <Tick />
                  ) : checkId === "op4-wrong" ? (
                    <WrongTick />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            {showNext ? (
              <div className="flex justify-end m-4">
                <button
                  onClick={nextClick}
                  className="w-40 bg-blue-light text-blue-darker p-2 rounded-md hover:bg-blue-darker hover:text-white cursor-pointer flex justify-center items-center text-lg"
                >
                  Next
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </div>
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
function WrongTick() {
  return (
    <span
      style={{
        color: "#ee0000",
        fontSize: "25px",
        fontWeight: "bolder",
      }}
    >
      &#10060;
    </span>
  );
}

export default Quiz;
