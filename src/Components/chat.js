import react from "react";
import "../styles/Chat.css";
const Chat = (props) => {
  return (
    <>
      <div className="chat_container" id={`chat_container-${props.id}`}>
        <div id="profile_image">
          <img
            src={props.url}
            alt="Not Avlb"
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          ></img>
        </div>
        <div id="chat_details">
          <h1>{props.name}</h1>
          <h2>{props.lastMessage}</h2>
        </div>
      </div>
    </>
  );
};

export default Chat;
