import React from "react";

const header = {
  color: "blue",
  fontWeight: 300,
  fontFamily: "Arial",
  fontSize: "36px",
};

class Channel extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "Rahul dey is working",
    };
  }

  subscribe() {
    this.setState({
      msg: "Thanks Pitangent for giving me this opportunity",
    });
  }

  render() {
    return (
      <div>
        <h1 style={header}> {this.state.msg} </h1>{" "}
        <strong>
          <button
            onClick={() => {
              this.subscribe();
            }}
          >
            {" "}
            Subscribe{" "}
          </button>{" "}
        </strong>{" "}
      </div>
    );
  }
}

export default Channel;
