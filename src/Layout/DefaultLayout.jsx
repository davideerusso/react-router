import { NavLink, Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <header>
        <div className="nav-bar">
          <ul className="nav-inline container">
            <li className="link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="link">
              <NavLink to="/ChiSiamo">Chi siamo</NavLink>
            </li>

            <li className="link">
              <NavLink to="/Attori">Attori</NavLink>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
