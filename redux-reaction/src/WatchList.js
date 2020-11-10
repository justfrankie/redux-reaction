import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Component } from "react";
import { deleteTitle } from './actions/watchListActions.js';
import { changeWatchedProperty } from './actions/watchListActions.js'

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
            >
              Remove
            </Button>
          </div>
        );
      })
    ) : (
      <p>You have no watch titles!</p>
    );

    return <div className="center card-panel">{mappedList}</div>;
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
      dispatch(deleteTitle(index));
    },
    changeToWatched: (index) => {
        dispatch(changeWatchedProperty(index));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
