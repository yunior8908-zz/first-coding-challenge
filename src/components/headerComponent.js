import React from 'react';
import { NavLink } from 'react-router-dom';


const HeaderComponent = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-dark"
    style={{ marginBottom: '15px' }}
  >
    <NavLink className="navbar-brand" to="/launches">Launches</NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
  </nav>
);

export default HeaderComponent;
