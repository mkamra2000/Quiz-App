import React from "react";
import { useNavigate } from "react-router";

function PersonalInfo(props) {
  const navigate = useNavigate();
  // Ex:- Form Validation Trick
  // const personName = document.forms[0]["personName"];
  function handleSubmit(e) {
    e.preventDefault();
    if (document.forms[0]["personName"].value === "")
      alert("Please enter your name");
    else if (document.forms[0]["trivia_category"].value === "any")
      alert("Please choose suitable category for Quiz");
    else if (document.forms[0]["trivia_difficulty"].value === "any")
      alert("Please choose difficulty level of Quiz");
    else {
      navigate("/inst");
    }
    props.setName(document.forms[0]["personName"].value);
    props.setCategory(document.forms[0]["trivia_category"].value);
    props.setDifficulty(document.forms[0]["trivia_difficulty"].value);
    console.log("Clicked");
  }

  return (
    <>
      <div className="overflow-hidden h-screen">
        <div className="mt-3 text-3xl text-center text-blue-darker font-bold font-serif">
          <div className="App">Welcome to Quiz App</div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <form className="flex flex-col justify-center items-center">
            <input
              name="personName"
              id="personName"
              autoComplete="off"
              className="w-80 border-blue-darker text-blue-dark border-2 rounded-md p-2 m-2 placeholder-blue-dark"
              type="text"
              placeholder="Enter your name"
            />
            <select
              name="trivia_category"
              id="trivia_category"
              className="scrollbar scrollbar-thumb-blue-darker scrollbar-track-blue-light scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-blue-lighter w-80 border-blue-darker text-blue-dark border-2 rounded-md m-2 p-2"
            >
              <option defaultValue value="any">
                Select Category
              </option>
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals &amp; Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science &amp; Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">
                Entertainment: Japanese Anime &amp; Manga
              </option>
              <option value="32">
                Entertainment: Cartoon &amp; Animations
              </option>{" "}
            </select>
            <select
              name="trivia_difficulty"
              id="trivia_difficulty"
              className="scrollbar scrollbar-thumb-blue-darker scrollbar-track-blue-light scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-blue-lighter w-80 border-blue-darker text-blue-dark border-2 rounded-md m-2 p-2"
            >
              <option defaultValue value="any">
                Select Difficulty
              </option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <input
              className="w-40 bg-blue-light text-blue-darker p-2 rounded-md hover:bg-blue-darker hover:text-white cursor-pointer"
              onClick={handleSubmit}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
