import React from "react";


function Navbar() {
  return (
    <div className="main-container">
      <div className="main-header">
        <div className="logo">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/91/91410.svg"
            alt="logo"
          />
          <span>18</span>
        </div>
        <div className="heading-name">
          <span>LOGO</span>
        </div>
        <div className="header-list">
          <div className="header-list-div">
            <span>Home</span>
          </div>
          <div className="header-list-div">
            <span>My Portfolio</span>
          </div>

          <div className="header-list-div">
            <span>Clients</span>
          </div>
          <div className="user">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/15/15235.svg"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;