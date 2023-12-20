import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = React.useState(false);

  const currentUser = {
    username: "user1",
    email: "user@mail.com",
    password: "123",
    isFreelancer: true,
    isLoggedIn: true,
  };

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
              {currentUser.isFreelancer ? (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/findjob"
                    style={{ color: "#ffffff" }}
                  >
                    Find Job
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/findfreelancer"
                    style={{ color: "#ffffff" }}
                  >
                    Find Freelancer
                  </a>
                </li>
              )}
            </ul>
            <div className="profile" onClick={() => setOpen(!open)}>
              {currentUser.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink className="nav-link" style={{ color: "#ffffff" }}>
                    User
                  </NavLink>
                  {open && (
                    <div className="options">
                      <Link to="/profile">Profile</Link>
                      <hr />
                      {!currentUser.isFreelancer ? (
                        <>
                          <Link to="/createjob">Create new job</Link>
                          <hr />
                          <Link to="/bids">My Bids</Link>
                          <hr />
                          <Link to="/approvejobs">Jobs awaiting approval</Link>
                          <hr />
                          <Link to="payments">My Payments </Link>
                          <hr />
                        </>
                      ) : (
                        <>
                          <Link to="/myjobs">My Jobs</Link>
                          <hr />
                        </>
                      )}
                      <Link to="/">Logout</Link>
                    </div>
               
                  )}
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      style={{ color: "#ffffff" }}
                    >
                      Log In
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link"
                      style={{ color: "#ffffff" }}
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
