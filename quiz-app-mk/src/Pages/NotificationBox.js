import React from "react";

function NotificationBox() {
  return (
      <>
      {/* <div className="m-2 text-3xl text-center text-blue-darker font-bold font-serif">Quiz App</div> */}
    <div className="bg-transparent h-screen flex justify-center items-center">
      <div className="border-2 border-blue-darker bg-white rounded-md">
        <div className="text-blue-darker p-4" id="notificationHeader">
          Are you Sure?
        </div>
        <div className="text-blue-darker pl-4 pr-4 pb-4" id="notificationDesc">
          Do you want to delete this item permanently?
        </div>
        <div className="flex justify-end p-2">
          <button className="w-30 m-2 bg-white text-blue-darker p-2 rounded-md hover:bg-blue-lighter hover:text-blue-dark cursor-pointer flex justify-center items-center text-lg border-blue-darker border-2">
            Cancel
          </button>
          <button className="w-30 m-2 bg-blue-darker text-white p-2 rounded-md hover:bg-blue-light hover:text-blue-darker cursor-pointer flex justify-center items-center text-lg">
            Confirm
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default NotificationBox;
