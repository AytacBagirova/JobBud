import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="hero-header">
      <nav
        className="navbar navbar-expand-lg bg-primary border-bottom border-body"
        data-bs-theme="primary"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand fs-4"
            href="/"
            style={{ color: "#ffffff" }}
          >
            JobBud
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarScroll"
          >
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/findjob"
                  style={{ color: "#ffffff" }}
                >
                  Find job
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/findfreelancer"
                  style={{ color: "#ffffff" }}
                >
                  Find Freelancer
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "#ffffff" }}
                  aria-disabled="true"
                  href="/login"
                >
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "#ffffff" }}
                  aria-disabled="true"
                  href="/register"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
