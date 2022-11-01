import { useState } from "preact/hooks";

export default function LoginPanel() {
  const [state, setState] = useState({
    username: "",
    password: "",
    error: "",
  });

  const username: string = state.username;
  const password: string = state.password;
  const error: string = state.error;

  const handleChange = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();

    const { name, value } = event.target as HTMLInputElement;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event: Event) => {
    const formData = new FormData(event.target as HTMLFormElement);

    fetch("/api/login", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = "/";
      } else {
        response.text().then((data: string) => {
          setState({ ...state, error: data });
        });
      }
    });

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <form onSubmit={handleSubmit} class="loginPanel">
      <h2 class="title">Identify yourself</h2>

      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <p class="error">{error}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
