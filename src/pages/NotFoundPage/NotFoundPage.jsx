import React from 'react'
import "./NotFoundPage.css"
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="main">
      <div className="fof">
        <h1>Error 404</h1>
        <NavLink className="return-btn" to="/">RETURN</NavLink>
      </div>
    </div>
  );
}

export default NotFoundPage