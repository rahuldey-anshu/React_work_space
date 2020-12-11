import React from "react";
import "../profile/profile.style.css";

class Event extends React.Component {
  state = {
    name: "",
  };
  handleButtonClick = (event) => {
    console.log(event.target);
  };

  //Two way data Binding
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Hello dey</h2>
        <h1>What is an Event</h1>
        <p>lorem100</p>
        <button onClick={this.handleButtonClick}>Click Me</button>
        <br />
        <input
          className="TextField"
          type="text"
          placeholder="I am a textbox"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <br />
        {this.state.name && <h3>welcome {this.state.name}</h3>}
      </div>
    );
  }
}

export default Event;
