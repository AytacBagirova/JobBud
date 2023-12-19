import React from "react";

const Footer = () => {
  return (
    <footer class="py-1 bg-primary mt-3">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="/" class="nav-link px-2 text-white">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="/findjob" class="nav-link px-2 text-white">
            Find Job
          </a>
        </li>
        <li class="nav-item">
          <a href="/findfreelancer" class="nav-link px-2 text-white">
            Find Freelancer
          </a>
        </li>
      </ul>
      <p class="text-center text-white">© 2023 JobBud</p>
    </footer>
  );
};

export default Footer;
