function Layout(props) {
  return (
    <div>
      <header>
        <h1>My Website</h1>
      </header>

      {props.children}

      <footer>
        <p>© 2026 My Website</p>
      </footer>
    </div>
  );
}

export default Layout;