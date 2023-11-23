import "./componentStyling.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section className="navSection">
      <div className="navComponent">
        <div className="websiteTitle">
          <NavLink to={":"}>
            <h1>Dinapaws</h1>
          </NavLink>
        </div>

        <div className="navOptions">
          <NavLink to={".home"}>
            <p>Home</p>
          </NavLink>
          <NavLink to={".about"}>
            <p>About</p>
          </NavLink>
          <NavLink to={".polices"}>
            <p>Polices</p>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
