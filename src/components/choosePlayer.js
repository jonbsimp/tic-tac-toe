import React, { Component } from "react";

class Player extends Component {
  handleForm(event) {
    event.preventDefault();
    console.log(this.props.player(event.target.player.value));
  }

  render() {
    return (
      <form onSubmit={event => this.handleForm(event)}>
        <label>
          Player X
          <input type="radio" name="player" value="X" />
        </label>
        <label>
          Player O
          <input type="radio" name="player" value="O" />
        </label>
        <input type="submit" value="Start" />
      </form>
    );
  }
}

export default Player;
