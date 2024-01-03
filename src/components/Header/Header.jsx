import { NavLink } from 'react-router-dom';
import './Header.css';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.userLogin);
  const currentUser = useMemo(() => user?.userInfo, [user]);

 
  

  const renderHeaderActions = () => {
    if (currentUser) {
      return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/createjob" style={{ color: '#ffffff' }}>
              Add Job
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/myJobs" style={{ color: '#ffffff' }}>
              My Jobs
            </a>
          </li>
        
          
        </ul>
      );
    }
    return (
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" style={{ color: '#ffffff' }}>
            Log In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register" className="nav-link" style={{ color: '#ffffff' }}>
            Register
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className="hero-header">
      <nav className="navbar navbar-expand-lg bg-primary border-bottom" data-bs-theme="primary">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="/" style={{ color: '#ffffff' }}>
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
            {renderHeaderActions()}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
