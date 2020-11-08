const WatchList = ({titles}) => {
    const watchList = titles.length ? (
        titles.map((singleTitle, index) => {
            return (
                <div key={singleTitle.id}>
                    <span>{singleTitle.title}</span>
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