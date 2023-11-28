import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer content</footer>
    </>
  );
};

export default Layout;
