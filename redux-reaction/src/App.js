import React from "react";
import WatchList from "./WatchList.js";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import AddForm from "./AddForm.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper teal lighten-2">
            <a href="#" className="brand-logo">
              Redux-Reaction
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#" onClick={() => window.alert("Coming soon!")}>Account</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="watchList__container">
          <WatchList />
          <AddForm />
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
