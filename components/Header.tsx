export default function Header(props: { page: number }) {
  const menuNoAuth = (
    <div class="header__menu">
      <ul>
        <li>
          <a href="/login">
            <span>Login</span>
          </a>
        </li>
        <li>
          <a href="/signup">
            <span>Sign Up</span>
          </a>
        </li>
      </ul>
    </div>
  );

  const menuAuth = (
    <div class="header__menu">
      <ul>
        <li>
          <a href="/profile">
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="/logout">
            <span>Log out</span>
          </a>
        </li>
      </ul>
    </div>
  );

  let menu;

  if (
    true
  ) {
    menu = menuAuth;
  } else {
    menu = menuNoAuth;
  }

  return (
    <header class="header">
      <div class="header__title">
        <span>Tortitas</span>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/" class={props.page === 0 ? "active" : ""}>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/about" class={props.page === 1 ? "active" : ""}>
              <span>About</span>
            </a>
          </li>
        </ul>
      </nav>

      {menu}
    </header>
  );
}

const getCookie = () => {
  return (document.cookie || "").split(";");
};
