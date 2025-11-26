import Navbar from "../components/main/Navbar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
