import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.js", "ReactJs", "React Native"],
  };
  render() {
    console.log(this.state);
    return (
      <ul>
        {this.state.techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    );
  }
}

export default TechList;
