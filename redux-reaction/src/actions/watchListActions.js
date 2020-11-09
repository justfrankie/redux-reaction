export const deleteTitle = (index) => {
    return {
        type: 'DELETE_TITLE',
        index
    }
}

export const changeWatchedProperty = (index) => {
    return {
        type: "CHANGE_TO_WATCHED",
        index
    }
}