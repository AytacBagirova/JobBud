import PropTypes from 'prop-types';
import UserHeader from '../Header/UserHeader';
import SidebarMenu from '../Sidebar/SidebarMenu';

const UserLayout = ({ children }) => (
  <div className="wrapper">
    <SidebarMenu />
    <div className="container-fluid p-3 justify-content-center h-100 min-vh-100 mt-3">
      <div id="content">
        <UserHeader />
        {children}
      </div>
    </div>
  </div>
);

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
