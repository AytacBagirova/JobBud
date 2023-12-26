import React from 'react';

const UserProfileSidebar = () => {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="px-sm-2 p-3 bg-secondary bg-gradient rounded w-100">
          <div class="d-flex flex-column align-items-sm-start px-3 pt-2 text-white">
            <p className="h5 my-4">
              <b>Welcome, User</b>
            </p>
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-sm-start gap-3"
              id="menu"
            >
              <li class="nav-item">
                <a href="/Settings" class="nav-link align-middle px-0 text-white">
                  &nbsp;Edit Profile
                </a>
              </li>
              <li class="nav-item">
                <a href="/OrderHistory" class="nav-link align-middle px-0 text-white">
                  &nbsp;Wallet
                </a>
              </li>
              <li class="nav-item">
                <a href="/Contact" class="nav-link align-middle px-0  text-white">
                  &nbsp;Offer History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSidebar;
