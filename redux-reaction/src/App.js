import React from 'react';
import WatchList from './WatchList.js';
import { TextField, Button } from '@material-ui/core';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      newTitleName: '',
      titles: [
        {id: 1, title: 'matrix'},
        {id: 2, title: 'inception'},
      ]
    }
    this.addWatchTitle = this.addWatchTitle.bind(this);
    this.handleAddTitleChange = this.handleAddTitleChange.bind(this);
  }

  addWatchTitle(e){
    e.preventDefault();
    let newTitle = {
      id: new Date().getTime(),
      title: this.state.newTitleName
    }

    let updatedTitles = [...this.state.titles, newTitle]

    this.setState({
      titles: updatedTitles,
      newTitleName: '',
    })
  }

  handleAddTitleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <div>

    <nav>
      <div class="nav-wrapper teal lighten-2" >
        <a href="#" class="brand-logo">Redux-Reaction</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Home</a></li>
          <li><a href="#">Account</a></li>
        </ul>
      </div>
    </nav>

      <div className="watchList__container">
     <WatchList titles={this.state.titles}/>

     <form onSubmit={(e) => this.addWatchTitle(e)} className="center">
     <TextField id="standard-basic" label="Watch Title"
     name="newTitleName"
     value={this.state.newTitleName}
     onChange={this.handleAddTitleChange}
     />

      <Button color="primary" variant="outlined" onClick={(e) => this.addWatchTitle(e)}>Add</Button>
     </form>

     </div>

      </div>
    );
  }
}

export default App;
