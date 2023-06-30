import "../styles/App.css";
import Chat from "../Components/chat";
import Message from "../Components/Message";
import { useEffect, useState } from "react";
import chatData from "../json/chat.json";

const Home = () => {
  const [chatList, setChatList] = useState([]);
  const [chatThread, setChatThread] = useState([]);
  const [currentlyChattingTo, setCurrentlyChattingTo] = useState();
  const [showFriendsList, setShowFriendsList] = useState(0);
  //ChatList should be updated once.
  useEffect(() => {
    setChatList(chatData);
    setChatThread(chatData[0].thread);
    setCurrentlyChattingTo(chatData[0].name);
  }, []);
  useEffect(() => {
    const element = document.getElementById("chatThread");
    element.scrollTo({
      top: 100000000000000,
      left: 0,
      behavior: "instant",
    });
    const array = document.getElementsByClassName("chat_container");

    for (let i of array) {
      i.addEventListener("click", () => {
        const id = i.getAttribute("id").split("-")[1];
        setChatThread(chatData[id].thread);
        setCurrentlyChattingTo(chatList[id].name);
      });
    }
  }, [chatList, chatThread, showFriendsList]);
  const sendMessage = (e) => {
    e.preventDefault();
    const element = document.getElementById("message");
    const message = element.value;
    if (message !== "") {
      let arr = [...chatThread, { status: "sent", message: message }];
      setChatThread(arr);
      element.value = "";
    }
  };
  const getSearchResults = (e) => {
    const arr = [];
    for (let i of chatData) {
      if (i.name.match(`^${e.target.value}`)) {
        arr.push(i);
      }
    }

    setChatList(arr);
  };
  const getFriendsList = () => {
    let value = showFriendsList;
    if (value === 0) setShowFriendsList(-1);
    else setShowFriendsList(0);
  };
  return (
    <>
      <div id="container">
        <sidebar id="sidebar">
          <input
            type="search"
            id="search"
            placeholder="Search for Conversation"
            onChange={(e) => getSearchResults(e)}
          ></input>
          <div id="addChat">
            <button onClick={() => getFriendsList()}>
              {showFriendsList === 0
                ? "Show all friends"
                : "Show previous chats"}
            </button>
            {chatList.length > 0 ? (
              chatList
                .filter((element) => element.thread.length > showFriendsList)
                .map((element, index) => {
                  return (
                    <>
                      <Chat
                        name={element.name}
                        lastMessage={
                          element.thread[element.thread.length - 1] !==
                          undefined
                            ? element.thread[element.thread.length - 1].message
                            : ""
                        }
                        id={index}
                        url={element.url}
                      ></Chat>
                      <br></br>
                    </>
                  );
                })
            ) : (
              <h1 style={{ color: "rgb(178, 179, 178)", textAlign: "center" }}>
                No Results Found
              </h1>
            )}
          </div>
        </sidebar>
        <div id="startNewChat">
          <img
            src="https://clipart.info/images/ccovers/1499955335whatsapp-icon-logo-png.png"
            style={{
              height: "30px",
              width: "30px",
              marginTop: "5px",
              display: "inline",
              opacity: "0.5",
            }}
          ></img>
          <div
            id="conversation_title"
            style={{ display: "inline", marginLeft: "10%" }}
          >
            {currentlyChattingTo}
          </div>
          <div id="chatThread">
            {chatThread.map((element) => {
              return (
                <>
                  <Message
                    status={element.status}
                    message={element.message}
                  ></Message>
                  <br></br>
                </>
              );
            })}
          </div>
          <div id="sendMessage">
            <form>
              <input
                type="text"
                placeholder="Type a message..."
                id="message"
              ></input>
              <input
                type="submit"
                value="Send"
                onClick={(e) => sendMessage(e)}
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
