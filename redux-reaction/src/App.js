import React from "react";
import WatchList from "./WatchList.js";
import { TextField, Button } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import { connect } from "react-redux";
import AddForm from "./AddForm.js";

class App extends React.Component {
  render() {
    return (
      <div>
          <nav style={{boxShadow: 'rgb(154 154 154) -9px -2px 10px'}}>
            <div className="nav-wrapper white" style={{display: 'flex'}}>
              <a href="#" className="site-logo">
                hey, watch it!
              </a>
            <div className="searchbar__container">
              <input className="searchbar__input" style={{background: '#f7f7f7', borderRadius: '3px', height: '36px'}}></input>
              <Button color="primary">Search</Button>
              </div>

              <ul className="right hide-on-med-and-down" style={{ marginLeft: '0'}}>
                <li>
                  <a href="#" className="nav-item-a">Home</a>
                </li>
                <li>
                  <a href="#" className="nav-item-a" onClick={() => window.alert("Coming soon!")}>Account</a>
                </li>
              </ul>
            </div>
          </nav>

        <div className="watchList__container">

          <div id="leftColumn__container">
              <div id="leftColumn-nav__container">
                <ul id="leftColumn-nav__ul">
                <a className="left-nav__page">Home</a>
                <a className="left-nav__page">Categories</a>
                </ul>
              </div>

              <div>
                <ul id="left-nav__ul" >
                  <a className="left-nav__item">Action</a>
                  <a className="left-nav__item">Horror</a>
                  <a className="left-nav__item">Romance</a>
                  <a className="left-nav__item">Anime</a>
                  <a className="left-nav__item">Sci-Fi</a>
                </ul>

                <div id="newCategory">
                 + Add category  
                </div>

              </div>
            </div>

          <div className="middleColumn__container"><WatchList /></div>

          <div className="rightColumn__container">
          <AddForm />
            </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    titles: state.titles,
  };
};

export default connect(mapStateToProps)(App);
