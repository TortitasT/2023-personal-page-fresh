import { Component } from "preact";

export class LoginPanel extends Component {
  state = { username: "", password: "" };

  onSubmit = (e: Event) => {
    e.preventDefault();
    alert("Submitted a todo");
  };

  onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.setState({ value: target.value });
  };

  render() {
    return (
      <form method="POST" action="/api/login">
        <input type="text" name="username" />
        <input type="text" name="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
