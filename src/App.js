import React from "react";

import propTypes from "prop-types";
import Profile from "./profile";
import p from "./components/Profile_Photo.jpg";

const Mohamed = {
  Name: "Mohamed",
  Prof: "Pilote",
  Bio:
    "Epam,EABA,Base aerienne Sfax,Base aerienne Bizerte,Base aerienne Gabes,Base aerienne Gafsa",
  Photo: p
};

export default class App extends React.Component {
  state = {
    Mohamed: "Mohamed",
    showProfile: false,
    timer: 0
  };

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.timer}</h1>
        <button
          onClick={() => {
            this.setState({
              showProfile: !this.state.showProfile
            });
          }}
        >
          {this.state.showProfile ? "hide" : "show"}
        </button>
        {this.state.showProfile && <Profile />}
      </div>
    );
  }
}
