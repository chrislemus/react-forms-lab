import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      this.props.handleLogin(this.state);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
