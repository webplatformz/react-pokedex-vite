import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { useUserContext } from "../../state/UserContext";
import { VisitCounter } from "./VisitCounter";

export function Layout() {
  const { username } = useUserContext();
  return (
    <div className={styles.root}>
      <header>
        <nav>
          <Link to="/pokemon">Home</Link> | <Link to="/profile">Profile</Link>
        </nav>
        <VisitCounter />
        <span>{username && `Hello, ${username}`}</span>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
