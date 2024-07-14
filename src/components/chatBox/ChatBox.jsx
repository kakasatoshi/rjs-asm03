import React from "react";
import "./ChatBox.css";

const ChatBox = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="card mt-5">
          <div className=" adiv text-dank fw-bold">
            
            <span className="m-2">Customer Support</span>
            <button className={`btn justify-content-center`}>Lets Chat App</button>
            {/* <hr /> */}
          </div>
          
          <div className="d-flex flex-row p-3">
            <img
              src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png"
              width="30"
              height="30"
            />
            <div className="chat ml-2 p-3">
              Hello and thank you for visiting birdlymind. Please click the
              video above
            </div>
          </div>
          <div className="d-flex flex-row p-3">
            <div className="bg-white mr-2 p-3">
              <span className="text-muted">
                Hello and thank you for visiting birdlymind.
              </span>
            </div>
            <img
              src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7.png"
              width="30"
              height="30"
            />
          </div>
          <div className="d-flex flex-row p-3">
            <img
              src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png"
              width="30"
              height="30"
            />
            <div className="myvideo ml-2">
              <img src="https://imgur.com/GOxU1jx.png" width="200" />
            </div>
          </div>
          <div className="d-flex flex-row p-3">
            <img
              src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png"
              width="30"
              height="30"
            />
            <div className="chat ml-2 p-3">
              <span className="text-muted dot">. . .</span>
            </div>
          </div>
          <div className="form-group px-3">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Type your message"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
