const UserProfileSidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="px-sm-2 p-3 bg-secondary bg-gradient rounded w-100">
          <div className="d-flex flex-column align-items-sm-start px-3 pt-2 text-white">
            <p className="h5 my-4">
              <b>Welcome, User</b>
            </p>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-sm-start gap-3"
              id="menu"
            >
              <li className="nav-item">
                <a href="/Settings" className="nav-link align-middle px-0 text-white">
                  &nbsp;Edit Profile
                </a>
              </li>
              <li className="nav-item">
                <a href="/OrderHistory" className="nav-link align-middle px-0 text-white">
                  &nbsp;Wallet
                </a>
              </li>
              <li className="nav-item">
                <a href="/Contact" className="nav-link align-middle px-0  text-white">
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
