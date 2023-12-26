import React from "react";

const Footer = () => {
  return (
    <footer className="py-1 bg-primary mt-3">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-white">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/findjob" className="nav-link px-2 text-white">
            Find Job
          </a>
        </li>
        <li className="nav-item">
          <a href="/findfreelancer" className="nav-link px-2 text-white">
            Find Freelancer
          </a>
        </li>
      </ul>
      <p className="text-center text-white">© 2023 JobBud</p>
    </footer>
  );
};

export default Footer;
