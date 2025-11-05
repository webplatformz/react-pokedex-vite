import { Link, Outlet, useLoaderData } from "react-router";
import styles from "./Layout.module.scss";
import { VisitCounter } from "./VisitCounter";
import { profileService } from "../../db/profileService";

export const loader = () => {
  return profileService.getProfile();
};

function Layout() {
  const profile = useLoaderData<typeof loader>();

  return (
    <div className={styles.root}>
      <header>
        <nav>
          <Link to="/pokemon">Home</Link> | <Link to="/profile">Profile</Link>
        </nav>
        <VisitCounter />
        <span>{profile?.name && `Hello, ${profile.name}`}</span>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
