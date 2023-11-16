import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="hero-header">
      <nav className="hero-nav container">
        <div className="hero-nav-left">
          <ul className="hero-nav-links">
            <li className="hero-nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hero-nav-link">
              <NavLink to="/findwork">Find Work</NavLink>
            </li>
            <li className="hero-nav-link">
              <NavLink to="/findfreelancers">Find Freelancers</NavLink>
            </li>
            <li className="hero-nav-link">
              <NavLink to="/register">Sing-up / Login</NavLink>
            </li>
          </ul>
        </div>
        <div className="hero-nav-right">
          <a className="hero-main-cta" href="#">TEST</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
