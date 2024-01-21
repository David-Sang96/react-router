import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="w-2/4 mx-auto p-2">
      <Navbar />
      <div className="w-3/4 mx-auto mt-5 border shadow-md p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
