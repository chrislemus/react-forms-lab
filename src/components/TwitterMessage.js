import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleMessage = () => {};

  render() {
    const charactersLeft = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
        />
        <br />
        <span>{charactersLeft}</span>
      </div>
    );
  }
}

export default TwitterMessage;
