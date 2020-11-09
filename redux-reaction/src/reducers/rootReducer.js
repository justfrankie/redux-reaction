const initState = {
  newTitleName: "",
  titles: localStorage.getItem("titles")
    ? JSON.parse(localStorage.getItem("titles"))
    : [],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "CHANGE_TO_WATCHED") {
    let newTitles = new Array(...state.titles);
    newTitles[action.index].watched = !newTitles[action.index].watched;

    return {
      ...state,
      titles: newTitles,
    };
  } else if (action.type === "DELETE_TITLE") {
    state.titles.splice(action.index, 1);
    let newTitles = new Array(...state.titles);
    localStorage.setItem("titles", JSON.stringify(newTitles));
    return {
      ...state,
      titles: newTitles,
    };
  } else if (action.type === "HANDLE_CHANGE") {
    state.newTitleName = action.newInput;
    return {
      ...state,
      newTitleName: state.newTitleName,
    };
  } else if (action.type === "ADD_TITLE") {
    let newStateTitles = [...state.titles, action.newTitle];
    localStorage.setItem("titles", JSON.stringify(newStateTitles));
    return {
      newTitleName: "",
      titles: newStateTitles,
    };
  }

  return state;
};

export default rootReducer;
