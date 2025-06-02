import { NavLink, Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ChiSiamo">Chi siamo</NavLink>
          </li>

          <li>
            <NavLink to="/Attori">Attori</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />;
    </>
  );
}
