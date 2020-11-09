import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Component } from "react";

class WatchList extends Component {

  handleChangeWatched = (index) => {
      this.props.changeToWatched(index);
      // this.forceUpdate(); // method to force update
  }

  handleClickDelete = (index) => {
    this.props.handleDelete(index);
  }

  render() {
    let mappedList = this.props.titles.length ? (
      this.props.titles.map((singleTitle, index) => {
        return (
          <div className="title_item__container" key={singleTitle.id}>
            <span
              className="title__item"
              style={
                singleTitle.watched ? { textDecoration: "line-through" } : {}
              }
              onClick={() => this.handleChangeWatched(index)}
            >
              {singleTitle.title}
            </span>
            <Button
              className="title__removeButton"
              onClick={() => this.handleClickDelete(index)}
              variant="outlined"
              color="secondary"
            >
              remove
            </Button>
          </div>
        );
      })
    ) : (
      <p>You have no watch titles!</p>
    );

    // returns/renders the list item
    return <div className="center card-panel blue-text ">{mappedList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    titles: state.titles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (index) => {
      dispatch({ type: "DELETE_TITLE", index: index });
    },
    changeToWatched: (index) => {
        dispatch({ type: "CHANGE_TO_WATCHED", index: index });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
