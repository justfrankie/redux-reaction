import React from 'react';
import WatchList from './WatchList.js';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import AddForm from './AddForm.js'

class App extends React.Component {

  constructor(){
    super();
    // this.state = {
    //   newTitleName: '',
    //   titles: [
    //     {id: 1, title: 'The Matrix', watched: false},
    //     {id: 2, title: 'Inception', watched: false},
    //     {id: 4, title: 'A Quiet Place', watched: false},
    //   ]
    // }
    this.addWatchTitle = this.addWatchTitle.bind(this);
    this.handleAddTitleChange = this.handleAddTitleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.changeToWatched = this.changeToWatched.bind(this);
  }

  addWatchTitle(e){
    e.preventDefault();
    let newTitle = {
      id: new Date().getTime(),
      title: this.props.newTitleName
    }

    let updatedTitles = [...this.props.titles, newTitle]

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

  handleDelete(index){
  this.props.titles.splice(index, 1);
    this.setState({
      titles: [...this.props.titles]
    })
  }

  changeToWatched(index){
    this.props.titles[index].watched = !this.props.titles[index].watched
    
    this.setState({
      titles: this.props.titles
    })
  }

  render() {
    const { titles } = this.props;
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
     <WatchList titles={this.props.titles} handleDelete={this.handleDelete} changeToWatched={this.changeToWatched}/>

     <AddForm />

     </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    titles: state.titles
  }
}

export default connect(mapStateToProps)(App);
