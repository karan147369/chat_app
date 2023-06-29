const initialState = {};
const chatsReducer = (state = initialState, action) => {
  if (action.type === "updateChats") {
    return { ...action.payload };
  } else return { updated: "false", ...initialState };
};

export default chatsReducer;
