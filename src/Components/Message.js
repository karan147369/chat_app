import React from "react";
import "../styles/message.css";
const Message = (props) => {
  return (
    <>
      <div className="message_container">
        <p className={`messageText-${props.status}`}>
          <span>{props.message}</span>
        </p>
      </div>
    </>
  );
};
export default Message;
