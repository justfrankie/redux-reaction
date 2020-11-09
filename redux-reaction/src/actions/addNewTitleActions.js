export const dispatchAddNewTitle = (newTitleName) => {
    return {
        type: 'ADD_TITLE',
        newTitle: {
          id: new Date().getTime(),
          title: newTitleName,
          watched: false
        }
    }
}