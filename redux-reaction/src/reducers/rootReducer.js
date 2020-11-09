const initState = {
  newTitleName: '',
  titles: [
    { id: 1, title: "The Matrix", watched: false },
    { id: 2, title: "Inception", watched: false },
    { id: 4, title: "A Quiet Place", watched: false },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'CHANGE_TO_WATCHED') {
    // let newState = Object.assign({}, state, { modalOpen: true})
    // newState.titles[action.index].watched = !newState.titles[action.index].watched
    
    let newTitles = new Array(...state.titles)
    newTitles[action.index].watched = !newTitles[action.index].watched

    return {
      ...state,
      titles: newTitles
    }
  } else if (action.type === 'DELETE_TITLE') {
    state.titles.splice(action.index, 1)
    let newTitles = new Array(...state.titles)

    return {
      ...state,
      titles: newTitles
    }
  }

  return state
};

export default rootReducer;
