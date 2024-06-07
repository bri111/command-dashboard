import React from 'react';

const Navbar = () => {
  return (
    <>
      <style>{`
        .navbar-custom {
          background: linear-gradient(to bottom, #00274c 30%, #ffffff 100%); /* Adjusted gradient */
          padding: 1rem;
        }
        .navbar-brand-custom {
          display: flex;
          align-items: center;
          color: #FFD700; /* Gold color for the text */
        }
        .navbar-brand-custom img {
          margin-right: 1rem;
        }
        .navbar-text-custom h2 {
          font-size: 2rem;
          color: #FFD700; /* Gold color for the text */
          margin-bottom: 0;
          font-weight: bold;
        }
        .navbar-text-custom h5 {
          color: #FFFFFF; /* White color for the subtext */
          margin-bottom: 0;
          font-weight: normal;
        }
      `}</style>
      <nav className="navbar navbar-light navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand navbar-brand-custom" href="/dashboard">
            <img src="/9th MSC.png" alt="image description" width="111" height="111" />
            <div className="navbar-text-custom">
              <h2>9th Mission Support Command</h2>
              <h5>Honolulu, Hawaii</h5>
            </div>
          </a>
        </div>
      </nav></>
  );
}

export default Navbar;
