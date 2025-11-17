import { Link, Outlet } from "react-router";
import styles from "./Layout.module.scss";
import { VisitCounter } from "./VisitCounter";
import { profileService } from "../../db/profileService";
import type { Route } from "./+types/Layout";

export const loader = () => {
  return profileService.getProfile();
};

function Layout({ loaderData }: Route.ComponentProps) {
  return (
    <div className={styles.root}>
      <header>
        <nav>
          <Link to="/pokemon">Home</Link> | <Link to="/profile">Profile</Link>
        </nav>
        <VisitCounter />
        <span>{loaderData?.name && `Hello, ${loaderData.name}`}</span>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
