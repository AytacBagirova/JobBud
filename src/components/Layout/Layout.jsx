import PropTypes from 'prop-types';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container-fluid p-3 justify-content-center h-100 min-vh-100 mt-3">
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
