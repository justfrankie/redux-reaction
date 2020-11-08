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
  }

  render() {
    return (
      <div>

      <div class="watchlist__container">
     <WatchList titles={this.state.titles}/>

     <form>
       <input placeholder="title" name="newTitleName"></input>

       <button action="submit">Add</button>
     </form>

     </div>

      </div>
    );
  }
}

export default App;
