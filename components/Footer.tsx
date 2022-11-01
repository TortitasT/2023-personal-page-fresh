export default function Footer() {
  return (
    <footer class="footer">
      <ul>
        <li>
          <h2>Sitemap</h2>
        </li>
        <li>
          <a href="/home">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/about">
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="/login">
            <span>Login</span>
          </a>
        </li>
        <li>
          <a href="/signup">
            <span>Sign up</span>
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <h2>Social</h2>
        </li>
        <li>
          <a href="https://twitter.com/tortitas_t" target="_blank">
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/tortitast" target="_blank">
            <span>Github</span>
          </a>
        </li>
        <li>
          <a href="https://tortitas.itch.io/" target="_blank">
            <span>Itch.io</span>
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <p>
            @tortitast <br />
            2022 - 2023
          </p>
          <br />
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge-dark.svg"
              alt="Made with Fresh"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
