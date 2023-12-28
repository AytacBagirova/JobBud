import React from 'react';

const UserHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          type="button"
          id="sidebarCollapse"
          className=" text-light rounded"
          style={{ backgroundColor: '#138496' }}
        >
          🍔
          <span>Toggle Sidebar</span>
        </button>
        <button
          className="btn btn-dark d-inline-block d-lg-none ml-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          🍔
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link fw-bold border rounded" href="/wallet">
                Wallet 💰
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold border rounded" href="/profile">
                User 🙋🏻‍♂️
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserHeader;
