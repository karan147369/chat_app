const updateChats = (state) => {
  return (dispatch) => {
    dispatch({
      type: "updateChats",
      payload: state,
    });
  };
};
export default updateChats;
