import { TextField, Button } from '@material-ui/core';
import { Component } from 'react';
import { connect } from 'react-redux';

class AddForm extends Component {
  render (){
    return (
    <form onSubmit={(e) => this.props.addWatchTitle(e)} className="submitForm center">
      <TextField
        id="standard-basic"
        label="Watch Title"
        name="newTitleName"
        value={this.props.newTitleName}
        onChange={this.props.handleAddTitleChange}
      />

      <Button
        color="primary"
        variant="outlined"
        onClick={(e) => this.props.addWatchTitle(e)}
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
        addWatchTitle: () => { dispatch({type: 'ADD_TITLE'})},
        handleAddTitleChange: () => { dispatch({type: 'HANDLE_CHANGE'})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);