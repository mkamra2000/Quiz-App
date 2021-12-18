import React from "react";
import { useNavigate } from "react-router";

function NotificationBox(props) {
  const navigate = useNavigate();
  function confirmClick() {
    props.setCount(0);
    props.setScore(0);
  }
  function cancelClick() {
    navigate("/");
  }

  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="mt-3 text-3xl text-center text-blue-darker font-bold font-serif">
          <div className="tracking-wide">Welcome {props.name}</div>
        </div>
        <div className="h-screen flex justify-center items-center">
          <div className="border-2 border-blue-darker bg-white rounded-md">
            <div
              className="text-xl text-blue-darker p-4"
              id="notificationHeader"
            >
              {props.header === "" ? "Are you Sure?" : props.header}
            </div>
            <div
              className="text-xl text-blue-darker pl-4 pr-4 pb-4"
              id="notificationDesc"
            >
              {props.desc === ""
                ? "Do you want to delete this item permanently?"
                : props.desc}
            </div>
            <div className="flex justify-end p-2">
              <button
                className="w-30 m-2 bg-white text-blue-darker p-2 rounded-md hover:bg-blue-lighter hover:text-blue-dark cursor-pointer flex justify-center items-center text-lg border-blue-darker border-2"
                onClick={cancelClick}
              >
                Cancel
              </button>
              <button
                className="w-30 m-2 bg-blue-darker text-white p-2 rounded-md hover:bg-blue-light hover:text-blue-darker cursor-pointer flex justify-center items-center text-lg"
                onClick={confirmClick}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationBox;
