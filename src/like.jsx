import React, { Component } from "react";
import "./like.css";

class Like extends Component {
  liked = { liked: "liked", like_button: "liked-button" };

  state = {
    count: 100,
    style: "like-button"
  };
  // the handleClick() can be moved into a like-counter class then will be imported here
  // the styles are impoted from ./like.css class

  handleClick = () => {
    let newState = this.state;
    console.log(newState);
    if (newState.count == 100) {
      newState.count += 1;
      newState.style = "liked";
    } else {
      newState.count -= 1;
      newState.style = "like-button";
    }
    this.setState({ count: newState.count, style: newState.style });
  };

  render() {
    return (
      <span
        type="Button"
        className={this.state.style}
        onClick={this.handleClick}
      >
        Like |{this.state.count}
      </span>
    );
  }
}

export default Like;
