import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Dashboard</h2>

      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>Home</NavLink>
        <NavLink to="/profile" className={styles.link}>Profile</NavLink>
        <NavLink to="/notifications" className={styles.link}>Notifications</NavLink>
      </nav>

      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}

export default Header;
