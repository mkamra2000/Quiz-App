import React,{useEffect} from "react";
import { useNavigate } from "react-router";

function InstructionPage(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.name === "") {
      navigate("/");
    }
  });
  function continueClick() {
    navigate("/quiz");
  }
  return (
    <div>
      <div className="mt-3 text-3xl text-center text-blue-dark font-bold font-serif">
        <div className="tracking-wide">Welcome {props.name}</div>
      </div>
      <div className="m-8">
        <div className="text-2xl text-blue-dark font-bold font-serif">
          Important Instructions:-
        </div>
        <div>
          <span className="text-2xl text-blue-dark">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            All questions are compulsory.
          </span>
        </div>
        <div>
          <span className="text-2xl text-blue-dark">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            There are 10 questions in this Quiz.
          </span>
        </div>
        <div>
          <span className="text-2xl text-blue-dark">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            Questions will be shown like this:
          </span>
          <img
            src="/Images/Sample Question.png"
            alt="Sample Question"
            width="800"
          ></img>
          <span className="text-2xl text-blue-dark pl-4">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            Your name will be shown at the top of the page.
          </span>
          <br />
          <span className="text-2xl text-blue-dark pl-4">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            Your score will be shown on the right-top-most side.
          </span>
        </div>
        <div>
          <span className="text-2xl text-blue-dark">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            When you click on any option then:
          </span>
          <br />
          <span className="text-2xl text-blue-dark pl-4">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            If the <b>red mark</b> is shown right to the option then you choose
            the
            <b> wrong option</b>.
          </span>
          <img
            src="/Images/Sample Question Wrong Ans.png"
            alt="Sample Question Wrong Ans"
            width="800"
          ></img>
          <span className="text-2xl text-blue-dark pl-4">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            If the <b>green mark</b> is shown right to the option then you
            choose the<b> correct option</b>.
          </span>
          <br />
          <span className="text-2xl text-blue-dark pl-4">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            And also button for next question will be shown on the
            right-bottom-most side.
          </span>
          <img
            src="/Images/Sample Question Right Ans.png"
            alt="Sample Question Right Ans"
            width="800"
          ></img>
          <br />
          <span className="text-2xl text-blue-dark pl-4">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            If you choose the correct option:-
          </span>
          <br />
          <span className="text-2xl text-blue-dark pl-8">&#8226;</span>
          <span className="text-xl text-blue-dark p-4">
            On the first attempt then you will get <u>10 marks</u>.
          </span>
          <br />
          <span className="text-2xl text-blue-dark pl-8">&#8226;</span>
          <span className="text-xl text-blue-dark p-4">
            On the second attempt then you will get <u>8 marks</u>.
          </span>
          <br />
          <span className="text-2xl text-blue-dark pl-8">&#8226;</span>
          <span className="text-xl text-blue-dark p-4">
            On the third attempt then you will get <u>5 marks</u>.
          </span>
          <br />
          <span className="text-2xl text-blue-dark pl-8">&#8226;</span>
          <span className="text-xl text-blue-dark p-4">
            On the fourth attempt then you will get <u>2 marks</u>.
          </span>
        </div>
        <div>
          <span className="text-2xl text-blue-dark">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            At the end of the quiz you will be shown a prompt like this:-
          </span>
          <img src="/Images/Prompt.png" alt="Prompt" width="300"></img>
          <span className="text-2xl text-blue-dark pl-4">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            If you click on Confirm button, you can solve more questions.
          </span>
          <br />
          <span className="text-2xl text-blue-dark pl-4">&#8226;</span>
          <span className="text-xl text-blue-dark p-2">
            If you click on Cancel button, you can start it all over again.
          </span>
        </div>
      </div>
      <div className="flex justify-end m-4">
        <button
          onClick={continueClick}
          className="mr-5 w-40 bg-blue-light text-blue-darker p-2 rounded-md hover:bg-blue-darker hover:text-white cursor-pointer flex justify-center items-center text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default InstructionPage;
