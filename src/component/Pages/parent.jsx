import { Outlet } from "react-router-dom";
import Navbar from "../individual/nav";

export default function Parent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
