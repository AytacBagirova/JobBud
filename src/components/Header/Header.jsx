import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.userLogin);
  let currentUser = null;
  if (user.userInfo)
    currentUser = {
      ...user.userInfo,
    };

  return (
    <header className="hero-header">
      <nav
        className="navbar navbar-expand-lg bg-primary border-bottom"
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
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {currentUser ? (
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

            {currentUser ? (
              <>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/createjob"
                      style={{ color: "#ffffff" }}
                    >
                      Add Job
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/myJobs"
                      style={{ color: "#ffffff" }}
                    >
                      My Jobs
                    </a>
                  </li>
                  <li className="nav-item profile">
                    <NavLink
                      className="nav-link"
                      style={{ color: "#ffffff" }}
                      onClick={() => setOpen(!open)}
                    >
                      User
                    </NavLink>
                    {open && (
                      <div className="options">
                        <div className="pendingAmount">Pending: 96TL</div>
                        <div className="amount">Amount: 16TL</div>
                        <hr />
                        <a href="/profile">Edit Profile</a>
                        <hr className="text-dark" />

                        <a href="/">Logout</a>
                      </div>
                    )}
                  </li>
                </ul>
              </>
            ) : (
              <>
                {" "}
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
