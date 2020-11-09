import {Button } from '@material-ui/core';

const WatchList = ({titles, handleDelete}) => {
    const watchList = titles.length ? (
        titles.map((singleTitle, index) => {
            return (
                <div className="title_item__container" key={singleTitle.id}>
                    <span className="title__item">{singleTitle.title}</span>
                    <Button className="title__removeButton" onClick={() => handleDelete(index)} variant="outlined" color="secondary">remove</Button>
                </div>
            )
        })
    ) :  (
        <p>You have no watch titles!</p>
    ) 

    // returns/renders the list item
    return (
        <div className="center card-panel blue-text ">
            {watchList}
        </div>
    )
}

export default WatchList;