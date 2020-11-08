import React from 'react';
import { Button } from '@material-ui/core';
import WatchList from './WatchList.js';

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

      <div className="watchlist__container">
     <WatchList titles={this.state.titles}/>

     <form onSubmit={(e) => this.addWatchTitle(e)}>
       <input placeholder="title"
       name="newTitleName"
       value={this.state.newTitleName}
       onChange={this.handleAddTitleChange}>
       </input>

       <button action="submit">Add</button>
     </form>

     </div>

      </div>
    );
  }
}

export default App;
