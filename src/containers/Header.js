import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const nav_links = [
    { title: "Home", url: "/" },
    { title: "Contact us", url: "/pages/contact" },
  ];
  const nav_links_jsx = nav_links.map((nav_link) => (
    <NavLink exact key={nav_link.url} to={nav_link.url} className={isActive => isActive ? 'item active': 'item'}>
      {nav_link.title}
    </NavLink>
  ));

  return (
    <header className="ui container menu">
      <div className="left menu logo">
        <h2>FakeShop</h2>
      </div>
      <div className="right menu">
        <div className="ui secondary menu">
          {nav_links_jsx}
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
