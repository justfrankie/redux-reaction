import { TextField, Button } from '@material-ui/core';
import { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchAddNewTitle } from './actions/addNewTitleActions.js';

class AddForm extends Component {
  handleAddingTitle = (e) => {
    e.preventDefault();
    this.props.addWatchTitle(this.props.newTitleName)
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.props.handleAddTitleChange(e)
  }

  render (){
    return (
    <form onSubmit={e => this.handleAddingTitle(e)} className="submitForm center">
      <TextField
        id="standard-basic"
        label="Watch Title"
        name="newTitleName"
        value={this.props.newTitleName}
        onChange={(e) => this.handleInputChange(e)}
      />

      <Button
        color="primary"
        variant="outlined"
        onClick={(e) => this.handleAddingTitle(e)}
      >
        Add
      </Button>
    </form>
    );
  };
};

const mapStateToProps = (state) => {
  return {
      newTitleName: state.newTitleName
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addWatchTitle: (newTitleName) => { dispatch(dispatchAddNewTitle(newTitleName))},
        handleAddTitleChange: (e) => { dispatch({type: 'HANDLE_CHANGE', newInput: e.target.value})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);